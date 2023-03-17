const title = "WEEK 3 - Exercise 4, Array (1)"
const problems = [
    {
        title: 'PROBLEM 4.1',
        body: `
            แก้ไขฟังก์ชัน \`mapToSquare(input)\`  
            คำว่า map ในฟังก์ชัน Array.map() ไม่ได้หมายถึงแผนที่ แต่หมายถึงการจับคู่ เช่น
            <br><br>

            กำหนดให้ input เป็น Array ของตัวเลข  
            \`[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\`  
            ให้ใช้ฟังก์ชัน .map() แปลงค่าตัวเลขทุกตัวใน input โดยการยกกำลังสอง
        `,
        testcases: [
            { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], expect: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81], result: null },
            { input: [0, -3, 2, 31], expect: [0, 9, 4, 961], result: null }
        ],
        run: mapToSquare
    },
    {
        title: 'PROBLEM 4.2',
        body: `
            แก้ไขฟังก์ชัน \`convertTemperature(input)\`
            <br><br>

            กำหนดให้ \`input\` เป็น Array ของอุณหภูมิในแต่ละวันซึ่งมีหน่วยเป็น °F เช่น
            \`\`\`
            [
                { date: '2021-01-01', temperature: 80.0 }, // °F
                { date: '2021-01-02', temperature: 82.3 }, // °F
                { date: '2021-01-03', temperature: 77.0 }, // °F
                { date: '2021-01-04', temperature: 70.4 }, // °F
            ]
            \`\`\`
            <br>

            ให้แปลงอุณหภูมิจาก °F เป็น °C โดยใช้ฟังก์ชัน .map()
            \`\`\`
            [
                { date: '2021-01-01', temperature: 26.7 }, // °C
                { date: '2021-01-02', temperature: 27.9 }, // °C
                { date: '2021-01-03', temperature: 25.0 }, // °C
                { date: '2021-01-04', temperature: 21.3 }, // °C
            ]
            \`\`\`
            <br>
            
            โดย กำหนดให้ฟังก์ชันที่ใช้ในการแปลง °F เป็น °C คือ
            \`\`\`
            function fah_to_celsius (fah) {
                let cel = (fah - 32) * 5 / 9   // แปลงหน่วยจาก °F เป็น °C
                return Number(cel.toFixed(1))  // ปัดเลขให้เป็นทศนิยม 1 ตำแหน่ง
            }
            \`\`\`
        `,
        testcases: [
            {
                input: [
                    { date: '2021-01-01', temperature: 80.0 }, // °F
                    { date: '2021-01-02', temperature: 82.3 }, // °F
                    { date: '2021-01-03', temperature: 77.0 }, // °F
                    { date: '2021-01-04', temperature: 70.4 }, // °F
                ],
                expect: [
                    { date: '2021-01-01', temperature: 26.7 }, // °C
                    { date: '2021-01-02', temperature: 27.9 }, // °C
                    { date: '2021-01-03', temperature: 25.0 }, // °C
                    { date: '2021-01-04', temperature: 21.3 }, // °C
                ],
                result: null
            }
        ],
        run: convertTemperature
    },
    {
        title: 'PROBLEM 4.3',
        body: `
            แก้ไขฟังก์ชัน \`filterEvenNumber(input)\`  
            <br><br>

            กำหนดให้ input เป็น Array ของตัวเลข  
            ให้ใช้ฟังก์ชัน .filter() กรองตัวเลขเพื่อให้ได้ Array ที่มีแต่เลขคู่เท่านั้น
        `,
        testcases: [
            { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], expect: [0, 2, 4, 6, 8], result: null },
            { input: [0, -3, 2, 9, 3, 4, 2], expect: [0, 2, 4, 2], result: null },
            { input: [1, 3, 5, 7], expect: [], result: null }
        ],
        run: filterEvenNumber
    },
    {
        title: 'PROBLEM 4.4',
        body: `
            แก้ไขฟังก์ชัน \`filterAgeRange(input)\`  
            <br><br>

            กำหนดให้ input เป็น Object ในรูปแบบ
            \`\`\`
            {
                min: 3, 
                max: 20,
                people: [
                    { name: "Aariz Bennett", age: 24 },
                    { name: "Najma Shaffer", age: 17 },
                    { name: "Jill Schmitt", age: 32 },
                    { name: "Anita Rose", age: 44 },
                ]
            }
            \`\`\`
            ให้ใช้ฟังก์ชัน .filter() กรอง \`people\` ในที่มีอายุอยู่ในช่วงระหว่าง \`min\` และ \`max\`
        `,
        testcases: [
            {
                input: {
                    min: 3,
                    max: 20,
                    people: [
                        { name: "Aariz Bennett", age: 24 },
                        { name: "Najma Shaffer", age: 17 },
                        { name: "Jill Schmitt", age: 32 },
                        { name: "Anita Rose", age: 44 },
                    ]
                },
                expect: [
                    { name: "Najma Shaffer", age: 17 },
                ],
                result: null
            },
            {
                input: {
                    min: 30,
                    max: 50,
                    people: [
                        { name: "Aariz Bennett", age: 24 },
                        { name: "Najma Shaffer", age: 17 },
                        { name: "Jill Schmitt", age: 32 },
                        { name: "Anita Rose", age: 44 },
                    ]
                },
                expect: [
                    { name: "Jill Schmitt", age: 32 },
                    { name: "Anita Rose", age: 44 },
                ],
                result: null
            },
        ],
        run: filterAgeRange
    },
    {
        title: 'PROBLEM 4.5',
        body: `
            แก้ไขฟังก์ชัน \`removeByFilter(input)\`  
            <br><br>

            กำหนดให้ input เป็น Object ในรูปแบบ
            \`\`\`
            {
                removeId: 3,
                people: [
                    { id: 1, name: "Aariz Bennett", age: 24 },
                    { id: 2, name: "Najma Shaffer", age: 17 },
                    { id: 3, name: "Jill Schmitt", age: 32 },
                    { id: 4, name: "Anita Rose", age: 44 },
                ]
            }
            \`\`\`
            ให้ใช้ฟังก์ชัน .filter() ลบ Object ที่มี id เท่ากับ input
        `,
        testcases: [
            {
                input: {
                    removeId: 3,
                    people: [
                        { id: 1, name: "Aariz Bennett", age: 24 },
                        { id: 2, name: "Najma Shaffer", age: 17 },
                        { id: 3, name: "Jill Schmitt", age: 32 },
                        { id: 4, name: "Anita Rose", age: 44 },
                    ]
                }, 
                expect: [
                        { id: 1, name: "Aariz Bennett", age: 24 },
                        { id: 2, name: "Najma Shaffer", age: 17 },
                        { id: 4, name: "Anita Rose", age: 44 },
                ], 
                result: null
            },
            {
                input: {
                    removeId: 1,
                    people: [
                        { id: 1, name: "Aariz Bennett", age: 24 },
                        { id: 2, name: "Najma Shaffer", age: 17 },
                        { id: 3, name: "Jill Schmitt", age: 32 },
                        { id: 4, name: "Anita Rose", age: 44 },
                    ]
                }, 
                expect: [
                        { id: 2, name: "Najma Shaffer", age: 17 },
                        { id: 3, name: "Jill Schmitt", age: 32 },
                        { id: 4, name: "Anita Rose", age: 44 },
                ], 
                result: null
            },
            
        ],
        run: removeByFilter

    },
    {
        title: 'PROBLEM 4.6',
        body: `
            แก้ไขฟังก์ชัน \`replaceBySplice(input)\`  
            <br><br>

            ให้ใช้ฟังก์ชัน .splice() ในการ **เปลี่ยน (replace)** สมาชิกใน Array  
            เรียงลำดับตัวเลขให้ถูกต้อง
        `,
        testcases: [
            { input: [0, 1, 2, 3, 9, 5], expect: [0, 1, 2, 3, 4, 5], result: null },
        ],
        run: replaceBySplice
    },    
]

const app = new Vue({
    el: '#app',

    data: {
        title: title,
        problems: problems,
    },

    methods: {
        run(problem) {
            for (const testcase of problem.testcases) {
                if (testcase.input !== 'NO_INPUT') {
                    if (testcase.input === 'function () {}') {
                        testcase.result = problem.run(function () { })
                    } else {
                        testcase.result = problem.run(_.clone(testcase.input))
                    }
                } else {
                    testcase.result = problem.run()
                }
            }
        },
        markdownToHtml(text) {
            const lines = text.split(/\r?\n/).map(
                line => line.substring(0, 12).trim() === ''
                    ? line.substring(11)
                    : line
            )
            return marked.parse(lines.join('\n'))
        },
        isEqual(a, b) {
            if (a === 'NO_INPUT' || b === 'NO_INPUT') return false
            return _.isEqual(a, b)
        },
        log(e, data) {
            console.log(data)
        },
        prettyJson(obj) {
            if (obj === undefined) {
                return 'undefined'
            }
            if (typeof obj === 'function') {
                return 'function () {}'
            }
            if (this.isComplex(obj)) {
                return JSON.stringify(obj, null, 2)
            } else {
                return JSON.stringify(obj)
            }
        },
        isComplex(obj) {
            if (_.isString(obj)) return false
            if (_.isBoolean(obj)) return false
            if (_.isNumber(obj)) return false
            if (_.isArray(obj)) {
                return this.isComplex(obj[0])
            }
            return true
        }
    }
})