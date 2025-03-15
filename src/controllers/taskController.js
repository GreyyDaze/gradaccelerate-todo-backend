import taskService from "../services/taskService.js";
const getAllTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const createdTask = await taskService.createTask(req.body);
    res
      .status(201)
      .json({ data: createdTask, message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTask = await taskService.updateTask(parseInt(id), description);
    res
      .status(200)
      .json({ data: updatedTask, message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await taskService.deleteTask(parseInt(id));
    res
      .status(200)
      .json({ data: deletedTask, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllTasks, createTask, updateTask, deleteTask };
