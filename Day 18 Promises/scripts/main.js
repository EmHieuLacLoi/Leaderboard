// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchCountriesData = async () => {
  try {
    const countriesData = await fetch(countriesAPI);
    const countries = await countriesData.json();
    return countries;
  } catch (e) {
    return e;
  }
};

const fetchCatsData = async () => {
  try {
    const catsData = await fetch(catsAPI);
    const cats = await catsData.json();
    return cats;
  } catch (e) {
    return e;
  }
};

// fetchCountriesData().then((result) => {
//   result.forEach((obj) => {
//     const arrLan = obj.languages.map((o) => o.name)
//     console.log(
//       `Name: ${obj.name} \nCapital: ${obj.capital} \nLanguages: ${arrLan} \npopulation: ${obj.population} \narea: ${obj.area}`
//     );
//   });
// });

// const catNames = []
// fetchCatsData().then(result => {
//     result.forEach((obj) => {
//         catNames.push(obj.name)
//     })
// })
// .catch(error => console.log(error))
// console.log(catNames)

// const metrics = []
// fetchCatsData().then(result => {
//     result.forEach((obj) => {
//         const o = {}
//         o['name'] = obj.name
//         let str = obj.weight['metric']
//         let pattern = /\d+/g
//         const arrDigit = str.match(pattern)
//         let sum = 0
//         arrDigit.forEach((n) => sum += +n)
//         o['average'] = sum / arrDigit.length
//         o['metric'] = obj.weight['metric']
//         metrics.push(o)
//     })
// })
// console.log(metrics)

// fetchCountriesData().then((result) => {
//     result.sort(function (a, b) {
//         if (a.area < b.area) return 1
//         if (a.area > b.area) return -1
//         return 0
//     })
//     const topTen =  result.slice(0, 10)
//     console.log(topTen)
// });

fetchCountriesData().then((result) => console.log(result));

const arrLanguages = [];
fetchCountriesData().then((result) => {
  result.forEach((obj) => {
    const arrLan = obj.languages.map((o) => o.name);
    arrLanguages.push(arrLan);
  });
  const flattenedArr = [].concat(...arrLanguages);
  const setOfArr = new Set(flattenedArr);
  console.log(setOfArr.size);
});
