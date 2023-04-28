const express = require('express')
const Joi = require('joi')

const app = express ()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const it_student = (value) => {
    let year = value.substring(0, 2)
    let faculty = value.substring(2, 4)
    
    if (Number(year) > 63) {
        throw new Joi.ValidationError('Invalid Student ID')
    }

    if (faculty !== '07') {
        throw new Joi.ValidationError('Your are not IT Student')
    }

    return 'it' + value
}

const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required().min(0),
    sex: Joi.string().valid('male', 'female'),
    birthdate: Joi.date().max(Date.now()),
    student_id: Joi.string().min(8).max(8).custom(it_student)
}).custom((obj, helper) => {
    let birthyear = obj.birthdate.getFullYear()
    let thisYear = new Date().getFullYear()
    
    if (thisYear - birthyear != obj.age) {
        throw new Joi.ValidationError('อายุไม่ตรงกับวันเกิด')
    }
    return obj
})

app.post('/', async (req, res, next) => {
    try {
        const value = await schema.validateAsync(req.body, { })
        console.log(value)
    } catch (error) {
        return res.status(400).send(error)
    }

    res.send('OK')
})

app.listen(3030, () => {
    console.log('App listening at http://localhost:3030')
})