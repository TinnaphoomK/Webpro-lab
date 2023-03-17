const title = "WEEK 3 - Exercise 5, Function"
const problems = [
    {
        title: 'PROBLEM 5.1',
        body: `
            แก้ไขฟังก์ชัน \`plus(input)\` 

            วิธีทำ
            1. สร้าง Function ที่รับ Arguments 2 ค่าเป็น number
            2. นำ 2 ค่าที่ได้มา \`บวก\` กัน
            3. Return ผลลัพธ์หลังจากบวกกัน
        `,
        testcases: [
            { input: [1,2], expect: 3, result: null }

        ],
        run: plus
    },
    {
        title: 'PROBLEM 5.2',
        body: `
            แก้ไขประเภทตัวแปรในฟังก์ชัน \`greet()\`
            
            วิธีทำ
            1. แก้ไขเฉพาะประเภทตัวแปรภายในฟังก์ชัน ให้ได้ผลลัพธ์ที่กำหนด

            <details>
                <summary>Help</summary>
                https://www.w3schools.com/js/js_scope.asp
            </details>
        `,
        testcases: [
            { input: null, expect: 'Hello World hello', result: null }

        ],
        run: greet
    },
    {
        title: 'PROBLEM 5.3',
        body: `
            แก้ไขประเภทตัวแปรในฟังก์ชัน \`varLetConst()\`
            
            วิธีทำ
            1. แก้ไขเฉพาะประเภทตัวแปรภายในฟังก์ชัน ให้ได้ผลลัพธ์ที่กำหนด

            <details>
                <summary>Help</summary>
                https://www.w3schools.com/js/js_scope.asp
            </details>
        `,
        testcases: [
            { input: null, expect: 41, result: null }

        ],
        run: varLetConst
    },
    {
        title: 'PROBLEM 5.4',
        body: `
            แก้ฟังก์ชัน \`chainfunction(input)\`
            
            วิธีทำ
            1. จงใช้ String Method และการ Chain Function ให้ได้ผลลัพธ์ที่กำหนด

            ตัวอย่างการทำ Chain Function 

            \` variable.function1().function2() \`

            <details>
                <summary>Help</summary>
                https://www.w3schools.com/js/js_string_methods.asp
            </details>
        `,
        testcases: [
            { input: "   HeLLo WoRLd       ", expect: "HELLO world", result: null },
            { input: "       WebPro soFuN   ", expect: "WEBPRO sofun", result: null },
        ],
        run: chainfunction
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