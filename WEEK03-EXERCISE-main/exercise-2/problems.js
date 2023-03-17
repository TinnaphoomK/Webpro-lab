const title = "WEEK 3 - Exercise 2, Data Type"
const problems = [
    {
        title: 'EXERCISE 2.1',
        body: `
            แก้ไขฟังก์ชัน \`convertADtoBE(input)\`  
            แปลงปีใน คริสตศักราช เป็น พุทธศักราช เช่น \`2000\` เป็น \`"พ.ศ. 2543"\`  
            โดยให้เติมตัวอักษร พ.ศ. เข้าไปด้านหน้าด้วย
        `,
        testcases: [
            { input: 1978, expect: `พ.ศ. ${1978 + 543}`, result: null },
            { input: 1999, expect: `พ.ศ. ${1999 + 543}`, result: null },
            { input: -1999, expect: 'ไม่ถูกต้อง', result: null },
            { input: 'สวัสดีปีใหม่', expect: 'ไม่ถูกต้อง', result: null },
        ],
        run: convertADtoBE
    },
    {
        title: 'EXERCISE 2.2',
        body: `
            แก้ไขฟังก์ชัน \`evenOrOdd(input)\`  
            ให้ตรวจสอบว่าตัวเลข \`input\` เป็นเลขคู่หรือเลขคี่
        `,
        testcases: [
            { input: 12, expect: 'even', result: null },
            { input: 9, expect: 'odd', result: null },
            { input: 0, expect: 'even', result: null }
        ],
        run: evenOrOdd
    },
    {
        title: 'EXERCISE 2.3',
        body: `
            แก้ไขฟังก์ชัน \`getFullName(input)\`  
            ให้นำคำนำหน้าชื่อ ชื่อต้น นามสกุล มาต่อกัน
            <br><br>

            เช่น  
            <li>ถ้า input เป็น \`{ firstName: 'John', lastName: 'Bake', sex: 'male' }\`<br>
                ให้ return \`"Mr. John Bake"\`</li>
            <li>ถ้า input เป็น \`{ firstName: 'Jane', lastName: 'Sara', sex: 'female' }\`<br>
                ให้ return \`"Ms. Jane Sara"\`</li>
        `,
        testcases: [
            { input: { firstName: 'John', lastName: 'Baker', sex: 'male' }, expect: 'Mr. John Baker', result: null },
            { input: { firstName: 'Jane', lastName: 'Sara', sex: 'female' }, expect: 'Ms. Jane Sara', result: null }
        ],
        run: getFullName
    },
    {
        title: 'EXERCISE 2.4',
        body: `
            แก้ไขฟังก์ชัน \`getFirstName(input)\`  
            ให้ทำการตัดนามสกุลออกโดยใช้ \`indexOf()\` และ \`substring()\`
            <br><br>

            ตัวอย่าง การใช้งาน [indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp) และ [substring()](https://www.w3schools.com/jsref/jsref_substr.asp)
            \`\`\`
            let text = "Hello world"
            text.indexOf("H") // -> 0
            text.indexOf("e") // -> 1
            text.indexOf("l") // -> 2
            text.indexOf("r") // -> 8

            let subtext = text.substring(1, 8) 
            // subtext = "ello wo"
            // text = "Hello world"
        `,
        testcases: [
            { input: "Aariz Bennett", expect: "Aariz", result: null },
            { input: "Najma Shaffer", expect: "Najma", result: null },
            { input: "Jill Schmitt", expect: "Jill", result: null },
            { input: "Anita Rose", expect: "Anita", result: null },
        ],
        run: getFirstName
    }

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