-- CreateTable
CREATE TABLE "RegisterLink" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "urlRegister" TEXT NOT NULL,

    CONSTRAINT "RegisterLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RegisterLink_token_key" ON "RegisterLink"("token");
