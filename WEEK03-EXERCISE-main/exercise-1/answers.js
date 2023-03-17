function sayHello () {
    return "Hello world!"
}

function isString (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
   return typeof input=="string"
}

function isNumber (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    return typeof input=="number"

}

function isArray (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    return Array.isArray(input)

}

function isObject (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    return typeof input === 'object' && input !== null && !Array.isArray(input)}

function isFunction (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    return typeof input==="function"
}