
import { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// list all tasks
router.get("/tasks/test", async (req: Request, res: Response) => {
  res.json([
    { id: 1, color: '#FF3830', message: 'First task' },
    { id: 2, color: '#FF9500', message: 'Second task' },
    { id: 3, color: '#FFCC00', message: 'Third task' },
    { id: 4, color: '#34C759', message: 'Fourth task' },
    { id: 5, color: '#007AFF', message: 'Fifth task' },
  ]);
});

// list all tasks
router.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

// Create new task
router.post("/tasks", async (req: Request, res: Response) => {
  const { color, message } = req.body;
  const task = await prisma.task.create({
    data: { color, message },
  });
  res.json(task);
});

// Get one task
router.get("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const query = { where: { id }};
  try {
    const task = await prisma.task.findUnique(query);
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: "Task not found" });
  }
});

// Update existing task
router.patch("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { color, message, completed } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id },
      data: { color, message, completed },
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ error: "Task not found" });
  }
});

// Delete task by id
router.delete("/tasks/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const query = { where: { id }};
  try {
    const deletedTask = await prisma.task.delete(query);
    res.json({ message: "Task deleted", deletedTask });
  } catch (error) {
    res.status(404).json({ error: "Task not found" });
  }
});

export default router;
