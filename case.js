const school = "RAJ  UK Uttara Model School";
console.log(school);

const subject = "Geography";
const book = "geography";
 
if (subject === book) {
    console.log('dhumai porashuna korbo ebar')
}
else {
    console.log('hudai chapa marlam');
}

//here teh subject and book variable isn't equal or same beacause of the case secsitivity of JavaString .You can use  toUpperCase or toLowerCase to make them equal

const subject2 = subject.toUpperCase();
const book2 = book.toUpperCase();
 
if (subject2 === book2) {
    console.log("I like solving Math Problems");
} else { 
    console.log('abaro chapa marlam guys')
}

// direct use 
if (subject.toLowerCase() === book.toLowerCase()) {
    console.log('I like learning English ')
} else {
    console.log('I want to learn Sapnish too');
}

// trim
const drink = "water ";
const liquid = " water "

if (drink === liquid) {
    console.log("Something is better than nothing");
} else {
    console.log('dushto gorur cheye shunno gowal valo');
}

// white space er upor thaka ba na thaka ebong kom beshi thakar karoneo string equal na hote pare. Ekhetre trim bebohar kore trim bebohar koreo equal banano jay

const liquid2 = liquid.trim();
const drink2 = drink.trim();

console.log(liquid2);

if (drink2 === liquid2) {
    console.log("Be Smart ");
} else {
    console.log('Be a Bhebla Kanto');
}
// direct use 
if (drink.trim === liquid.trim) {
    console.log("ami parina r parina");
} else {
    console.log('ami keno morina...');
}