/*
  Warnings:

  - Added the required column `EmergencyPersonContact` to the `Inmates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmergencyPersonName` to the `Inmates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EmergencyPersonRelationship` to the `Inmates` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Inmates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "FirstName" TEXT NOT NULL,
    "MiddleName" TEXT,
    "LastName" TEXT,
    "CIDNo" TEXT NOT NULL,
    "DOB" DATETIME NOT NULL,
    "Sex" TEXT NOT NULL,
    "Village" TEXT NOT NULL,
    "Gewog" TEXT NOT NULL,
    "Dzongkhag" TEXT NOT NULL,
    "MaritalStatus" TEXT NOT NULL,
    "Nationality" TEXT NOT NULL,
    "Height" DECIMAL NOT NULL,
    "Weight" DECIMAL NOT NULL,
    "ColorOfHair" TEXT NOT NULL,
    "ColorOfEyes" TEXT NOT NULL,
    "Complexion" TEXT NOT NULL,
    "CrimesCommitted" TEXT NOT NULL,
    "Sentence" TEXT NOT NULL,
    "TimeServeStarts" DATETIME NOT NULL,
    "TimeServeEnds" DATETIME NOT NULL,
    "PrisonId" INTEGER NOT NULL,
    "Image" TEXT NOT NULL,
    "EmergencyPersonName" TEXT NOT NULL,
    "EmergencyPersonContact" TEXT NOT NULL,
    "EmergencyPersonRelationship" TEXT NOT NULL,
    CONSTRAINT "Inmates_PrisonId_fkey" FOREIGN KEY ("PrisonId") REFERENCES "Prison" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Inmates" ("CIDNo", "ColorOfEyes", "ColorOfHair", "Complexion", "CrimesCommitted", "DOB", "Dzongkhag", "FirstName", "Gewog", "Height", "Image", "LastName", "MaritalStatus", "MiddleName", "Nationality", "PrisonId", "Sentence", "Sex", "TimeServeEnds", "TimeServeStarts", "Village", "Weight", "id") SELECT "CIDNo", "ColorOfEyes", "ColorOfHair", "Complexion", "CrimesCommitted", "DOB", "Dzongkhag", "FirstName", "Gewog", "Height", "Image", "LastName", "MaritalStatus", "MiddleName", "Nationality", "PrisonId", "Sentence", "Sex", "TimeServeEnds", "TimeServeStarts", "Village", "Weight", "id" FROM "Inmates";
DROP TABLE "Inmates";
ALTER TABLE "new_Inmates" RENAME TO "Inmates";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
