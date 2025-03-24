-- CreateTable
CREATE TABLE "JoystickWebSocketConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataConfigurationId" INTEGER NOT NULL,
    "host" TEXT NOT NULL,
    "protocol" TEXT NOT NULL,
    CONSTRAINT "JoystickWebSocketConfiguration_dataConfigurationId_fkey" FOREIGN KEY ("dataConfigurationId") REFERENCES "DataConfiguration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "JoystickWebSocketConfiguration_dataConfigurationId_key" ON "JoystickWebSocketConfiguration"("dataConfigurationId");
