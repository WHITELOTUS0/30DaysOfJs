
class Person{
    constructor(name,studentId){
        this.name=name;
        this.studentId=studentId;
    }
}
class Student extends Person{
    constructor(name,studentId){
        super(name,studentId);
    }
}
let student1 = new Student("Glorry","123456");
console.log(student1.name);

