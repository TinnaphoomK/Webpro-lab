// ข้อ 3.1
function getDogDemo(url) {
  // hint: เรียกใช้ getAPI() โดยดึงข้อมูลจาก url = https://dog.ceo/api/breeds/image/random
  // ลอง console.log() ดูว่าข้อมูลที่ได้มาเป็นอย่างไร
  var num = 10
  getAPI("https://dog.ceo/api/breeds/image/random", 
  (ss) => (
    setInterval(runtime, 1000),

    setTimeout(() => {
      document.getElementById("dogImg").src = ss.message;
    }, 10000)
  ), 
  (error) => {})

  function runtime(){
    dogTime.innerHTML = num;
    if (num > 0){
      num -= 1
    } else {
      clearInterval();
    }
  }

}






// ข้อ 3.2
function Rainbow() {
  //TODO
  // 1. ในกรณีที่ status = 'success' ให้แสดงตัวเลขเป็นสีตามที่กำหนดในแต่ละ STATE
  // 2. ให้แสดงชื่อ STATE (STATE 1 หรือ STATE 2 หรือ STATE 3) ในกล่องข้อความเมื่อเกิด Error
  // 3. เปลี่ยนสีข้อความเป็นสีแดงเมื่อเกิด Error (class = 'has-text-error')

  const rainbow = document.getElementById("rainbow")
  setTimeout(() => {
    // STATE 1 color = 'has-text-primary'
    if (getResult().status == "success"){
      rainbow.className = 'has-text-primary'
      rainbow.innerHTML = getResult().text
    } else {
      rainbow.className = 'has-text-danger'
      rainbow.innerHTML = 'STATE1'
      return 0
    }
      setTimeout(() => {
        // STATE 2 color = 'has-text-success'
        if (getResult().status == "success"){
          rainbow.className = 'has-text-success'
          rainbow.innerHTML = getResult().text
        } else {
          rainbow.className = 'has-text-danger'
          rainbow.innerHTML = 'STATE2'
          return 0
        }
        setTimeout(() => {
            // STATE 3 color = 'has-text-success'
            if (getResult().status == "success"){
              rainbow.className = 'has-text-success'
              rainbow.innerHTML = getResult().text
            } else {
              rainbow.className = 'has-text-danger'
              rainbow.innerHTML = 'STATE3'
              return 0
            }
        }, 2000)

      }, 2000)

  }, 1000)
}

function getResult(){
  const num = Math.floor(Math.random() * 10)
  console.log(num)
  if(num > 5) {
    return {
      'status': 'success',
      'text': num
    }
  }else{
    return {
      'status': 'error',
      'text': num
    }
  }
}






// ข้อ 3.3
function evenNumber(num) {
  // hint : ทำการสร้าง promise และเรียกใช้
  let promise = new Promise(function(resolve, reject){
    if(num%2 == 0){
      resolve("success : " + num + " is an even number")
    }else {
      reject("error : " + num + " is not an even number")
    }
  })

  promise.then(
    (ss) => (result.innerHTML = ss)
  ).catch(
    (er) => (result.innerHTML = er)
  )
}

// ข้อ 3.4
function task(id) {
  const delay = parseInt(Math.random() * 1000)
  // return promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 500){
        resolve("task " + id + " : " + delay + " ms" + "... PASS!")
      }else {
        reject("task " + id + " : " + delay + " ms" + "... NOTPASS!")
      }
    }, delay)
  })
}

function tester() {
  // hint : task(1).then().catch() ..... task(4)...
  // ต้องเรียก function task 4 ครั้ง เปลี่ยน id ไปเรื่อยๆ
  task(1).then((rs)=>{
    console.log(rs)
  }).catch((er)=>{
    console.log(er)
  })
  task(2).then((rs)=>{
    console.log(rs)
  }).catch((er)=>{
    console.log(er)
  })
  task(3).then((rs)=>{
    console.log(rs)
  }).catch((er)=>{
    console.log(er)
  })
  task(4).then((rs)=>{
    console.log(rs)
  }).catch((er)=>{
    console.log(er)
  })
}





// ข้อ 3.5
// hint : เรียก getAPI() ที่ url = https://api.thecatapi.com/v1/images/search 
// อย่าลืม console.log() ดูข้อมูลที่ได้ด้วยว่ามีโครงสร้างแบบใด
function checkAuth(password) {
  return new Promise ((resolve, reject) => {
    if(password == "Cisco"){
      resolve("รหัสผ่านถูกต้อง")
    }else{
      reject("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง")
    }
  })
}

function fetchData(password) {
  checkAuth(password).then((rs)=>{
    alert(rs)
    getAPI("https://api.thecatapi.com/v1/images/search", (rs) => 
      document.getElementById("cat").src =rs[0].url)
  }).catch((er)=>
  alert(er)
  )
}









// GET API
function getAPI(url, success, error) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const res = JSON.parse(this.response);
      success(res);
    } else if (this.readyState == 4) {
      const res = JSON.parse(this.response);
      error(res);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.send();
}