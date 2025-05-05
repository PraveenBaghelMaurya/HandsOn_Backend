// DOM Elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const filterAll = document.getElementById('filter-all');
const filterActive = document.getElementById('filter-active');
const filterCompleted = document.getElementById('filter-completed');
const clearCompleted = document.getElementById('clear-completed');

// State
let currentTodos = [];
let currentFilter = 'all';

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    refreshTodos();
});

// Event Listeners
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    
    if (!taskText) {
        alert('Please enter a task');
        return;
    }

    try {
        console.log('Adding task:', taskText);
        const response = await axios.post('/user/todos', { 
            task: taskText 
        });
        console.log('Add task response:', response);
        
        taskInput.value = '';
        await refreshTodos();
    } catch (error) {
        console.error('Error adding task:', error);
        alert('Failed to add task. Please try again.');
    }
});

taskList.addEventListener('click', async (e) => {
    const target = e.target;
    const taskItem = target.closest('li');
    
    if (!taskItem) return;

    const taskId = taskItem.dataset.id;
    console.log('Clicked task ID:', taskId);

    if (target.classList.contains('complete-btn')) {
        try {
            console.log('Completing task:', taskId);
            await axios.put('/user/todos', { id: taskId });
            await refreshTodos();
        } catch (error) {
            console.error('Error completing task:', error);
        }
    } else if (target.classList.contains('delete-btn')) {
        try {
            console.log('Deleting task:', taskId);
            await axios.delete('/user/todos', { 
                data: { id: taskId } 
            });
            await refreshTodos();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }
});

// Filter buttons
filterAll.addEventListener('click', () => {
    currentFilter = 'all';
    updateFilterButtons();
    renderTasks();
});

filterActive.addEventListener('click', () => {
    currentFilter = 'active';
    updateFilterButtons();
    renderTasks();
});

filterCompleted.addEventListener('click', () => {
    currentFilter = 'completed';
    updateFilterButtons();
    renderTasks();
});

clearCompleted.addEventListener('click', async () => {
    try {
        await axios.put('/user/clear-completed');
        await refreshTodos();
    } catch (error) {
        console.error('Error clearing completed tasks:', error);
    }
});

// Helper Functions
async function refreshTodos() {
    try {
        console.log('Refreshing todos...');
        const response = await axios.get('/user/todos');
        console.log('Todos response:', response.data);
        
        if (response.data && response.data.tasks) {
            currentTodos = response.data.tasks;
            renderTasks();
        } else {
            console.error('Unexpected response format:', response.data);
        }
    } catch (error) {
        console.error('Error fetching todos:', error);
    }
}

function renderTasks() {
    console.log('Rendering tasks with filter:', currentFilter);
    
    let filteredTasks = [];
    switch (currentFilter) {
        case 'active':
            filteredTasks = currentTodos.filter(task => !task.status);
            break;
        case 'completed':
            filteredTasks = currentTodos.filter(task => task.status);
            break;
        default:
            filteredTasks = currentTodos;
    }

    taskList.innerHTML = '';

    if (filteredTasks.length === 0) {
        taskList.innerHTML = '<li class="no-tasks">No tasks found</li>';
        return;
    }

    filteredTasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.className = `task-item ${task.status ? 'completed' : ''}`;
        taskElement.dataset.id = task._id;
        
        taskElement.innerHTML = `
            <span class="task-text">${task.task}</span>
            <div class="task-actions">
                <button class="complete-btn">
                    ${task.status ? 'Undo' : 'Complete'}
                </button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        taskList.appendChild(taskElement);
    });
}

function updateFilterButtons() {
    filterAll.classList.remove('active');
    filterActive.classList.remove('active');
    filterCompleted.classList.remove('active');

    if (currentFilter === 'all') filterAll.classList.add('active');
    if (currentFilter === 'active') filterActive.classList.add('active');
    if (currentFilter === 'completed') filterCompleted.classList.add('active');
}