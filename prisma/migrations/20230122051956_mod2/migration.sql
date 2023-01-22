/*
  Warnings:

  - You are about to drop the `SuperIntendent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SuperIntendent";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "inmate" (
    "name" TEXT NOT NULL,
    "pid" TEXT NOT NULL PRIMARY KEY,
    "cid" TEXT NOT NULL,
    "dob" DATETIME NOT NULL,
    "gender" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "gewog" TEXT NOT NULL,
    "dzongkhag" TEXT NOT NULL,
    "martial_status" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "complexion" TEXT NOT NULL,
    "hair_color" TEXT NOT NULL,
    "eye_color" TEXT NOT NULL,
    "crimes" TEXT NOT NULL,
    "sentence" INTEGER NOT NULL,
    "start_date" DATETIME NOT NULL,
    "end_date" DATETIME NOT NULL,
    "prisonId" TEXT NOT NULL,
    "cell" TEXT NOT NULL,
    CONSTRAINT "inmate_prisonId_fkey" FOREIGN KEY ("prisonId") REFERENCES "Prison" ("prisonId") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "visitor" (
    "vno" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "inmate_name" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "contact" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Prison" (
    "prisonId" TEXT NOT NULL PRIMARY KEY,
    "location" TEXT NOT NULL,
    "name" TEXT NOT NULL
);
