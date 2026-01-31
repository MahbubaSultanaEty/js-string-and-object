const mobile = {
    brand: "moto",
    price: 35000,
    color: "seaGreen",
    isFast: true
}

for (const prop in mobile) {
    console.log(prop);
}
// const keys = Object.keys(mobile);
// console.log(keys);

// for (const key of keys) {
//     console.log(key, ":", mobile[key]);
// }


const phone = {
    brand: "samsung",
    price: 25000,
    color: "blue" ,
    camera: "12mp"
}

for (const key in phone) {
    console.log(key)
}

const mobile2 = {
    brand: "oppo",
    price: 12000,
    color: "green",
    camera : "16mp"
}

for (const prop in mobile2) {
    console.log(prop, ":", mobile2[prop])
}


const phone2 = {
    brand: "apple",
    price: 100000,
    camera: "36mp",
    model: "11"
}

for (const prop in phone2){
    // console.log(prop);
    console.log(prop, ":", phone2[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);
for (let key of keys) {
    console.log(key);
}

const keys2 = Object.keys(phone);
console.log(keys2);
for (let key of keys2) {
    // console.log(key);
    console.log(key, ":", phone[key]);
}

const prop2 = Object.keys(phone2);
console.log(prop2)
for (let prop of prop2) {
    // console.log(prop);
    console.log(prop, ":", phone2[prop])
}

const values = Object.values(mobile);
console.log(values);
for (const value of values) {
    console.log(value);
}