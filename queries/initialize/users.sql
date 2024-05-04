CREATE TABLE user (
    "id" SERIAL PRIMARY KEY,
    "userName" VARCHAR(50) NOT NULL UNIQUE,
    "email" VARCHAR(100) NOT NULL UNIQUE,
    "firstName" VARCHAR(50) NOT NULL,
    "lastName" VARCHAR(50) NOT NULL,
    "middleName" VARCHAR(50),
    "password" VARCHAR(255) NOT NULL,
    "roleId" INT NOT NULL,
    "registrationDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLoginDate" TIMESTAMP,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB NOT NULL DEFAULT '{}',
    FOREIGN KEY ("roleId") REFERENCES "role"("id")
);