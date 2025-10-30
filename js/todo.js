const form = document.querySelector("form");//폼
const todoInput = document.querySelector("#subject");//입력하는 부분
const addButton = document.querySelector("#btn");//'추가' 버튼
const todos = document.querySelector("#itemList");//to-do들이 추가될 부분

let toDoList = [] //handleSubject 함수에서 이 배열에 객체를 넣어 준다.
const TODOS_KEY = "todos";

form.addEventListener("submit",handleSubject);

function saveTodos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDoList)); //로컬 스토리지는 문자열으로만 저장할 수 있다. 따라서 배열인 toDoList는 JSON.stringify를 사용해야 한다.
}


function deleteTodo(event){ //to-do 삭제 함수
    const li = event.target.parentElement;//클릭된 li
    toDoList = toDoList.filter((todo)=>todo.id !== parseInt(li.id));
    //filter()는 배열을 돌면서 조건에 맞는 요소만 남긴 새로운 배열을 만드는 함수
    //((todo) => todo !== parseInt(li.id)) 정수화된 li.id와 같지 않은 todo들만 남겨 새로운 배열을 만들자.
    li.remove();
    saveTodos();
}


function handleSubject(event){//폼 다루는 함수
    event.preventDefault();//기본 동작 막기
    const newToDo = todoInput.value; //입력된 값이 newToDo 변수에 저장
    todoInput.value="";//입력 뒤에는 다음 값 입력 위해서 빈 칸으로 만들기
    const newTodoObj = { //객체를 만들어야 한다. why?-->삭제시 id를 구분해서 노드를 구별할 수 있어야 한다.

        id:Date.now(), //1970s년 1월 1일 0시 0분 0초부터 현재까지 경과된 밀리초
        text:newToDo,
    }
    toDoList.push(newTodoObj); //배열에 객체를 넣어주기, toDoList=[{id:....,text:....},{id:....,text:....}...] 안쪽에 이런식으로 저장될 예정
    showTodo(newTodoObj);//객체를 showTodo 함수에 넘겨주기
    saveTodos();//로컬 스토리지에 toDoList를 저장하는 함수를 호출 -->새로운 to-do가 입력되면 로컬 스토리지를 업데이트 해준다.
}

function showTodo(newToDo){//to-do 보여주는 함수
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    todos.appendChild(li);
    button.addEventListener("click",deleteTodo);
}

//페이지 처음 로드될 때 시작되는 코드
const savedTodos = localStorage.getItem(TODOS_KEY);
if (savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    toDoList = parsedTodos;
    parsedTodos.forEach(showTodo);
}//페이지 로드했을 때 로컬 스토리지에 저장된게 있으면 화면에 표시해준다.


