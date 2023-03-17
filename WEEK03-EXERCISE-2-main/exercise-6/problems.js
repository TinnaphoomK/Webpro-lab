const title = "WEEK 3 - Exercise 6, LocalStorage"
const problems = [
    {
        title: 'PROBLEM 6.1',
        body: `
            แก้ไขฟังก์ชัน \`save()\`
            <br><br>

            ให้ใช้ Local Storage ในการบันทึก Array นี้ ด้วย key \`people\`
            \`\`\`
            [
                { name: "Aariz Bennett", age: 24 },
                { name: "Najma Shaffer", age: 17 },
                { name: "Jill Schmitt", age: 32 },
                { name: "Anita Rose", age: 44 },
            ]
            \`\`\`

            **Note** LocalStorage สามารถบันทึกได้แค่ String เท่านั้น

            <details>
                <summary>Help</summary>
                [วิธีการทำ Object หรือ Array ให้กลายเป็น JSON String](https://www.w3schools.com/js/js_json_stringify.asp)
            </details>
        `,
        testcases: [
            {
                input: 'NO_INPUT',
                expect: testLocalStorageHasPeople,
                result: null
            }
        ],
        expect_img: './imgs/p1.png',
        run: save,
    },
    {
        title: 'PROBLEM 6.2',
        body: `
            แก้ไขฟังก์ชัน \`read()\`
            <br><br>

            ให้อ่าน \`people\` จาก Local Storage และแปลง String ที่อ่านได้ให้กลายเป็น Array  

            <details>
                <summary>Help</summary>
                [วิธีการทำ JSON String ให้กลายเป็น Array หรือ Object](https://www.w3schools.com/js/js_json_parse.asp)
            </details>
        `,
        testcases: [
            {
                input: 'NO_INPUT',
                expect: [
                    { name: "Aariz Bennett", age: 24 },
                    { name: "Najma Shaffer", age: 17 },
                    { name: "Jill Schmitt", age: 32 },
                    { name: "Anita Rose", age: 44 },
                ],
                result: null
            }
        ],
        run: read
    },
    {
        title: 'PROBLEM 6.3',
        body: `
            แก้ไขฟังก์ชัน \`remove()\`
            <br><br>

            ให้ลบ \`people\` ออกจาก Local Storage
        `,
        testcases: [
            {
                input: 'NO_INPUT',
                expect: testLocalStorageHasNoPeople,
                result: null
            }
        ],
        run: remove,
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

                if (typeof testcase.expect === 'function') {
                    testcase.result = testcase.expect() ? '__PASS__' : '__FAIL__'
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