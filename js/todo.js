const form = document.querySelector("form");
const todoInput = document.querySelector("#subject");
const addButton = document.querySelector("#btn");
const todos = document.querySelector("#itemList");

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
}


function handleSubject(event){
    event.preventDefault();
    const newToDo = todoInput.value;
    todoInput.value="";
    showTodo(newToDo);
}

function showTodo(newToDo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newToDo;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    todos.appendChild(li);
    button.addEventListener("click",deleteTodo);
}

form.addEventListener("submit",handleSubject);

//새로 고침하면 할 일들이 없어지는 문제 발생


