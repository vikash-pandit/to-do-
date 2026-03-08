// Dom Selections


const inputTask = document.getElementById("input-task");

const addBtn = document.getElementById("add-btn");

const todoList = document.getElementById("todo-list");


let todos = JSON.parse(localStorage.getItem("todos")) || [];
// addTodo()
// renderTodos()
// deleteTodo()
// editTodo()
// saveToLocalStorage()
// loadFromLocalStorage()

function saveToLocalStorage() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function loadFromLocalStorage() {
    const storeTodos = localStorage.getItem("todos");


    if(storeTodos) {
        todos = JSON.parse(storeTodos);
    }
}

function addTodo() {
    const taskText = inputTask.value.trim();
    if(!taskText) return;
    inputTask.value = "";
    todos.push(taskText);

    saveToLocalStorage(); //save data
    renderTodos();  //update data
 }


function renderTodos() {
    todoList.innerHTML = "";

    todos.forEach(function(todo,index) {
        const li = document.createElement("li");
        li.textContent = todo;

        // Edit operation :

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function(){
       const newValue = prompt("Edit task", todo);
       const cleanedValue = newValue.trim();

       if (!newValue) return;
       todos[index] = newValue;
            saveToLocalStorage();
            renderTodos();
        })


    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function(){
        todos.splice(index,1);

        saveToLocalStorage();
        renderTodos();
    })

    li.appendChild(editBtn)
     li.appendChild(deleteBtn)
    todoList.appendChild(li);

    });
}

addBtn.addEventListener("click", addTodo);

loadFromLocalStorage();
renderTodos();