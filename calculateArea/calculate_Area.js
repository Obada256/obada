function greet(name) {
    const greeting = "Hello, ";

    function sayHello() {
        console.log(greeting + name);
    }

    return sayHello;
}

const greetJohn = greet("John");
const greetAlice = greet("Alice");

greetJohn();
greetAlice();
