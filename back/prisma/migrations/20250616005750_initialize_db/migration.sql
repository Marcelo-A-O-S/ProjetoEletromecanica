-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "ConfigurationProject" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "projectId" INTEGER NOT NULL,
    "configurationId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    CONSTRAINT "ConfigurationProject_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "Configuration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ConfigurationProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Configuration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "componentKey" TEXT
);

-- CreateTable
CREATE TABLE "DataConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "configurationId" INTEGER NOT NULL,
    "projectId" INTEGER,
    "configurationProjectId" INTEGER,
    CONSTRAINT "DataConfiguration_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "Configuration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "DataConfiguration_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "DataConfiguration_configurationProjectId_fkey" FOREIGN KEY ("configurationProjectId") REFERENCES "ConfigurationProject" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MQTTConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    CONSTRAINT "MQTTConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WebSocketConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "path" TEXT NOT NULL,
    CONSTRAINT "WebSocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JoystickConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataConfigurationId" INTEGER NOT NULL,
    "sensitivity" REAL NOT NULL,
    "deadZone" REAL NOT NULL,
    CONSTRAINT "JoystickConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JoystickWebsocketConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    CONSTRAINT "JoystickWebsocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SwitchWebsocketConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    CONSTRAINT "SwitchWebsocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LeverWebsocketConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    CONSTRAINT "LeverWebsocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Configuration_componentKey_key" ON "Configuration"("componentKey");

-- CreateIndex
CREATE UNIQUE INDEX "MQTTConfiguration_dataConfigurationId_key" ON "MQTTConfiguration"("dataConfigurationId");

-- CreateIndex
CREATE UNIQUE INDEX "WebSocketConfiguration_dataConfigurationId_key" ON "WebSocketConfiguration"("dataConfigurationId");

-- CreateIndex
CREATE UNIQUE INDEX "JoystickConfiguration_dataConfigurationId_key" ON "JoystickConfiguration"("dataConfigurationId");

-- CreateIndex
CREATE UNIQUE INDEX "JoystickWebsocketConfiguration_dataConfigurationId_key" ON "JoystickWebsocketConfiguration"("dataConfigurationId");

-- CreateIndex
CREATE UNIQUE INDEX "SwitchWebsocketConfiguration_dataConfigurationId_key" ON "SwitchWebsocketConfiguration"("dataConfigurationId");

-- CreateIndex
CREATE UNIQUE INDEX "LeverWebsocketConfiguration_dataConfigurationId_key" ON "LeverWebsocketConfiguration"("dataConfigurationId");
