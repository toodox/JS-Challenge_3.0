//#3.0~#3.1 내용
//시계 만들기
const clockContainer = document.querySelector(".clock-js");
const clockTitle = clockContainer.querySelector(".title-js");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`} : ${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  } : ${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
