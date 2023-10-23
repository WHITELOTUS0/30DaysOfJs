const myName = (n)=>{
    console.log("Hello");
    n();
}
const myName2 = ()=>{
    console.log("Glorry");
}
myName(myName2);

function sayHello() {
    console.log('Hello')
  }

setTimeout(sayHello, 1000)