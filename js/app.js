document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton');

    // Load tasks from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = ''; // Clear current list
        tasks.forEach((task, index) => renderTask(task, index));
    };

    // Save tasks to local storage
    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Render a single task
    const renderTask = (task, index) => {
        const li = document.createElement('li');
        li.className = `list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`;
        li.dataset.index = index;

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="btn btn-sm btn-success mark-completed">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="btn btn-sm btn-danger delete-task">Delete</button>
            </div>
        `;

        // Mark task as completed
        li.querySelector('.mark-completed').addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks[index].completed = !tasks[index].completed;
            saveTasks(tasks);
            loadTasks();
        });

        // Delete task
        li.querySelector('.delete-task').addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.splice(index, 1);
            saveTasks(tasks);
            loadTasks();
        });

        taskList.appendChild(li);
    };

    // Add new task
    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Task cannot be empty!');
            return;
        }

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        saveTasks(tasks);
        taskInput.value = ''; // Clear input
        loadTasks();
    });

    // Load tasks on page load
    loadTasks();
});
