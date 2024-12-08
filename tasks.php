<?php
$filename = 'tasks.txt';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'save') {
    // Save tasks to tasks.txt
    $tasks = file_get_contents('php://input');
    file_put_contents($filename, $tasks);
    echo json_encode(['status' => 'success']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['action'] === 'load') {
    // Load tasks from tasks.txt
    if (file_exists($filename)) {
        $tasks = file_get_contents($filename);
        echo $tasks;
    } else {
        echo json_encode([]);
    }
    exit;
}
?>
