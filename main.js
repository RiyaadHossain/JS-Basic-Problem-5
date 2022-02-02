// 1. Write a Function which takes an Array as parameter and outputs unique value only or remove the duplicate value from the array.

function uniqueNumbers(numbers) {
  let uniqueArray = [];

  // ############# First Way #############

  for (let i = 0; i < numbers.length; i++) {
    if (uniqueArray.indexOf(numbers[i]) === -1) {
      uniqueArray.push(numbers[i]);
    }
  }

  // ############# Second Way ############# not working :(

  // for(const number of numbers){
  //     if(uniqueArray.indexOf(numbers[number]) === -1){
  //         uniqueArray.push(numbers[number]);
  //     }
  // }

  return uniqueArray;
}

// console.log(uniqueNumbers([34, 23, 2, 53, 92, 23, 3, 2, 53]));

// 2. Write a function that takes a String as parameter and reverse the input String.

function reverseString(string) {
  let reverse = "";
  for (const x of string) {
    reverse = x + reverse;
  }
  return reverse;
}

let aString = reverseString("Hello I am Riyad");
// console.log(aString);

// 3. Write code to print 1 to 50 numbers. Task: if any number divisible by 3, print 'fizz' and if divisible by 5, print 'bazz' as well
//    as if divisible by both 3 & 5, print 'fizzbazz'

function fizzBazz(aNumber) {
  let result = "";
  for (let i = 1; i <= aNumber; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBazz`);
    } else if (i % 3 === 0) {
      console.log(`Fizz`);
    } else if (i % 5 === 0) {
      console.log(`Bazz`);
    } else {
      console.log(i);
    }
  }
  return result;
}

// console.log(fizzBazz(50));

// 4. Write a function that takes an array of object as parameter and outputs the lowest Number of object in the Array.
//    Array of Object: [ {name: 'Riyad', age: 22}, {name: 'Sangram', age: 19}, {name: 'Shuvo', age: 27} ]

const allPersons = [
  { name: "Riyad", age: 22 },
  { name: "Sangram", age: 19 },
  { name: "Shuvo", age: 27 },
  { name: "Karim", age: 57 },
];

function oldPerson(people) {
  let oldOne = people[0];
  for (let x of people) {
    if (x.age > oldOne.age) {
      oldOne = x;
    }
  }
  return oldOne;
}

// console.log(oldPerson(allPersons));

// 5. Write a function that takes an Array of Object and gives us the total Number of the Array with set quantity. (Module - 22.8)

let allProducts = [
  { name: "Phone", price: 4500, quantity: 2 },
  { name: "T-shirt", price: 500, quantity: 5 },
  { name: "Laptop", price: 55000, quantity: 1 },
  { name: "Tools", price: 25, quantity: 8 },
];

function totalPrice(products) {
  let eachTotal = 0;
  for (const x of products) {
    eachTotal += x.price * x.quantity;
  }
  return eachTotal;
}

// console.log(totalPrice(allProducts));

// 6. Write the code as shown in Module No (22.9)

function animalCount(distance) {
  let animalFound = 0;
  let aniDense10 = 10;
  let aniDense20 = 30;
  let aniDense30 = 50;
  let restDense = 100;
  if (distance <= 10) {
    animalFound = distance * aniDense10;
  } else if (distance <= 20) {

    let animalFound10 = 10 * aniDense10;
    let rest = distance - 10;
    let animalFound20 = rest * aniDense20;
    animalFound = animalFound10 + animalFound20;
  } else if( distance <= 30){
    let animalFound10 = 10 * aniDense10; 
    let animalFound20 = 10 * aniDense20;
    let rest = distance - 20;
    let animalFoun30 = rest * aniDense30; 
    animalFound = animalFound10 + animalFound20 + animalFoun30;
  }else{
    let animalFound10 = 10 * aniDense10;
    let animalFound20 = 10 * aniDense20;
    let animalFound30 = 10 * aniDense30;
    let rest = distance - 30;
    let restAnimal = rest * restDense;
    animalFound = animalFound10 + animalFound20 + animalFound30 + restAnimal;
  }
  return animalFound;
}

// console.log(animalCount(23));

// 7. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।

function findTrainArea(height, width) {
  return `The Area of ${height} and ${width} is: ${(height * width) / 2}.`;
}

// console.log(findTrainArea(34, 23));

// 8. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

function isPrime(digit) {
  if (digit % 2 === 0) {
    return `${digit} Number is Prime.`;
  }
}

// console.log(isPrime(34));
