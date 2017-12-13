// const person = {
//   age: 26,
//   location: {
//     city: "San Francisco",
//     temp: 92
//   }
// };
//
// const { name = "Ben", age } = person;
// console.log(`${name} is ${age}`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };
//
// const { name: publisherName = "Self Published" } = book.publisher;
// console.log(publisherName);

//
// Array destructuring
// //
//
// const address = ["399 Fremont St", "San Francisco", "CA", "94105"];
//
// const [street, city, state, zip] = address;
//
// console.log(`You are in ${city} ${state}`);
//
// const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
//
// // const [coffeeType,, mediumPrice] = item;
// console.log(`A medium ${coffeeType} costs ${mediumPrice} `);
