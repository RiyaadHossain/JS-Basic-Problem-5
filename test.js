// let result = "";
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`FizzBazz`);
//   } else if (i % 3 === 0) {
//     console.log(`Fizz`);
//   } else if (i % 5 === 0) {
//     console.log(`Bazz`);
//   } else {
//     console.log(i);
//   }
// }

let allProducts = [
  { name: "Phone", price: 4500, quantity: 2 },
  { name: "T-shirt", price: 500, quantity: 5 },
  { name: "Laptop", price: 55000, quantity: 1 },
  { name: "Tools", price: 25, quantity: 8 },
];

function totalPrice(products) {
  let total = 0;
  for (const x of products) {
    // total += x.price * x.quantity;
    let eachTotal = x.price * x.quantity;
    total += eachTotal;
  }
  return total;
}

console.log(totalPrice(allProducts));
