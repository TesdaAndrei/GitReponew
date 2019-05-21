const sayHello = function(){
    console.log('Hello Goodmorning');
}

const sayHello2 = () => {
    console.log('hai');
}

const sayHello3 = () => console.log('one line');

const sayHello4 = () => 'hello';

sayHello();
sayHello3();

console.log(sayHello4());


const users = ['nathan', 'hunt', 'jason'];

//Array ang nirereturn
const nameLengths = users.map(name => name);

//so basically array na yung variable mo
console.log(nameLengths);