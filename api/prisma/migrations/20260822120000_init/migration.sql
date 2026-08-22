-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "roleEn" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "taglineEn" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "bioEn" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telegram" TEXT NOT NULL,
    "github" TEXT,
    "photoUrl" TEXT,
    "education" TEXT NOT NULL,
    "educationEn" TEXT NOT NULL,
    "yearsExperience" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "categoryEn" TEXT NOT NULL,
    "level" INTEGER NOT NULL,
    "sort" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "titleEn" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "summaryEn" TEXT NOT NULL,
    "url" TEXT,
    "highlights" TEXT[],
    "highlightsEn" TEXT[],
    "stack" TEXT[],
    "sort" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" SERIAL NOT NULL,
    "company" TEXT NOT NULL,
    "companyEn" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "roleEn" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "periodEn" TEXT NOT NULL,
    "items" TEXT[],
    "itemsEn" TEXT[],
    "sort" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);
