CREATE TABLE "expenseTypes" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL DEFAULT ''
);