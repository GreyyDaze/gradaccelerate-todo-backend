import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllTasks = async () => {
  return await prisma.task.findMany();
};

const createTask = async (task) => {
  return await prisma.task.create({
    data: task,
  });
};

const updateTask = async (id, description) => {
  return await prisma.task.update({
    where: {
      id: id,
    },
    data: {
      description: description,
    },
  });
};

const deleteTask = async (id) => {
  return await prisma.task.delete({
    where: {
      id: id,
    },
  });
};

const taskService = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};

export default taskService;
