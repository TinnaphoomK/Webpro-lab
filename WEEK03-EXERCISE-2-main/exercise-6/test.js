function testLocalStorageHasPeople() {
    let data = localStorage.getItem('people')
    try {
        data = JSON.parse(data)
        return _.isEqual(data, [
            { name: "Aariz Bennett", age: 24 },
            { name: "Najma Shaffer", age: 17 },
            { name: "Jill Schmitt", age: 32 },
            { name: "Anita Rose", age: 44 },
        ])
    } catch (e) {
        return false
    }
}

function testLocalStorageHasNoPeople() {
    return localStorage.getItem('people') === null
}