// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listener
function loadEventListeners() {
// Add Task event
form.addEventListener('submit', addTask );
// Remove task event
taskList.addEventListener('click', removeTask);
// Clear task event
clearBtn.addEventListener('click', clearTasks);
}

// Add Task
function addTask(e) {
  if(taskInput.value === '') {
    alert('Add a task');
  }

  // Create Li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  //Add icon HTML
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to li
  li.appendChild(link);

  // Append li to ul
 taskList.appendChild(li);

 // clear input
taskInput.value = '';

  e.preventDefault();
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
   if(confirm('Are You Sure?')) {
     e.target.parentElement.parentElement.remove();
   }
  
  
  }
}

// Clear Tasks
function clearTask(){
  // taskList.innerHTML = '';

  // Faster
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }



  // https://jsperf.com/innerhtml-vs-removechild
}