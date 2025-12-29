function Animal(name){
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(`${this.name} make a noise.`);
}

const dog = new Animal("dorus");
dog.speak();

////////////////////////

let animal = {
  eats: true
};


let rabbit = Object.create(animal); 
alert(rabbit.eats); 

alert(Object.getPrototypeOf(rabbit) == animal); 

Object.setPrototypeOf(rabbit, {}); 
