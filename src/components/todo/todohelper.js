const getTodaytask = (tasks) => {
  const { data } = tasks;
  let today = new Date();
  today = `${today.getFullYear()}-${today.getMonth() + 1 < 10 ? `0${today.getMonth() + 1}` : today.getMonth() + 1}-${today.getDate()}`;
  const todayTask = data.filter((task) => task.day === today);
  return todayTask;
};

export default getTodaytask;
