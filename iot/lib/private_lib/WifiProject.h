#include <Arduino.h>
#include <WiFi.h>
class WifiProject
{
private:
    char *ssid;
    char *password;
    int channel;
    WiFiClass wifi;
public:
    WifiProject();
    void init();
    void setSSiD(char *_ssid);
    void setPassword(char *pass);
    void setChannel(int _channel);
    void getSSID();
    boolean verifyConnectionWifi();
    String  getLocalIPString();
    IPAddress getLocalIPAddress();
};

WifiProject::WifiProject()
{
}
boolean WifiProject::verifyConnectionWifi(){
    if(wifi.status() != WL_CONNECTED){
        return false;
    }else{
        return true;
    }
}
String WifiProject::getLocalIPString()
{
    return this->wifi.localIP().toString().c_str();
}
IPAddress WifiProject::getLocalIPAddress()
{
    return this->wifi.localIP();
}
void WifiProject::getSSID()
{
    //Metodo que exibe no console serial o ssid
    Serial.begin(9600);
    Serial.print(this->ssid);
}
void WifiProject::setSSiD(char *_ssid){
    //Inserindo o ssid
    this->ssid = _ssid;
}
void WifiProject::setPassword(char *pass){
    //Inserindo o password
    this->password = pass;
}
void WifiProject::setChannel(int _channel){
    //Inserindo o canal
    this->channel = _channel;
}
void WifiProject::init()
{
    //Iniciando a conexão serial
    Serial.begin(9600);
    Serial.println("Conectando o wifi!");
    //Condição caso o canal não seja informado
    if(!this->channel){
        Serial.println("Informações do canal do Getway não informadas!");
        Serial.println("Iniciando conexão sem as informações do canal!");
        wifi.begin(this->ssid, this->password);
        while (wifi.status() != WL_CONNECTED) {
            delay(100);
            Serial.print(".");
        }
        Serial.println(" Conectado!");
        Serial.print("Endereço IP: ");
        Serial.println(wifi.localIP());
        

    //Condição caso o SSID não seja informado
    }else if(!this->ssid){
        //Caso não seja corrigido, continuara relatando o problema
        while(!this->ssid){
            Serial.println("Informações do SSID do Getway não informadas!");
        }
    //Condição caso o Password não seja informado
    }else if(!this->password){
        //Caso não seja corrigido, continuara relatando o problema
        while(!this->password){
            Serial.println("Informações senha do Getway não informadas!");
        }
    //Condição caso todas as informações sejam passadas corretamente
    }else{
        WiFi.begin(this->ssid, this->password, this->channel);
        while (WiFi.status() != WL_CONNECTED) {
            delay(100);
            Serial.print(".");
        }
        Serial.println(" Conectado!");
        Serial.print("Endereço IP: ");
        Serial.println(WiFi.localIP());
    }

}