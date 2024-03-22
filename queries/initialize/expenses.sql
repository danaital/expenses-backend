CREATE TABLE expenses (
    "id" SERIAL PRIMARY KEY,
    "userId" INT NOT NULL,
	"expenseTypeId" INT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "amount" DECIMAL(10, 2) NOT NULL,
    "description" VARCHAR(255) NOT NULL DEFAULT '',
    "expenseDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidTo" VARCHAR(100) NOT NULL DEFAULT '',
    FOREIGN KEY ("userId") REFERENCES users("id"),
    FOREIGN KEY ("expenseTypeId") REFERENCES "expenseTypes"("id")
);