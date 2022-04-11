import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { addTask, getTasks } from './service';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
  const tasks = getTasks();

  res.send({ tasks });
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.send(400).send({});
    return;
  }

  addTask(title);
  res.send(201).send({});
});

export default app;
