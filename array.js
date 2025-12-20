const myArray = [];
//to add an element to array
myArray[0] = "chetan";
myArray[1] = 2003;
myArray[2] = false;

console.log(myArray)

 //to push
 myArray.push("rourkela");
 console.log(myArray);

 //to remove from last
 myArray.pop();
 console.log(myArray)

//to know length of myArray
console.log(myArray.length);

//to know the posotion of arraay
console.log(myArray[2]);

//to add element from first
myArray.unshift(22);
console.log(myArray)

//to remove first element 
myArray.shift();
console.log(myArray);

//to delete the position or replace element
myArray.splice(1, 1, 22);
console.log(myArray)
