import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";

const prisma = new PrismaClient();
const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());

app.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/task/create", async (req: Request, res: Response) => {
  const body = req.body.body;
  const priority = +req.body.priority;
  if (!body || !priority) {
    return res.status(400).send({
      error: "Request payload is not valid. Body and priority are required.",
    });
  }
  const newTask = await prisma.task.create({
    data: {
      body: body,
      priority: priority,
      completed: false,
    },
  });

  return res.send(newTask);
});

app.patch("/task/edit/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const completed = req.body.completed;
  if (completed === undefined) {
    return res
      .status(400)
      .send({ error: "Request payload is not valid. Completed is required." });
  }

  const result = await prisma.task.update({
    where: {
      id: +id,
    },
    data: {
      completed,
    },
  });

  return res.send(result);
});

app.listen(port, () => {
  console.log(`API Service is running on http://localhost:${port}`);
});
