-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "street_address" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "profile_pic" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Task" (
    "task_id" INTEGER NOT NULL,
    "created_user_id" INTEGER NOT NULL,
    "assigned_user_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("task_id")
);

-- CreateTable
CREATE TABLE "Solid_Points" (
    "solid_points_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 15,

    CONSTRAINT "Solid_Points_pkey" PRIMARY KEY ("solid_points_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE INDEX "User_id_zip_code_idx" ON "User"("id", "zip_code");

-- CreateIndex
CREATE UNIQUE INDEX "Task_task_id_key" ON "Task"("task_id");

-- CreateIndex
CREATE INDEX "Task_created_user_id_idx" ON "Task"("created_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Solid_Points_solid_points_id_key" ON "Solid_Points"("solid_points_id");

-- CreateIndex
CREATE INDEX "Solid_Points_user_id_idx" ON "Solid_Points"("user_id");
