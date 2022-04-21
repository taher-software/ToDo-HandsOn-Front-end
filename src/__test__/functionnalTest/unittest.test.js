import getCurrentDate from '../../components/header/headerhelper';
import getTodaytask from '../../components/todo/todohelper';

describe('getCurrentDate', () => {
  test('getCurrentDate give right result', () => {
    expect(getCurrentDate()).toStrictEqual(['Thursday', 21, 'April']);
  });
});

describe('getTodaytask', () => {
  test('getTodaytask return today tasks given an abject of tasks for different days.', () => {
    const tasks = {
      data: [
        {
          id: 2,
          description: 'Do my daily workout',
          done: false,
          day: '2022-04-20',
        },
        {
          id: 1,
          description: 'Visite my paraents',
          done: true,
          day: '2022-04-20',
        },
        {
          id: 5,
          description: 'work on my project',
          done: true,
          day: '2022-04-21',
        },
      ],
    };
    expect(getTodaytask(tasks)).toBeInstanceOf(Array);
    expect(getTodaytask(tasks)).toStrictEqual([{
      id: 5,
      description: 'work on my project',
      done: true,
      day: '2022-04-21',
    }]);
  });
});
