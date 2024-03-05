# ES6_basics
-------------------------

 ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript. Here are some basic features of ES6:

let and const:
---------------------------

- let and const are block-scoped variable declarations. let allows reassignment, while const is used for constants.
        javascript
        
        let x = 10;
        const pi = 3.14;

Arrow Functions:
--------------------------------

- Arrow functions provide a more concise syntax for writing functions. They also don't bind their own this context.
        javascript

        const add = (a, b) => a + b;

Template Literals:
---------------------------------

- Template literals allow the embedding of expressions inside string literals, making it easier to concatenate strings.
        javascript

        const name = "John";
        console.log(`Hello, ${name}!`);

Destructuring Assignment:
-------------------------------

Destructuring allows you to extract values from arrays or objects and assign them to variables in a more convenient way.
        javascript

        const person = { name: "Alice", age: 30 };
        const { name, age } = person;

Default Parameters:
-------------------------------

- You can now set default values for function parameters, reducing the need for explicit checks.
        javascript

        function greet(name = "Guest") {
            console.log(`Hello, ${name}!`);
        }

Spread and Rest Operators:
-------------------------------------

- The spread operator (...) is used to spread elements of an array or object. 

- The rest operator is used to collect the remaining arguments into an array.

        javascript

        const numbers = [1, 2, 3];
        const combined = [...numbers, 4, 5];

        function sum(...args) {
            return args.reduce((total, num) => total + num, 0);
        }

Classes:
--------------

- ES6 introduced a more convenient syntax for creating classes and working with object-oriented programming in JavaScript.

        javascript

        class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log(`Hello, my name is ${this.name}.`);
            }
        }

        const john = new Person("John", 25);
        john.sayHello();

Promises:
------------------

- Promises provide a cleaner way to work with asynchronous code compared to callbacks.

        javascript

        const fetchData = () => {
            return new Promise((resolve, reject) => {
                // Asynchronous code
                if (/* success */) {
                    resolve(data);
                } else {
                    reject(error);
                }
            });
        };

- These are just some of the key features introduced in ES6. The ES6 specification brought many improvements to the language, enhancing its readability, expressiveness, and overall developer experience.