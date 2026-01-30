let arr = [1, 2, 3, 4];
arr.reverse();

const number = [2, 4, 6, 8];
number.reverse();
console.log(number);

const sentence = "I am studying political science";
// // const reverse = sentence.reverse();
// console.log(reverse); [ this will throw an error or give the value as undeifined]

let reverse = " ";
for (const letter of sentence) {
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);


let rev = " "
for (let i = 1; i < sentence.length; i++){
    console.log(i);
    console.log(sentence[i]);
    const letter = sentence[i];
    rev = letter + rev;
}
console.log(rev);

// shortcut 
const reversed = sentence.split(" ").reverse().join(" ");
console.log(reversed);

// So the proccess is basically to reverse a string a string we hav eto convert the string into an array using "split" , then reverese the converted array using "reverse" method , then again converting the array into a stsring using "join" method.