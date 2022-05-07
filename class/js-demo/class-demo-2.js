class People {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} eat something`)
    }
}

//子类
class Student extends People {
    constructor(name,number) {
        super(name);
        this.number = number;
    }
    sayHi() {
        console.log(`姓名 ${this.name} 学号 ${this.number}`)
    }
}

class Teacher extends People {
    constructor(name,major) {
        super(name);
        this.major = major
    }
    teach() {
        console.log(`${this.name} 教授 ${this.major}`)
    }

}

const hh = new Student('lv',18)
console.log(hh.name)
console.log(hh.number);
hh.sayHi()
hh.eat();


const fpp = new Teacher('fpp','语文')
console.log(fpp.name)
console.log(fpp.major);
fpp.teach();
fpp.eat()

console.log('hh instanceof Student',hh instanceof Student); //true
console.log('hh instanceof People',hh instanceof People); //true
console.log('hh instanceof Object',hh instanceof Object); //true

console.log('typeof People') //function (实际上是函数,其实是语法糖)
console.log('typeof Student') //function



