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

function paintToDo(toDoText) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const btnP = document.createElement("p");
  btnP.innerHTML = "❌";
  const span = document.createElement("span");
  span.innerText = toDoText;
  delBtn.appendChild(btnP);
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
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
  const toDos = localStorage.getItem(TODOS_LS);
  if (toDos !== null) {
  }
}

function init() {
  loadToDos(); //뭔가를 로컬스토리지에 가지고 와서 로드
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
