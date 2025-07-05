#include "WebSocketsServer.h"
class WebSocketProject
{
private:
    WebSocketsServer webSocket;
public:
    WebSocketProject(int port);
    ~WebSocketProject();
    void loop();
};

WebSocketProject::WebSocketProject(int port) : webSocket(port)
{
}

WebSocketProject::~WebSocketProject()
{
}

void WebSocketProject::loop()
{
    this->webSocket.loop();
}
