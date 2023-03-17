// ข้อ4.1
async function getAllUser(){
    //TODO
    // 1. ให้ใช้ Try Catch
    // 2. เรียกใช้ฟังก์ชัน ApiDelay()
    // 3. หากเรียกฟังก์ชันสำเร็จให้ (status: 200) ให้นำ message แสดงในกล่องข้อความ
    // 4. หากเรียกฟังก์ชันไม่สำเร็จ (message: "SERVER ERROR") ให้นำ message แสดงในกล่องข้อความ
        try {
          const idk = await ApiDelay();
          if (idk.status === 200) {
              console.log(idk)
            document.getElementById("TA").textContent = idk.message;
          }
        } catch (error) {
            console.log(error)
          document.getElementById("TA").textContent = error.message;
        }
      };

    

// ข้อ 4.2 
function checkAuth(password) {
    return new Promise((resolve, reject) => {
      if (password === "In4matioN") {
        resolve(true);
      } else {
        reject();
      }
    });
  }
  
  async function fetchData(password) {
    try {
      await checkAuth(password);
      alert("รหัสผ่านถูกต้อง");
      
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
      document.getElementById("cat").src = data[0].url;
    } catch (error) {
      alert("รหัสผ่านไม่ถูกต้อง กรุณาลองอีกครั้ง");
      console.error("Invalid Password");
    }
  }

/* 
    Function สำหรับ TA กับ อาจารย์
    นักศึกษากรุณา อย่าแก้ไข
*/

async function ApiDelay () {
      return new Promise(resolve => {
        setTimeout(() => resolve(_fakeAPI()), 1000)
    })
}

async function _fakeAPI() {
    const user = ["Bank", "Mac", "Takai", "Fluke"]
    
    if(Math.floor(Math.random() * 3) === 1){
        throw new Error("SERVER ERROR")
    }

    return {
        status: 200,
        message:user[Math.floor(Math.random() * 4)]
    }
}
