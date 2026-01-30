const first = "Sadik";
const last = "Abid";

const fullName = first + last;
const fullName2 = first.concat(last);
console.log(fullName);
console.log(fullName2);

const fullName3 = first + " " + last;
console.log(fullName3);

const fullName4 = first.concat(" ", last);
console.log(fullName4);

// includes method
console.log(fullName.includes("a"));
console.log(fullName.includes("l"));
