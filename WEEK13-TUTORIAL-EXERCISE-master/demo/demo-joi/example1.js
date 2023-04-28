const express = require('express')
const Joi = require('joi')

const app = express ()

const schema = Joi.object({
    name: Joi.string().required(),
    age: Joi.number().required().min(0)
})

app.get('/', async (req, res, next) => {
    try {
        const value = await schema.validateAsync(req.query, { })
        console.log(value)
    } catch (error) {
        return res.status(400).send(error)
    }

    res.send('OK')
})

app.listen(3030, () => {
    console.log('App listening at http://localhost:3030')
})