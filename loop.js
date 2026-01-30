const mobile = {
    brand: "moto",
    price: 35000,
    color: "seaGreen",
    isFast: true
}

for (const prop in mobile) {
    console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
    console.log(key, ":", mobile[key]);
}