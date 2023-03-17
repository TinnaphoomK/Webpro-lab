// ข้อ 2.1

function display(msg) {
  let div = document.getElementById("ex01-div");
  div.innerHTML = msg;
}

function showConfirm() {
  let confirm = window.confirm("do you want to go next?");
  if (confirm) {
    function show(callback) {
      callback(display);
    }

    function yep(callback) {
      callback("ยืนยันจ้า");
    }
    show(yep);
  } else {
    function show(callback) {
      callback(display);
    }
    function no(callback) {
      callback("ไม่ดีกว่า");
    }
    show(no);
  }
}
// if(confirm){
//     callback("ยืนยันจ้า", display);
// }else{
//     callback("ไม่ดีกว่า", display);
// }
// ข้อ 2.2
function start() {
  // hint: ส่ง callback function เข้าไปเป็น argument ของ setTimeout()
  let start = document.getElementById("start");
  let process = document.getElementById("process");
  let end = document.getElementById("end");

  start.innerHTML = "";
  process.innerHTML = "";
  end.innerHTML = "";

  start.innerHTML = "Program started";
  setTimeout(() => {
    process.innerHTML = "Hello World";
  }, 2000);
  setTimeout(() => {
    end.innerHTML = "Program ended";
  }, 5000);
}



// ข้อ 2.3
function stopTime() {
  let setMinuteElement = document.getElementById("setMinute");
  let setSecondElement = document.getElementById("setSecond");
  let timeElement = document.getElementById("Time");
  let second = timeElement.value;
  setMinuteElement.innerHTML = Math.floor(second / 60) < 10 ? "0" + Math.floor(second / 60) : Math.floor(second / 60);
  setSecondElement.innerHTML = second % 60 < 10 ? "0" + second % 60 : second % 60;

  let timer = setInterval(() => {
    second--;
    setMinuteElement.innerHTML = Math.floor(second / 60) < 10 ? "0" + Math.floor(second / 60) : Math.floor(second / 60);
    setSecondElement.innerHTML = second % 60 < 10 ? "0" + second % 60 : second % 60;
  }, 100);

  setTimeout(() => {
    clearInterval(timer);
  }, timeElement.value * 100);
}
