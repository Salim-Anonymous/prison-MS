/*
  Warnings:

  - Added the required column `pid` to the `visitor` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_visitor" (
    "vno" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "inmate_name" TEXT NOT NULL,
    "cid" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "pid" TEXT NOT NULL,
    CONSTRAINT "visitor_pid_fkey" FOREIGN KEY ("pid") REFERENCES "inmate" ("pid") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_visitor" ("cid", "contact", "date", "inmate_name", "name", "vno") SELECT "cid", "contact", "date", "inmate_name", "name", "vno" FROM "visitor";
DROP TABLE "visitor";
ALTER TABLE "new_visitor" RENAME TO "visitor";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
