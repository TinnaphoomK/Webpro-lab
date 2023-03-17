function plus(input){
    // TODO: สร้าง function ที่นำ input จำนวน 2 ตัวมาบวกกัน
        let total = 0;
        for (let i = 0; i < input.length; i++) {
            total += input[i];
        }
        return total;
}

// TODO: แก้ประเภทตัวแปลใน function นี้ให้ค่าที่ return ออกมาตรงกับคำตอบ 41
// *** เปลี่ยนได้เฉพาะประเภทตัวแปล ***
// global variable
let a = 'Hello';

function greet() {
    let b = 'World';
    if (b == 'World') {
        var c = 'hello';
    }
    return a + ' ' + b + ' ' + c
}

function varLetConst() {
    // TODO: แก้ประเภทตัวแปลใน function นี้ให้ค่าที่ return ออกมาตรงกับคำตอบ 41
    // *** เปลี่ยนได้เฉพาะประเภทตัวแปล ***
    let k = 5
    let j = 30
    let i = 0
    for (let j = 0; j <= 5; j++) {
        i++
    }
    for (let j = 0; j <= 5; j++) {
        j++
    }
    return j + k + i
}

function chainfunction(input){
    // TODO: จงใช้ String method และการ chain function ให้ผลลัพธ์ตรงตามโจทย์
    return input.trim().split(" ")[1].toLowerCase() + " " +input.trim().split(" ")[0].toUpperCase()
}