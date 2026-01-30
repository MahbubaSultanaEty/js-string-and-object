const person = {
    name: "Brendan",
    age: 64,
    profession: 'developer',
    salary: 800000,
    isMarried: true,
    children: ['link', 'Ronnie', 'Asher'],
    "net worth": "$50 million"
}

// you can access values in two ways. dot notation and bracket notation

// dot notation
// access salary
console.log(person);

console.log(person.salary);

const income = person.salary;
console.log(income);

// access age
console.log(person.age);

const boyosh = person.age;
console.log(boyosh);

// access children
console.log(person.children);

let sons = person.children.join(" ");
console.log(sons);


// you cant access prperties that has special character or white spaces with the "dot notation", you have to use bracket notation [the box bracket]

console.log(person["net worth"]);

let worth = person["net worth"];
console.log(worth);