/*
 To run this open up your terminal.
 node hello.js Kem
 */
console.log('Hello');

function sayHello(name) {
    console.log('Hello ' + name);
}

let name = process.argv.slice(2);
sayHello(name);


