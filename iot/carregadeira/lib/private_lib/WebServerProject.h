#include "WebServer.h"
#include "FS.h"
class WebServerProject
{
private:
    int port;
    WebServer server;
public:
    WebServerProject(/* args */);
    ~WebServerProject();
    void setPort(int _port);
    void init();
    void createRoute(const Uri &_uri,WebServer::THandlerFunction handle);
    void handleClientRequests();
    void send(int code,const String &contentType,const String &content);
    void streamFile(File file, const String &contentType);
    int getPort();
};

WebServerProject::WebServerProject(/* args */)
{
}

WebServerProject::~WebServerProject()
{
}

void WebServerProject::setPort(int _port)
{
    if(_port > 0 && _port <= 65535){
        this->port = _port;
    }else{
        this->port = 80;
    }  
}

void WebServerProject::init()
{
    this->server.begin(this->port);
}

void WebServerProject::createRoute(const Uri &_uri,WebServer::THandlerFunction handle)
{
    this->server.on(_uri,handle);
}

void WebServerProject::handleClientRequests()
{
    this->server.handleClient();
}

void WebServerProject::send(int code, const String &contentType, const String &content)
{
    this->server.send(code,contentType,content);
   
}

void WebServerProject::streamFile(File file, const String &contentType)
{
    this->server.streamFile(file,contentType);
}
int WebServerProject::getPort()
{
    return this->port;
}
