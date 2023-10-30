//Make a JSON Variable  
var json = {
    "employees": [
        {
            "firstName": "John",
            "lastName": "Doe"
        },
        {
            "firstName": "Anna",
            "lastName": "Smith"
        },
        {
            "firstName": "Peter",
            "lastName": "Jones"
        }
    ]
};
const change= JSON.stringify(json, 5)
console.log(change)
