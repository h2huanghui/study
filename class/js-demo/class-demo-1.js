class Student {
    constructor(name, number) {
        this.name = name;
        this.number = number;
    }
    sayHi() {
        console.log(`姓名 ${this.name}，学号 ${this.number}`)
    }
}

//new 对象/实例
const hh = new Student('lv',18)
console.log(hh.name)
console.log(hh.number);
hh.sayHi()