function convertADtoBE(input) {
    if (input >= 0) {
        return "พ.ศ. " + (input+543) 
    }
    else {
        return "ไม่ถูกต้อง"
    }
    
}

function evenOrOdd(input) {
    if (input %2 == 0) {
        return "even" 
    }
    else {
        return "odd"
    }
}

function getFullName(input) {
    if (input.sex == "male") {
        return "Mr. " + input.firstName + " " + input.lastName
    }
    else {
        return "Ms. " + input.firstName + " " + input.lastName

    }
}

function getFirstName(input) {
    let fn = input.split(" ")[1] 
    return fn
}