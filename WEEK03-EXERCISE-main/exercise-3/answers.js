function getDayName (input) {
    // input เป็นเลข 0-6
    // TODO: แปลงเลข 0-6 เป็น วันอาทิตย์ - วันเสาร์
    const daysInWeek = ['วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'];
    return daysInWeek[input];
}

function formatDate (input) {
    // input เป็น Object ในรูปแบบ
    // {
    //     day: 6, // 0=วันอาทิตย์, 1=วันจันทร์, 2=วันอังคาร, ...
    //     date: 15, // วันที่ 1-31
    //     month: 0, // 0=มกราคม, 1=กุมภาพันธ์, ...
    //     year: 2021 // ปี
    // }
    const monthInThai = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
    const dayInThai = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
        return `${dayInThai[input.day]}ที่ ${input.date} ${monthInThai[input.month]} พ.ศ. ${input.year + 543}`;

}

function findTotal (input) {
    let total = 0;
    // for (let i = 0; i < input.length; i++ ) {
    //     total += input[i];
    // }
    input.map(num => {
        if (num % 2 ==0){
            total += num * num
        }
        else{
            total += num
        }
    });
    return total;
    // return input.reduce((input, num) => input += num);

}