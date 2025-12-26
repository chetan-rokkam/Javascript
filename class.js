class ToyotaCar {
  constructor (brand, mileage){
    console.log("create a new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start(){
    console.log("start");
  }
  stop(){
    console.log("stop");
  }
  
}

let supra = new ToyotaCar("supra", 8);
console.log(supra);

let innova = new ToyotaCar("innova", 12);
console.log(innova);

let glanza = new ToyotaCar("glanza", 16);
console.log(glanza);

//inheritance
//extend
class parent {
  hello(){
    console.log("hello");
  }
}
class child extends parent {}
let obj = new child();


class person {
eat() {
  console.log("eat");
}
sleep() {
  console.log("sleep");
}
}
class Engineer extends person{
  work() {
    console.log("solving problems");
  }
}

class Doctor extends person{
  work() {
    console.log("treat patient");
  }
}

let chetanObj = new Engineer();

/////////////////////////////
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() { console.log(`${this.name} is eating.`); }
}

class Dog extends Animal {
  bark() { console.log("Woof!"); }
}

const myDog = new Dog("Buddy");
myDog.eat(); 
myDog.bark(); 

//super
class Engineer extends person {
  constructor (branch){
    console.log("enter child character")
    super();
    this.branch = branch;
    console.log("exit child character")
  }

  work() {
    console.log("solve provlem, build something")
  }
 }

 let engObj = new Engineer("chemical engg");


