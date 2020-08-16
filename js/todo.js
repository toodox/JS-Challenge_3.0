const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; //입력받은 투두들을 배열에 삽입하도록 함

//투두리스트 삭제
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    //filter는 함수 하나(function(toDo))를 실행시킴
    return toDo.id !== parseInt(li.id);
    //filter는 array의 모든 아이템을 통해 함수를 실행하고 true들만 모인 배열 실행
  });
  toDos = cleanToDos;
  saveToDos();
}

//투두들을 가져와서 로컬스토리지에 저장하는 함수
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(toDoText) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1; //배열의 길이를 알려주는 기능. (+1함.)
  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = toDoText;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId; //li에 아이디 부여
  toDoList.appendChild(li);
  const toDoObj = {
    text: toDoText,
    id: newId,
  };
  toDos.push(toDoObj); //push를 사용해서 array 안에 element 하나를 넣어줄 수 있음
  saveToDos(); //투두들 집어넣고 호출해야 함.
}

//이벤트 받아오는 함수
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  //엔터 누르면 todo작성 창은 초기화됨
}

//로컬스토리지에서 로드하는 함수
function loadToDos() {
  const loadedtoDos = localStorage.getItem(TODOS_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos(); //뭔가를 로컬스토리지에 가지고 와서 로드
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
