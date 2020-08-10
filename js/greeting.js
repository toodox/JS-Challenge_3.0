const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
/* 
  querySelector : 찾은 element의 첫번째 것만 가져옴 
  querySelectorAll : 찾은 element의 모든 것을 가져옴 / 배열을 사용해야 함.
    자세한건 구글링...
*/

/* 
  Local Storage : 작은 정보들을 자바스크립트에 저장하는 것
  F12 - Application - Local Storage에서 확인 가능
*/

const USER_LocalStorage = "currentUser";
const SHOWING_ClassName = "showing";

function saveName(text) {
  localStorage.setItem(USER_LocalStorage, text);
}

function handleSubmit(event) {
  event.preventDefault();
  //input에 정보를 입력하고 엔터를 누르면 새로고침되는 현상을 없앰.
  //event금지시키는 것.
  const currentValue = input.value; //input에 입력된 정보를 자바스크립트의 새 변수로 지정
  paintGreeting(currentValue); //아직은 로컬스토리지에 저장 되지 않음
  saveName(currentValue); //로컬스토리지에 저장
}

function askForName() {
  form.classList.add(SHOWING_ClassName); //form 보이게 해서 유저 정보 습득
  form.addEventListener("submit", handleSubmit); //input에 정보를 입력하고 제출(엔터)시, handleSubmit함수 호출.
}

//유저 이름에 "Hello" 붙이는 함수
function paintGreeting(text) {
  form.classList.remove(SHOWING_ClassName); //form 안보이게 하기
  greeting.classList.add(SHOWING_ClassName); //greetubg 보이게 하기
  greeting.innerText = `Hello ${text}`; //입력받은 username에 hello 추가
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LocalStorage); //user 정보를 로컬스토리지에서 가져옴
  if (currentUser === null) {
    //localStorage 에 유저 정보가 없는 경우
    askForName();
  } else {
    //localStorage 에 유저 정보가 있는 경우
    paintGreeting(currentUser); //유저 이름을 매개변수로 하는 paintGreeting 함수 호출
  }
}

function init() {
  loadName();
}
init();
