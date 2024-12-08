document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const addTaskButton = document.getElementById('addTaskButton');
    const saveTasksButton = document.getElementById('saveTasksButton');
    const loadTasksButton = document.getElementById('loadTasksButton');

    // Fetch tasks from the server on restore
    const fetchTasksFromServer = async () => {
        const response = await fetch('tasks.php?action=load');
        const data = await response.json();
        localStorage.setItem('tasks', JSON.stringify(data));
        loadTasks();
    };

    // Save tasks to the server
    const saveTasksToServer = async () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const response = await fetch('tasks.php?action=save', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tasks)
        });

        const result = await response.json();
        if (result.status === 'success') {
            alert(`Tasks backed up to server!\nFile Path: ${result.filePath}, \nbytesWritten: ${result.bytesWritten}`);
        } else {
            alert('Failed to back up tasks.');
        }
    };

    // Save tasks to local storage
    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Load tasks from local storage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = '';
        tasks.forEach((task, index) => renderTask(task, index));
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

        li.querySelector('.mark-completed').addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks[index].completed = !tasks[index].completed;
            saveTasks(tasks);
            loadTasks();
        });

        li.querySelector('.delete-task').addEventListener('click', () => {
            const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
            tasks.splice(index, 1);
            saveTasks(tasks);
            loadTasks();
        });

        taskList.appendChild(li);
    };

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Task cannot be empty!');
            return;
        }

        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ text: taskText, completed: false });
        saveTasks(tasks);
        taskInput.value = '';
        loadTasks();
    });

    saveTasksButton.addEventListener('click', saveTasksToServer);
    loadTasksButton.addEventListener('click', fetchTasksFromServer);

    loadTasks();
});
