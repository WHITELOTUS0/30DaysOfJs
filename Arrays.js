function myFunction(){
    console.log(arguments)
}

myFunction(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
  console.log(greetings())
  console.log(greetings('Asabeneh'))
