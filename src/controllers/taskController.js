import taskService from "../services/taskService.js";
import asyncHandler from "../utils/asyncHandler.js";


const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.status(200).json(tasks);
});

const createTask = asyncHandler(async (req, res) => {
  const createdTask = await taskService.createTask(req.body);
  res
    .status(201)
    .json({ data: createdTask, message: "Task created successfully" });
});

const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const updatedTask = await taskService.updateTask(parseInt(id), description);
  res
    .status(200)
    .json({ data: updatedTask, message: "Task updated successfully" });
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedTask = await taskService.deleteTask(parseInt(id));
  res
    .status(200)
    .json({ data: deletedTask, message: "Task deleted successfully" });
});

export { getAllTasks, createTask, updateTask, deleteTask };
