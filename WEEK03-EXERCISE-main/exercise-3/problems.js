const title = "WEEK 3 - Exercise 3, Object and Array"
const problems = [
    {
        title: 'EXERCISE 3.1',
        body: `
            แก้ไขฟังก์ชัน \`getDayName(input)\`  
            <br>

            กำหนดให้ \`input\` เป็น ตัวเลข 0-6 โดย  
            <li>0: วันอาทิตย์</li>
            <li>1: วันจันทร์</li>
            <li>2: วันอังคาร</li>
            <li>3: วันพุธ</li>
            <li>4: วันพฤหัสบดี</li>
            <li>5: วันศุกร์</li>
            <li>6: วันเสาร์</li>
            <br>

            ให้ return ชื่อวันตามตัวเลข
        `,
        testcases: [
            { input: 0, expect: 'วันอาทิตย์', result: null },
            { input: 1, expect: 'วันจันทร์', result: null },
            { input: 2, expect: 'วันอังคาร', result: null },
            { input: 3, expect: 'วันพุธ', result: null },
            { input: 4, expect: 'วันพฤหัสบดี', result: null },
            { input: 5, expect: 'วันศุกร์', result: null },
            { input: 6, expect: 'วันเสาร์', result: null },
        ],
        run: getDayName
    },
    {
        title: 'EXERCISE 3.2',
        body: `
            แก้ไขฟังก์ชัน \`formatDate(input)\`  
            <br>

            กำหนดให้ \`input\` เป็น Object ในรูปแบบนี้
            \`\`\`
            {
                day: 6, // 0=วันอาทิตย์, 1=วันจันทร์, 2=วันอังคาร, ...
                date: 15, // วันที่ 1-31
                month: 0, // 0=มกราคม, 1=กุมภาพันธ์, ...
                year: 2021 // ปี
            }
            \`\`\`
            <br>

            ให้แปลง \`input\` เป็น \`String\` ในรูปแบบ \`"วันศุกร์ที่ 15 มกราคม พ.ศ. 2564"\`
        `,
        testcases: [
            { input: { day: 5, date: 15, month: 0, year: 2021 }, expect: 'วันศุกร์ที่ 15 มกราคม พ.ศ. 2564', result: null },
            { input: { day: 0, date: 2, month: 7, year: 2020 }, expect: 'วันอาทิตย์ที่ 2 สิงหาคม พ.ศ. 2563', result: null },
            { input: { day: 1, date: 3, month: 7, year: 2020 }, expect: 'วันจันทร์ที่ 3 สิงหาคม พ.ศ. 2563', result: null },
            { input: { day: 2, date: 4, month: 7, year: 2020 }, expect: 'วันอังคารที่ 4 สิงหาคม พ.ศ. 2563', result: null },
            { input: { day: 3, date: 5, month: 7, year: 2020 }, expect: 'วันพุธที่ 5 สิงหาคม พ.ศ. 2563', result: null },
            { input: { day: 4, date: 6, month: 7, year: 2020 }, expect: 'วันพฤหัสบดีที่ 6 สิงหาคม พ.ศ. 2563', result: null },
        ],
        run: formatDate
    },
    {
        title: 'EXERCISE 3.3',
        body: `
            แก้ไขฟังก์ชัน \`findTotal(input)\`<br><br>

            กำหนดให้ \`input\` เป็น array ของตัวเลข  
            ให้หาผลบวกของเลขทั้งหมดใน \`input\`
        `,
        testcases: [
            { input: [1, 2, 3, 4, 5], expect: 15, result: null },
            { input: [13, 28, 0, 201], expect: 242, result: null },
            { input: [9, 2, 11, 3, 8], expect: 33, result: null },
            { input: [4, 1, 5, 2, -3, 9, 0], expect: 18, result: null },
        ],
        run: findTotal
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