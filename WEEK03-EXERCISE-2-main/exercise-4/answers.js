function mapToSquare (input) {
    // TODO ใช้ .map สร้าง array ที่เป็นเลขยกกำลังสองของ input
    // => คือการประการ fn
    return input.map(num => num * num);
    // return input.map(function(num) {
    //     return num * num;
    //     });
}
// let a = convertTemperature(input).filter((i) => i !== null)
// console.log(a)
function convertTemperature (input) {
    // TODO: ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
    return input.map(temp => {
        if( fah_to_celsius(temp.temperature) >= 25){
            return {date: temp.date, 
                temperature: fah_to_celsius(temp.temperature) }
            }
        
    });

    function fah_to_celsius (fah) {
        let cel = (fah - 32) * 5 / 9
        return Number(cel.toFixed(1))
    }
}

function filterEvenNumber (input) {
    // TODO: filter input เอาเลขคู่เท่านั้น
    return input.filter(num => num % 2 == 0)
}

function filterAgeRange (input) {
    // TODO: กรอง input.people ตามช่วงอายุ
    return input.people.filter(people => people.age >= input.min && people.age <= input.max);
}


function removeByFilter (input) {
    // TODO: ลบ Object ใน Array ด้วยการ filter
    return input.people.filter(id => id.id != input.removeId);
}

function replaceBySplice (input) {
    // TODO: ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array  
    input.splice(4, 1, 4); 
    return input;
}
