// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

/*
    forEach(callback(currentValue)): calls a function for each element in an array, no return
    
    map(callback(currentValue)): iterate and modify arr with condition, does not change the original array, use to create new arr

    filter(callback(currentValue)): creates a new array filled with elements that pass a test provided by a function, does not change the original array

    reduce(callback(total, currentValue, optional(currentIndex, arr)), initialValue): executes a reducer function for array element, 
    returns a single value: the function's accumulated result, 
    does not change the original array

    callback(): a function which is a argument of another function
*/

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

numbers.forEach((country) => {
  // console.log(country.name)
  // console.log(country)
  // console.log(country.name)
});

const newCoutries = countries.map(function (country) {
  return country.name.toUpperCase();
});
// console.log(newCoutries)

const newNum = numbers.map((num) => num * num);
const newNames = names.map((n) => n.toUpperCase());
const newProduct = products.map(function (product) {
  if (!Number(product.price)) return 0;
  return Number(product.price);
});
// console.log(newProduct)

const land = countries.filter(function (country) {
  if (country.name.includes("land")) return country.name;
});
const sixCharacters = countries.filter((country) => country.name.length >= 6);
const e = countries.filter((country) => country.name.startsWith("E"));
const priceWithValue = products.filter(function (product) {
  if (Number(product.price)) return product;
});
// console.log(priceWithValue)

function getStringLists(arr) {
  const newArr = arr.filter((element) => typeof element == "string");
  return newArr;
}
// console.log(getStringLists(names))

const sum = numbers.reduce(function (a, b) {
  return a + b;
}, 0);
// console.log(sum)

let sentence = countries.reduce(function (string, country) {
  return (string += country.name + ", ");
}, "");
sentence = sentence.substring(0, sentence.length - 2);
let index = sentence.lastIndexOf(" ");
let sen1 = sentence.substring(0, index - 1);
let sen2 = sentence.substring(index + 1, sentence.length);
sentence = sentence.concat(
  sen1,
  " and ",
  sen2,
  " are north European countries."
);
// console.log(sentence)

// some() return true if some elements true
// every() return true if all elements true
const nameLength = names.some((l) => l.length > 7);
const containLand = countries.every((country) => country.name.includes("land"));
console.log(nameLength, containLand);

// find() return The first element that satisfies the provided testing function. return undefined if not found
// findIndex() return the index of first element that satisfies the provided testing function. return -1 if not found
const firstCoutry = countries.find((country) => country.name.length == 6);
const indexOfFirstCountry = countries.findIndex(
  (country) => country.name.length == 6
);
console.log(firstCoutry, indexOfFirstCountry);

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

const sumOfProduct = products.reduce(function (sum, product) {
  return (sum += Number(product.price));
}, 0);
// console.log(sumOfProduct)

function categorizeCountries(arr, pattern) {
  const find = arr.filter((a) => a.name.includes(pattern));
  return find;
}
// console.log(categorizeCountries(countries, 'stan'))

function createObj() {
  let obj = {};
  countries.forEach(function (country) {
    let letter = country.name[0];
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  });
  return obj;
}
function timeUse() {
  const obj = createObj();
  let final = [];
  Object.entries(obj).forEach(function (arr) {
    let obj = {};
    obj[arr[0]] = arr[1];
    final.push(obj);
  });
  return final;
}
console.log(timeUse());

function getFirstTenCountries() {
  const result = countries.reduce(function (
    accumulated,
    currentValue,
    currentIndex
  ) {
    if (currentIndex < 10) {
      accumulated.push(currentValue.name);
    }
    return accumulated;
  },
  []);

  // countries.forEach(function(country, num = 0) {
  //   if (num < 10) {
  //     result.push(country.name)
  //     num++
  //   }
  // })
  return result;
}
console.log(getFirstTenCountries());

function findMax(obj) {
  let max = 0;
  for (const char of obj) {
    if (max <= Object.values(char)[0]) {
      max = Object.values(char)[0];
    }
  }
  return max;
}
const letter = timeUse();
console.log(findMax(letter));

const sortByCapital = countries;
sortByCapital.sort(function (a, b) {
  if (a.population < b.population) return 1;
  if (a.population > b.population) return -1;
  return 0;
});
console.log(sortByCapital);

function mostSpokenLanguages(data, number) {
  const language = data.map((country) => country.languages);
  const objLanguage = {};
  language.forEach(function (smallArrLanguage) {
    for (const l of smallArrLanguage) {
      if (objLanguage[l]) {
        objLanguage[l]++;
      } else {
        objLanguage[l] = 1;
      }
    }
  });
  const arrLanguage = Object.entries(objLanguage);
  const tempo = arrLanguage;
  tempo.sort(function (a, b) {
    if (a[1] < b[1]) return 1;
    if (a[1] > b[1]) return -1;
    return 0;
  });
  const final = [];
  tempo.forEach(function (arr, num = 0) {
    if (num < number) {
      num++;
      let obj = {};
      obj["country"] = arr[0];
      obj["count"] = arr[1];
      final.push(obj);
    }
  });
  return final;
}
console.log(mostSpokenLanguages(countries, 3));

function mostPopulatedCountries(data, number) {
  const populated = data.map((country) => [country.name, country.population]);
  const final = [];
  populated.forEach(function (arr, num = 0) {
    if (num < number) {
      num++;
      let obj = {};
      obj["country"] = arr[0];
      obj["population"] = arr[1];
      final.push(obj);
    }
  });
  return final;
}
console.log(mostPopulatedCountries(sortByCapital, 3));

const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const desAges = ages;
desAges.sort(function (a, b) {
  if (a < b) return 1;
  if (a > b) return -1;
  return 0;
});

const statistics = {
  count: function () {
    return ages.length;
  },

  sum: function () {
    return ages.reduce(
      (accumulated, currentValue) => accumulated + currentValue,
      0
    );
  },

  min: function () {
    return desAges[ages.length-1];
  },

  max: function () {
    return desAges[0];
  },

  range: function () {},

  mean: function () {},

  median: function () {},

  mode: function () {},

  var: function () {},

  std: function () {},

  freqDist: function () {},
};

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
