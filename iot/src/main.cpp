#include "Arduino.h"
#include "WebServerProject.h"
#include "WifiProject.h"
#include "SPIFFS.h"
#include <WebSockets.h>
#include <WebSocketsServer.h>
#include <ArduinoJson.h>
#include "ESPmDNS.h"
#include "Servo.h"
int pinServoMotor2 = 13;
int pinServoMotor1 = 12;
int pinServoDirecao = 14;
const char *host = "esp32.local";
WifiProject *wifi = new WifiProject();
WebServerProject *serverProject = new WebServerProject();
WebSocketsServer webSocketServer = WebSocketsServer(4444);
Servo servoDirecao;
Servo servoMotor1;
Servo servoMotor2;
void stop()
{
    servoMotor1.write(90);
    servoMotor2.write(90);
}
void moveForward()
{
    servoMotor1.write(180);
    servoMotor2.write(180);
    delay(2000);
}
void moveBackward()
{
    servoMotor1.write(0);
    servoMotor2.write(0);
    delay(2000);
}
String getDadosPlaca()
{
    StaticJsonDocument<200> jsonDoc;
    jsonDoc["IPAdress"] = wifi->getLocalIPString();
    jsonDoc["wifi"] = "Conectado";
    jsonDoc["status"] = "Conectado";
    jsonDoc["host"] = host;
    String jsonResponse;
    serializeJson(jsonDoc, jsonResponse);
    return jsonResponse;
}
void webSocketEvent(uint8_t num, WStype_t type, uint8_t *payload, size_t length)
{
    switch (type)
    {
    case WStype_DISCONNECTED:
        Serial.printf("[%u] Desconectado!\n", num);
        break;

    case WStype_CONNECTED:
    {
        IPAddress ip = webSocketServer.remoteIP(num);
        Serial.printf("[%u] Conectado de %d.%d.%d.%d\n", num, ip[0], ip[1], ip[2], ip[3]);
        break;
    }

    case WStype_TEXT:
    {
        String mensagem = (char *)payload;
        StaticJsonDocument<256> doc;
        DeserializationError erro = deserializeJson(doc, mensagem);
        if (!erro)
        {
            const char *direction = doc["direction"];
            Serial.printf("Direção: %s\n", direction);
            if(direction = "FORWARD"){
                moveForward();
            }else if(direction = "BACKWARD"){
                moveBackward();
            }else{
                stop();
            }
        }
        else
        {
            Serial.println("Erro ao parsear JSON!");
        }
        webSocketServer.sendTXT(num, "Mensagem recebida!");
        break;
    }

    case WStype_BIN:
    {
        Serial.printf("[%u] Recebido binário de tamanho: %u\n", num, length);
        break;
    }
    }
}

void handleRoot()
{
    serverProject->send(200, "text/plain", "Placa eletronica funcionando!");
}
void handlePainel()
{
    File file = SPIFFS.open("/index.html", "r");
    if (!file)
    {
        serverProject->send(500, "text/plain", "Erro ao carregar os arquivo HTML!");
        return;
    }
    serverProject->streamFile(file, "text/html");
    file.close();
}
void handleGetDados()
{
    String dados = getDadosPlaca();
    serverProject->send(200, "application/json", dados);
}
void setup()
{
    Serial.begin(9600);
    Serial.println("Projeto inicializado!");
    wifi->setSSiD("AUGUSTO");
    wifi->setPassword("08083890");
    wifi->init();
    if (!MDNS.begin("esp32"))
    {
        Serial.println("Erro ao iniciar mDNS");
        return;
    }
    serverProject->setPort(80);
    serverProject->init();
    if (!SPIFFS.begin(true))
    {
        return;
    }
    serverProject->createRoute("/", handleRoot);
    Serial.printf("Rota criada: http://%s/%s", host, "");
    Serial.println("");
    serverProject->createRoute("/painel", handlePainel);
    Serial.printf("Rota criada: http://%s/%s", host, "painel");
    Serial.println("");
    serverProject->createRoute("/dados", handleGetDados);
    Serial.printf("Rota criada: http://%s/%s", host, "dados");
    Serial.println("");
    webSocketServer.begin();
    webSocketServer.onEvent(webSocketEvent);
    Serial.println("Servidor WebSocket iniciado");
    servoDirecao.attach(pinServoDirecao);
    servoMotor1.attach(pinServoMotor1);
    servoMotor2.attach(pinServoMotor2);
    servoDirecao.write(90);
    servoMotor1.write(90);
    servoMotor2.write(90);
}
void loop()
{

    serverProject->handleClientRequests();
    webSocketServer.loop();
}