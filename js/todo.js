/* const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
    //js파일 간 변수명 같으면 충돌 일어남 (greeting.js)
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function paintToDo(text) {
  const li = document.createElement("li"); //li를 생성함
  const delBtn = document.createElement("button"); //삭제 버튼 생성
  delBtn.innerText = "❌";
  const span = document.createElement("span"); //span 생성
  span.innerText = text; //span 안에 매개변수 삽입
  li.appendChild(delBtn); //delBtn을 li에 집어 넣음
  li.appendChild(span); //span을 li에 집어 넣음
  toDoList.appendChild(li);
}

/* 투두리스트 작성하고 제출하는 이벤트 받아오는 함수 */
/* function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
  //엔터 누르면 todo작성 창은 초기화되면서 제출
}
 */
/*로컬스토리지로부터 정보 value 받아오는 함수*/
/* function loadToDos() {
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}
 */
/* function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
 */

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
  //filter는 함수 하나를 실행시킴
  //filter는 모든 아이템을 통해 함수를 실행하고 true들만 모인 배열 실행
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
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
