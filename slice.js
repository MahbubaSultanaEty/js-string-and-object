const address = "Chandpur";
const part = address.slice(2, 5);
console.log(part);
console.log(part.split());


const sentence = "I am a lazy but passionate person";
console.log(sentence.split(" "));
console.log(sentence.split("but"));


const frndstr = "lima, shuma, rupa, rima";
console.log(frndstr);

const frndarr = frndstr.split(",");
console.log(frndarr);

const realFrndArr = ["riya", "ayesha", "tanzina"];
// const realFrndStr = realFrndArr.join(" ");
// const realFrndStr2 = realFrndArr.join("");
console.log(realFrndArr.join());
console.log(realFrndArr.join(" "));
console.log(realFrndArr.join("|"));
