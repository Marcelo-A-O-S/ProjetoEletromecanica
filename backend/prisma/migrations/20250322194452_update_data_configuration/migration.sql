/*
  Warnings:

  - You are about to drop the column `nameDataConfiguration` on the `DataConfiguration` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DataConfiguration" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "configurationId" INTEGER NOT NULL,
    "projectId" INTEGER,
    CONSTRAINT "DataConfiguration_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "DataConfiguration_configurationId_fkey" FOREIGN KEY ("configurationId") REFERENCES "Configuration" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_DataConfiguration" ("configurationId", "id", "projectId") SELECT "configurationId", "id", "projectId" FROM "DataConfiguration";
DROP TABLE "DataConfiguration";
ALTER TABLE "new_DataConfiguration" RENAME TO "DataConfiguration";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
