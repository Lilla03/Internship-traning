const enterTask  = document.querySelector('.enter-task')
const tasks_list = document.getElementById('tasks_list')

function addTask() {
if(enterTask.value === '' ) {
    alert('You must write something')
}else {
    let task = {
        content: enterTask.value,
        completed: false 
    };
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
enterTask.value = '';
display()
}


function display() {
    tasks_list.innerHTML = '';
    let tasks = JSON.parse(localStorage.getItem('tasks'))

    tasks.forEach((task) => {
        let li = document.createElement('li');
        li.textContent = task.content;
        if (task.completed) {
            li.classList.add('checked');
        }

        let span = document.createElement('span');
        span.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        li.appendChild(span);

        tasks_list.appendChild(li);
    })
}

tasks_list.addEventListener('click', function(e) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
if(e.target.tagName === 'LI') {
    let taskIndex = Array.from(tasks_list.children).indexOf(e.target);
        tasks[taskIndex].completed = !tasks[taskIndex].completed;  // Đổi trạng thái "completed"
        localStorage.setItem('tasks', JSON.stringify(tasks));

        display();
}else if( e.target.tagName === 'SPAN'){
    let taskIndex = Array.from(tasks_list.children).indexOf(e.target.parentElement);
    tasks.splice(taskIndex, 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    display();
}
console.log(e.target.classList == 'I')
}, false)
display()