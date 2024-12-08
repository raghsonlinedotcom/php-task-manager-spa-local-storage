<?php
$filename = 'tasks.json';

// Handle Save Request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && $_GET['action'] === 'save') {
    $tasks = file_get_contents('php://input');
    $fullPath = __DIR__ . DIRECTORY_SEPARATOR . $filename;

    // Attempt to save tasks to the file
    $result = file_put_contents($fullPath, $tasks);
    if ($result !== false) {
        // Respond with success and the full file path
        echo json_encode(['status' => 'success', 'filePath' => $fullPath, 'bytesWritten' => $result]);
    } else {
        // Respond with error if writing to file failed
        echo json_encode(['status' => 'error', 'message' => 'Failed to save tasks to file.', 'filePath' => $fullPath]);
    }
    exit;
}

// Handle Load Request
if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['action'] === 'load') {
    $fullPath = __DIR__ . DIRECTORY_SEPARATOR . $filename;

    // Check if file exists, then load tasks
    if (file_exists($fullPath)) {
        $tasks = file_get_contents($fullPath);
        echo $tasks;
    } else {
        echo json_encode([]);
    }
    exit;
}
?>
