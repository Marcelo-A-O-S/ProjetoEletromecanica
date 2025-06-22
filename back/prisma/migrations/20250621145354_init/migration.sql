-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigurationProject" (
    "id" SERIAL NOT NULL,
    "projectId" INTEGER NOT NULL,
    "configurationId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "ConfigurationProject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Configuration" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "componentKey" TEXT,

    CONSTRAINT "Configuration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DataConfiguration" (
    "id" SERIAL NOT NULL,
    "configurationId" INTEGER NOT NULL,
    "projectId" INTEGER,
    "configurationProjectId" INTEGER,

    CONSTRAINT "DataConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MQTTConfiguration" (
    "id" SERIAL NOT NULL,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "MQTTConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WebSocketConfiguration" (
    "id" SERIAL NOT NULL,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "path" TEXT NOT NULL,

    CONSTRAINT "WebSocketConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JoystickConfiguration" (
    "id" SERIAL NOT NULL,
    "dataConfigurationId" INTEGER NOT NULL,
    "sensitivity" DOUBLE PRECISION NOT NULL,
    "deadZone" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "JoystickConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JoystickWebsocketConfiguration" (
    "id" SERIAL NOT NULL,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "JoystickWebsocketConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SwitchWebsocketConfiguration" (
    "id" SERIAL NOT NULL,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "SwitchWebsocketConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LeverWebsocketConfiguration" (
    "id" SERIAL NOT NULL,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,

    CONSTRAINT "LeverWebsocketConfiguration_pkey" PRIMARY KEY ("id")
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

-- AddForeignKey
ALTER TABLE "ConfigurationProject" ADD CONSTRAINT "ConfigurationProject_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "Configuration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ConfigurationProject" ADD CONSTRAINT "ConfigurationProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataConfiguration" ADD CONSTRAINT "DataConfiguration_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "Configuration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataConfiguration" ADD CONSTRAINT "DataConfiguration_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DataConfiguration" ADD CONSTRAINT "DataConfiguration_configurationProjectId_fkey" FOREIGN KEY ("configurationProjectId") REFERENCES "ConfigurationProject"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MQTTConfiguration" ADD CONSTRAINT "MQTTConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WebSocketConfiguration" ADD CONSTRAINT "WebSocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoystickConfiguration" ADD CONSTRAINT "JoystickConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JoystickWebsocketConfiguration" ADD CONSTRAINT "JoystickWebsocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SwitchWebsocketConfiguration" ADD CONSTRAINT "SwitchWebsocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LeverWebsocketConfiguration" ADD CONSTRAINT "LeverWebsocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
