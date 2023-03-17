const title = "WEEK 3 - Exercise 1, Basic Javascript Type"
const problems = [
    {
        title: 'EXERCISE 0',
        body: `
            โจทย์ข้อนี้เป็นตัวอย่างที่จะทำให้ทุกคนเข้าใจการทำงานของแบบฝึกหัดนี้
            ให้เขียนฟังก์ชันที่ return คำว่า "Hello world"
            <br><br>

            วิธีการทำ
            1. เปิดไฟล์ \`exercise-1/answers.js\`
            2. ในฟังก์ชัน \`sayHello()\` ให้เขียน \`return "Hello world!"\` ลงไป<br><br>
            \`\`\`
            function sayHello () {
                 return "Hello world!"
            }
            \`\`\`
            3. กดปุ่ม RUN
        `,
        testcases: [
            { input: 'NO_INPUT', expect: 'Hello world!', result: null },
        ],
        run: sayHello
    },
    {
        title: 'EXERCISE 1.1 - การตรวจชนิดของตัวแปร String',
        body: `
            แก้ไขฟังก์ชัน \`isString(input)\`  
            <li>ถ้า input เป็น \`String\` ให้ return true</li>
            <li>ถ้า input ไม่ใช่ \`String\` ให้ return false</li>
        `,
        testcases: [
            { input: 123, expect: false, result: null },
            { input: '123', expect: true, result: null },
            { input: [123], expect: false, result: null },
            { input: {1:23}, expect: false, result: null },
        ],
        run: isString
    },
    {
        title: 'EXERCISE 1.2 - การตรวจชนิดของตัวแปร Number',
        body: `
            แก้ไขฟังก์ชัน \`isNumber(input)\`  
            <li>ถ้า input เป็น \`Number\` ให้ return true</li>
            <li>ถ้า input ไม่ใช่ \`Number\` ให้ return false</li>
        `,
        testcases: [
            { input: 123, expect: true, result: null },
            { input: '123', expect: false, result: null },
            { input: [123], expect: false, result: null },
            { input: {1:23}, expect: false, result: null },
        ],
        run: isNumber
    },
    {
        title: 'EXERCISE 1.3 - การตรวจชนิดของตัวแปร Array',
        body: `
            แก้ไขฟังก์ชัน \`isArray(input)\`  
            <li>ถ้า input เป็น \`Array\` ให้ return true</li>
            <li>ถ้า input ไม่ใช่ \`Array\` ให้ return false</li>
            <details>
                <summary>คำใบ้</summary>
                ลอง google คำว่า "js check if array" ดูสิ
            </details>
        `,
        testcases: [
            { input: 123, expect: false, result: null },
            { input: '123', expect: false, result: null },
            { input: [123], expect: true, result: null },
            { input: {1:23}, expect: false, result: null },
            { input: undefined, expect: false, result: null },
            { input: null, expect: false, result: null },
        ],
        run: isArray
    },
    {
        title: 'EXERCISE 1.4 - การตรวจชนิดของตัวแปร Object',
        body: `
            แก้ไขฟังก์ชัน \`isObject(input)\`  
            <li>ถ้า input เป็น \`Object\` ให้ return true</li>
            <li>ถ้า input ไม่ใช่ \`Object\` ให้ return false</li>
        `,
        testcases: [
            { input: 123, expect: false, result: null },
            { input: '123', expect: false, result: null },
            { input: [123], expect: false, result: null },
            { input: {1:23}, expect: true, result: null },
            { input: undefined, expect: false, result: null },
            { input: null, expect: false, result: null },
        ],
        run: isObject
    },
    {
        title: 'EXERCISE 1.5 - การตรวจชนิดของตัวแปร Function',
        body: `
            แก้ไขฟังก์ชัน \`isFunction(input)\`  
            <li>ถ้า input เป็น \`Function\` ให้ return true</li>
            <li>ถ้า input ไม่ใช่ \`Function\` ให้ return false</li>
        `,
        testcases: [
            { input: 123, expect: false, result: null },
            { input: '123', expect: false, result: null },
            { input: [123], expect: false, result: null },
            { input: {1:23}, expect: false, result: null },
            { input: undefined, expect: false, result: null },
            { input: null, expect: false, result: null },
            { input: 'function () {}', expect: true, result: null },
        ],
        run: isFunction
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
                        testcase.result = problem.run(function () {})
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