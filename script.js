// Dom Selections


const inputTask = document.getElementById("input-task");

const addBtn = document.getElementById("add-btn");

const todoList = document.getElementById("todo-list");


let todos = [];
// addTodo()
// renderTodos()
// deleteTodo()
// editTodo()
// saveToLocalStorage()
// loadFromLocalStorage()


function addTodo() {
    const taskText = inputTask.value.trim();
    if(!taskText) return;
    inputTask.value = "";
    todos.push(taskText);
    renderTodos();
}


function renderTodos() {
    todoList.textContent = "";

    todos.forEach(function(todo) {
        const li = document.createElement("li");
        li.textContent = todo;
        todoList.appendChild(li);
    });
}
addBtn.addEventListener("click", addTodo);

function deleteTodo() {
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete";

    deleteTodo.addEventListener("click", function(){
    todos.splice(index,1);
    renderTodos();
})
    li.appendChild(deleteBtn)
    todoList.appendChild(li);

}