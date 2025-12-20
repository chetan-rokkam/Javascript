var x = 1;
//let y = 2;
//const z = 3;

console.log(x);

let y = 6;
console.log(y)


function myFunction() {
    const z = 12;
    console.log(z);
}
myFunction();

//////////////////////////////////////////////

let a = 1;
var b = 2;
const c = 3;

    console.log(`global : ${a}`);
    console.log(`global : ${b}`);
    console.log(`global : ${c}`);

function myFunction() {
   let a = 10;
   const c = 5;
    console.log(`function : ${a}`);
    console.log(`function : ${b}`);
    console.log(`function : ${c}`);
{
    let a = 12
    const c = 8
    console.log(`block : ${a}`);
    console.log(`block : ${b}`);
    console.log(`block : ${c}`);
}
}
myFunction();