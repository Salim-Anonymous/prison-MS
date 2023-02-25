-- CreateTable
CREATE TABLE "Inmates" (
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
    CONSTRAINT "Inmates_PrisonId_fkey" FOREIGN KEY ("PrisonId") REFERENCES "Prison" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Prison" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "PrisonLocation" TEXT NOT NULL
);
