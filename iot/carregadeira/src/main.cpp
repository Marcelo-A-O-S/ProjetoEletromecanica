#include "Arduino.h"
#include "WebServerProject.h"
#include "WifiProject.h"
#include "SPIFFS.h"
#include <WebSockets.h>
#include <WebSocketsServer.h>
#include <ArduinoJson.h>
#include "ESPmDNS.h"
#include <ESP32Servo.h>
int farois = 16;
int setaFrente1 = 21;
int setaFrente2 = 22;
int setaTras1 = 23;
int setaTras2 = 5;
int pinServoMotor2 = 26;
int pinServoMotor1 = 25;
int pinServoDirecao = 14;
int pinServoDirecao2= 13;
int pinServoConcha = 18;
int pinServoBraco = 19;
unsigned long ultimaMensagem = 0;
unsigned long intervaloMinimo = 100;
unsigned long agora = 0;
const char *host = "esp32.local";
WifiProject *wifi = new WifiProject();
WebServerProject *serverProject = new WebServerProject();
WebSocketsServer webSocketServer = WebSocketsServer(4444);
Servo servoDirecao;
Servo servoDirecao2;
Servo servoMotor1;
Servo servoMotor2;
Servo servoConcha;
Servo servoBraco;
void turnOnHeadlights()
{
    Serial.println("Ligando farois...");
    digitalWrite(farois, HIGH);
}
void turnOffHeadlights()
{
    Serial.println("Desligando farois...");
    digitalWrite(farois, LOW);
}
void stop()
{
    Serial.println("Parando projeto.");
    servoMotor1.write(90);
    servoMotor2.write(90);
}
void moveRight()
{
    Serial.println("Mudando direcao para direita");
    servoDirecao.write(135);
    servoDirecao2.write(135);
}
void moveLeft()
{
    Serial.println("Mudando direcao para esquerda");
    servoDirecao.write(45);
    servoDirecao2.write(45);
}
void moveForwardDirection()
{
    
    servoDirecao.write(90);
    servoDirecao2.write(90);
}
void moveForward()
{
    Serial.println("Avancar.");
    servoMotor1.write(0);
    servoMotor2.write(180);
}
void moveBackward()
{
    Serial.println("Retornar.");
    servoMotor1.write(180);
    servoMotor2.write(0);
}
//funcao de movimento de concha
void moveShell(int pos){
    Serial.println("Movendo concha.");
    servoConcha.write(pos);
}
//funcao de movimento de braco
void moveArm(int pos){
    Serial.println("Movendo braco.");
    servoBraco.write(pos);
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
            const char *statusLighthouse = doc["statusLighthouse"];
            const char *shell = doc["shell"];
            const char *arm = doc["arm"];
            if (direction != nullptr)
            {
                if (strcmp(direction, "FORWARD") == 0)
                {
                    moveForward();
                }
                if (strcmp(direction, "BACKWARD") == 0)
                {
                    moveBackward();
                }
                if (strcmp(direction, "LEFT") == 0)
                {
                    moveLeft();
                }
                if (strcmp(direction, "RIGHT") == 0)
                {
                    moveRight();
                }
                if (strcmp(direction, "STOP") == 0)
                {
                    Serial.println("Parando e alinhando direção.");
                    stop();
                    moveForwardDirection();
                }
            }
            else if (statusLighthouse != nullptr)
            {
                if (strcmp(statusLighthouse, "ON") == 0)
                {
                    turnOnHeadlights();
                }
                if (strcmp(statusLighthouse, "OFF") == 0)
                {
                    turnOffHeadlights();
                }
            }else if(shell != nullptr){
                moveShell(atoi(shell));
            }else if(arm != nullptr){
                moveArm(atoi(arm));
            }
            else
            {
                Serial.println("Informacoes de direcao e status do farol ausentes!");
            }
        }
        else
        {
            Serial.println("Erro ao parsear JSON!");
        }
        if (webSocketServer.connectedClients() > 0)
        {
            webSocketServer.sendTXT(num, "Mensagem recebida!");
        }
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
    pinMode(farois, OUTPUT);
    pinMode(setaFrente1, OUTPUT);
    pinMode(setaFrente2, OUTPUT);
    pinMode(setaTras1, OUTPUT);
    pinMode(setaTras2, OUTPUT);
    Serial.println("Leds dos farois e setas configurados com sucesso!");
    Serial.println("Projeto inicializado!");
    wifi->setSSiD("Teste3");
    wifi->setPassword("12345678");
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
    servoDirecao2.attach(pinServoDirecao2);
    servoMotor1.attach(pinServoMotor1);
    servoMotor2.attach(pinServoMotor2);
    servoConcha.attach(pinServoConcha);
    servoBraco.attach(pinServoBraco);
    servoDirecao.write(90);
    servoDirecao2.write(90);
    servoMotor1.write(90);
    servoMotor2.write(90);
    servoConcha.write(0);
}
void loop()
{
    serverProject->handleClientRequests();
    webSocketServer.loop();
    delay(10);
    int servoDirecaoPosition = servoDirecao.read();
    //Setas de sinalizacao
    if(servoDirecaoPosition == 135){
        digitalWrite(setaFrente1, HIGH);
        digitalWrite(setaTras1, HIGH);
        delay(500);
        digitalWrite(setaFrente1, LOW);
        digitalWrite(setaTras1, LOW);
        
    }else if(servoDirecaoPosition == 45){
        digitalWrite(setaFrente2, HIGH);
        digitalWrite(setaTras2, HIGH);
        delay(500);
        digitalWrite(setaFrente2, LOW);
        digitalWrite(setaTras2, LOW);
    }
}