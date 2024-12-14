// script.js

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const todoList = document.getElementById('todoList');

        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function() {
            todoList.removeChild(li);
        };

        // Add event to mark task as completed
        li.onclick = function() {
            li.classList.toggle('completed');
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        
        // Clear input field
        taskInput.value = '';
    }
}
