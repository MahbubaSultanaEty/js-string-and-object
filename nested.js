const dress= {
    color: "maroon",
    price: 2300,
    name: 'anarkali',
    size: [44, 56, 87],
    quality: {
        fabrics: 'cotton',
        isSustainable: true,
    }
}

console.log(dress["name"]);
console.log(dress.quality.fabrics);

const person = {
    name: "Brendan",
    age: 64,
    profession: 'developer',
    salary: 800000,
    isMarried: true,
    invention: {
        name: "javaScript",
        year: 1995
    },
    children: ['link', 'Ronnie', 'Asher'],
    "net worth": "$50 million"
}

console.log(person.invention.year);

person.invention.year = 2000;
console.log(person);

// delete a property in object
delete person.age;
delete person.invention.year;
console.log(person);