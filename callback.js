// Ex7

// let name = ["Rawan", "Jafar", "Hind", "Muhammad", "Esraa", "Dareen"];
// name.forEach((names) => {
//   console.log(names);
// });

// ---------------------------------------------
// for Ex8,9,10

// let newSeries = [
//   {
//     id: 70111470,
//     title: "Die Hard",
//     boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 654356453,
//     title: "Bad Boys",
//     boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
//   {
//     id: 65432445,
//     title: "The Chamber",
//     boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [4.0],
//     bookmark: [],
//   },
//   {
//     id: 675465,
//     title: "Fracture",
//     boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
//     uri: "http://api.netflix.com/catalog/titles/movies/70111470",
//     rating: [5.0],
//     bookmark: [{ id: 432534, time: 65876586 }],
//   },
// ];

// Ex8
// let array = [];
// newSeries.forEach((no) => {
//   array.push({
//     id: no.id,
//     title: no.title,
//   });
// });
// console.log(array);
// --------------------------------------------------------
// Ex9

// let array2 = newSeries.map(function (n) {
//   return {
//     id: n.id,
//     title: n.title,
//   };
// });
// console.log(array2);
// -----------------------------------------------------------
// Ex10
// let array3 = newSeries.filter(function (b) {
//   if (b.rating < 5) {
//     return {
//       newSeries,
//     };
//   }
// });
// console.log(array3);

// -------------------------------------------------------------

// Ex11

// let array = ["Java", "JavaScript", "Python", "C++", "PHP"];
// let array2 = array.reduce(function (acc, current) {
//   if (acc.length < current.length) {
//     return current;
//   } else {
//     return acc;
//   }
//   // or return acc.length < current.length ? current : acc;
// });
// console.log(array2);

// ------------------------------------------------------------------

// Ex12

// let pokemonData = [
//   {
//     game_index: 76,
//     version: {
//       name: "red",
//       url: "https://pokeapi.co/api/v2/version/1/",
//     },
//   },
//   {
//     game_index: 76,
//     version: {
//       name: "blue",
//       url: "https://pokeapi.co/api/v2/version/2/",
//     },
//   },
//   {
//     game_index: 76,
//     version: {
//       name: "yellow",
//       url: "https://pokeapi.co/api/v2/version/3/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "gold",
//       url: "https://pokeapi.co/api/v2/version/4/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "silver",
//       url: "https://pokeapi.co/api/v2/version/5/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "crystal",
//       url: "https://pokeapi.co/api/v2/version/6/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "ruby",
//       url: "https://pokeapi.co/api/v2/version/7/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "sapphire",
//       url: "https://pokeapi.co/api/v2/version/8/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "emerald",
//       url: "https://pokeapi.co/api/v2/version/9/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "firered",
//       url: "https://pokeapi.co/api/v2/version/10/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "leafgreen",
//       url: "https://pokeapi.co/api/v2/version/11/",
//     },
//   },
//   {
//     game_index: 132,
//     version: {
//       name: "diamond",
//       url: "https://pokeapi.co/api/v2/version/12/",
//     },
//   },
// ];

// let Name = [];
// Name = pokemonData.reduce(function (n, current) {
//   let names = current.version.name;
//   Name.push(names);
//   return Name;
// }, []);
// console.log(Name);

// ----------------------------------------------------------------------------------

// Ex13: What is the output of the following JS code segments? and Why?

// a) var employee = {
//     firstName: 'Rawan',
//     sayHi: function(){
//         console.log("Hi Coach ! " + this.firstName);
//     }
// }

// employee.sayHi() // Hi Coach ! Rawan //because this relate to variables inside employee

// b) var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true
//     },
//     printInfo: function(){
//         console.log("Car owner? " + this.hasCar);
//     }
// }

// employee.printInfo() // Car owner? undefined //because this here relate to main variables inside employee not inside info,
// you should write this.info.hasCar to define that she has a car or not

// c) var employee = {
//     firstName: 'Rawan',
//     info: {
//         hasCar: true,
//         hasPet: true,
//         printAddress: function(){
//             return this.data.address;
//         },
//         data: {
//             address: "Zarqa"
//         }
//     },
// }

// employee.info.printAddress() // Nothing will show because there aren't console.log, but if there is console.log
// it will show Zarqa, because this relate to address inside data
