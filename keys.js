const computer = {
    brand: "dell",
    price: 75000,
    processor: "intel",
    hdd: 1.03,
    monitor: "acer",
}
const keys = Object.keys(computer);
console.log(keys);

const mobile = {
    brand: "moto",
    price: 35000,
    color: "seaGreen",
    isFast: true
}
let props = Object.keys(mobile);
console.log(props);
console.log(props.join(" "));