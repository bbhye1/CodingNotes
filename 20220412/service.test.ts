import { clearTasks, addTask, getTasks } from './service';

beforeEach(() => {
  clearTasks();
});

test('addTask', async () => {
  addTask('first task');
  addTask('second task');

  const tasks = getTasks();

  expect(tasks.length).toBe(2);
  expect(tasks[0].title).toBe('first task');
  expect(tasks[1].title).toBe('second task');
});
