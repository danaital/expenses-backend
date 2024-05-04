CREATE TABLE role (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "userName" VARCHAR(50) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "middleName" VARCHAR(50),
    "password" VARCHAR(255) NOT NULL,
    "registrationDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginDate" TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "roleId" INT NOT NULL,
    FOREIGN KEY ("roleId") REFERENCES "role"("id")
);

CREATE TABLE "expenseType" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL DEFAULT ''
);

CREATE TABLE "expense" (
    "id" SERIAL PRIMARY KEY,
    "userId" INT NOT NULL,
	"expenseTypeId" INT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "amount" DECIMAL(10, 2) NOT NULL,
    "description" VARCHAR(255) NOT NULL DEFAULT '',
    "expenseDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidTo" VARCHAR(100) NOT NULL DEFAULT '',
    "metadata" JSONB NOT NULL DEFAULT '{}',
    FOREIGN KEY ("userId") REFERENCES "user"("id"),
    FOREIGN KEY ("expenseTypeId") REFERENCES "expenseType"("id")
);