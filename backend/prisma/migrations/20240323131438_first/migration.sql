-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "body" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,
    "priority" INTEGER NOT NULL
);
