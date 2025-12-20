//function1

function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));


//function2

const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(5, 3)); 

//function3

const add = (a, b) => a + b;


const getFullName = (first, last) => {
  const full = first + " " + last;
  return full;
};

console.log(add(10, 5)); 

//function4

class OrderProcessor {
  #taxRate = 0.15; 

  #calculateTax(amount) { 
    return amount * this.#taxRate;
  }

  processOrder(price) {
    const tax = this.#calculateTax(price);
    return price + tax;
  }
}
const processor = new OrderProcessor();
const result = processor.processOrder(100);

console.log(result);