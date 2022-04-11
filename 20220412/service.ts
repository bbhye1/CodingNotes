const Storage = require('node-storage');

const generateId = () => process.hrtime.bigint().toString();

const dbName = process.env.NODE_ENV === 'test'
  ? '/tmp/data/tasks-1.json'
  : './data/tasks.json';

const store = new Storage(dbName);

const getTasks = () => store.get('tasks') || [];

const addTask = (title: string) => {
  const tasks = getTasks();
  const id = generateId();

  store.put('tasks', [
    ...tasks,
    { id, title },
  ]);
};

const clearTasks = async () => {
  store.put('tasks', []);
};

export {
  clearTasks,
  getTasks,
  addTask,
};
