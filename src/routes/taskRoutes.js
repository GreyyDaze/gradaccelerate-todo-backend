import express from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/taskController.js";
import validateTask from "../middlewares/validateTask.js";

const router = express.Router();

router.get("/", getAllTasks);
router.post("/tasks", validateTask, createTask); 
router.put("/tasks/:id", validateTask, updateTask);
router.delete("/:id", deleteTask);

export default router;
