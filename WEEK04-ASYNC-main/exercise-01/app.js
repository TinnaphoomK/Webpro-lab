function app1() {
  // console.log("-------start-------");

  function first() {
    setTimeout(() => {
      console.log(1);
    }, 1000);
  }

  const second = setTimeout(() => {
    console.log(2);
  }, 1500);

  var third = setTimeout(() => {
    console.log(3);
  }, 1000);

  setTimeout(() => {
    console.log(4);
  }, 0);

  console.log(5);

  setTimeout(() => {
    console.log(5 + 1);
  }, 2000);

  function showLog(data) {
    console.log(data);
  }

  function calculator(num1, num2, callback) {
    var sum = num1 + num2;
    callback(sum);
  }

  // console.log("-------end-------");

  calculator(7, 1, showLog);
}

function app2() {
  setTimeout(() => {
    console.log("hello");
  }, 1000);

  let max_loop = 1000000000;
  
  for (let i = 0; i < max_loop; i++) {
    let progress = (i / max_loop) * 100;
    
    if (i % (max_loop / 100) === 0) {
      console.log(progress.toFixed(0) + "%");
    }
  }
}

function app3() {
  function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }

  function alertFinished() {
    alert("Finished all homework");
  }

  doHomework("INFORMATION SYSTEMS ANALYSIS AND DESIGN", () => {
    doHomework("WEB PROGRAMMING", () => {
      doHomework("SOFTWARE ENGINEERING", () => {
        doHomework("ENGLISH FOR COMMUNICATION", () => {
          doHomework("DATABASE SYSTEM CONCEPTS", alertFinished);
        });
      });
    });
  });
}
