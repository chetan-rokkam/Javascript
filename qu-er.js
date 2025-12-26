let DATA = "confidential information";

class User {
  constructor (name, email) {
    this.name = name;
    this.email = email;
  }
   viewData () {
    console.log("data =", DATA);
   }
}

class Admin extends User{
  constructor (name, email) {
    super (name, email);
  }
  editData() {
    DATA = "some new value";
  }
}


let student1 = new User("chetan", "chetan@email.com");
let student2 = new User("avinash", "avinash@email.com")

let teacher1 = new User("bhargavi", "bhargavi@email.com");

let admin1 = new User("me", "me@email.com");

//error
let a = 10;
let b = 15;
let c = 20;

console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a + c);
console.log("a+b = ", a + b);
try{
console.log("a+b = ", a + d); //error
} catch (err){
  console.log(err);
}
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + c);
console.log("a+b = ", a + b);
console.log("a+b = ", a + b);
console.log("a+b = ", a + c);
console.log("a+b = ", a + c);




