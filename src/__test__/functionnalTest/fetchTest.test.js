import { updateTask, deleteTask } from '../../components/item/itemhelper';
import { fetchTasks } from '../../Redux/tasks/thunk/thunk';

describe('update task with given data', () => {
  test('update Task given correct data', async () => {
    const id = 5;
    const task = {
      done: true,
    };
    const resp = await updateTask(id, task);
    const result = await resp.json();
    const { status } = result;
    expect(status).toBe('SUCCESS');
  });
});

describe('fetch tasks from the back-end', () => {
  test('fetch tasks successfully', async () => {
    const result = await fetchTasks();
    const res = await result.json();
    expect(res).toBeInstanceOf(Object);
  });
});

describe('delete task given his id', () => {
  test('delete task successfully', async () => {
    const result = await deleteTask(6);
    const res = await result.json();
    const { status } = res;
    expect(status).toBe('SUCCESS');
  });
});
