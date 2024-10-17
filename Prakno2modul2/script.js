document.addEventListener('DOMContentLoaded', function() {
    function addTask(taskInputId, taskListId, addTaskBtnId) {
        const taskInput = document.getElementById(taskInputId);
        const taskList = document.getElementById(taskListId);
        const addTaskBtn = document.getElementById(addTaskBtnId);

        addTaskBtn.addEventListener('click', function() {
            const taskValue = taskInput.value.trim();
            if (taskValue) {
                const li = document.createElement('li');

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';

                const span = document.createElement('span');
                span.textContent = taskValue;

                // Edit button
                const editBtn = document.createElement('button');
                editBtn.textContent = 'Edit';
                editBtn.classList.add('edit-btn');
                editBtn.addEventListener('click', function() {
                    const newTask = prompt('Edit your task:', span.textContent);
                    if (newTask !== null && newTask.trim() !== '') {
                        span.textContent = newTask.trim();
                    }
                });

                // Delete button
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.classList.add('delete-btn');
                deleteBtn.addEventListener('click', function() {
                    taskList.removeChild(li);
                });

                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
                taskList.appendChild(li);
                
                taskInput.value = ''; // Clear input
            }
        });
    }

    addTask('morning-task-input', 'morning-task-list', 'add-morning-task-btn');
    addTask('afternoon-task-input', 'afternoon-task-list', 'add-afternoon-task-btn');
    addTask('evening-task-input', 'evening-task-list', 'add-evening-task-btn');
});
