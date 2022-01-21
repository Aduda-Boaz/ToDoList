export default function Storage(taskList) {
  localStorage.setItem('tasks', JSON.stringify(taskList));
}