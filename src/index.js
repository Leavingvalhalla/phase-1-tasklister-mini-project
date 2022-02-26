document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('create-task-form')
    .addEventListener('submit', (e) => {
      const taskDescription = e.target.new_task_description.value;

      const newTask = document.createElement('p');
      newTask.textContent = `${taskDescription} `;

      const deleteKey = document.createElement('button');
      deleteKey.textContent = 'x';
      newTask.appendChild(deleteKey);

      document.getElementById('tasks').appendChild(newTask);
      e.preventDefault();

      deleteKey.addEventListener('click', (e) => {
        e.target.parentNode.remove();
      });
    });
});
