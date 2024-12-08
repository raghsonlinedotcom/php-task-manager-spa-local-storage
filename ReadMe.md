# Task Manager SPA

## Features

•	Add tasks
•	Mark tasks as completed
•	Delete tasks
•	Browser-local storage-based persistence
•	Responsive UI with Bootstrap

## Structure

```sh
task-manager/
├── index.php
├── tasks.php
├── js/
│   └── app.js
├── css/
│   └── style.css
└── assets/
    └── bootstrap.min.css
```

## Setup

	1.	Create the directory structure as mentioned above.
	2.	Download and include Bootstrap (assets/bootstrap.min.css).
	3.	Place the above code into their respective files.
	4.	Open index.php in your browser.

## How It Works

	1.	Backup Tasks: Click “Backup Tasks” to save the tasks in tasks.txt on the server.
	2.	Restore Tasks: Click “Restore Tasks” to fetch tasks from tasks.txt and populate them.
	3.	File Sync: Include tasks.txt in the GitHub repository for portability.

## Usage

	1.	Enter a task in the input field and click “Add Task.”
	2.	Mark tasks as complete or delete them using the buttons next to each task.
	3.	Tasks are stored in the browser’s local storage and persist between sessions.

## Benefits
	•	Local storage ensures quick client-side functionality.
	•	Server-side backup allows tasks to be shared or restored across machines.
	•	Minimal additional setup while preserving SPA functionality.

This simple SPA can serve as a quick task tracker while showcasing fundamental web development concepts!

Enjoy task management with better portability and resilience!
