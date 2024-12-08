<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Task Manager</title>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="assets/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container mt-5">
        <h1 class="text-center">Task Manager</h1>
        <div class="row justify-content-center mt-4">
            <div class="col-md-8">
                <div class="input-group">
                    <input type="text" id="taskInput" class="form-control" placeholder="Enter your task here...">
                    <button class="btn btn-primary" id="addTaskButton">Add Task</button>
                </div>
            </div>
        </div>
        <div class="row justify-content-center mt-4">
            <div class="col-md-8 d-flex justify-content-between">
                <button class="btn btn-success" id="saveTasksButton">Backup Tasks</button>
                <button class="btn btn-secondary" id="loadTasksButton">Restore Tasks</button>
            </div>
        </div>        
        <div class="row justify-content-center mt-4">
            <div class="col-md-8">
                <ul class="list-group" id="taskList"></ul>
            </div>
        </div>
    </div>
    <!-- Bootstrap JS (Optional) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/app.js"></script>
</body>
</html>
