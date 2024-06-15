CREATE TABLE expense (
    "id" SERIAL PRIMARY KEY,
    "userId" INT NOT NULL,
	"expenseTypeId" INT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "amount" DECIMAL(10, 2) NOT NULL,
    "description" VARCHAR(255) NOT NULL DEFAULT '',
    "expenseDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidTo" VARCHAR(100) NOT NULL DEFAULT '',
    "metadata" JSONB NOT NULL DEFAULT '{}',
    FOREIGN KEY ("userId") REFERENCES "user"("id"),
    FOREIGN KEY ("expenseTypeId") REFERENCES "expenseType"("id")
);