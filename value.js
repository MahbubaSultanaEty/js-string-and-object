const person = {
    name: "Brendan",
    birthPlace: "USA",
    age: 64,
    profession: 'developer',
    salary: 800000,
    isMarried: true,
    children: ['link', 'Ronnie', 'Asher'],
    "net worth": "$50 million"
}


// you can change the values using dot and bracket notation
person.salary = 900000;
person["age"] = 66;
console.log(person);


// access the value of a specific property
let propName = "net worth";
console.log(person[propName]);

let keyName = "age";
console.log(person[keyName]);

let propName2 = "name";
console.log(person[propName2]);

// changing the values
keyName = "profession";
person[keyName] = "Jhal Muri Wala";
console.log(person);

propName = "birthPlace";
person[propName] = "Nowakhali";
console.log(person.birthPlace);
console.log(person);