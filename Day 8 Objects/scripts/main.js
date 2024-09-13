// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const dog = {
  name: "ChiHuaHua",
  legs: 4,
  color: "black",
  age: 5,
  bark: function () {
    return "woof woof";
  },
};
console.log(dog.name, dog.legs, dog.color, dog.age, dog.bark());
dog["breed"] = "ChiHuaHua";
dog.getDogInfo = function () {
  return `${this.name}, ${this.legs}, ${this.color}, ${
    this.age
  }, ${this.bark()}, ${this.breed}`;
};
// console.log(dog.getDogInfo())

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

const data = Object.values(users);
const keys = Object.keys(users);

const manySkills = (data, keys) => {
  let number = keys.length;
  const result = [];
  for (let i = 0; i < number; i++) {
    if (data[i].skills.length >= 2) result.push(keys[i]);
  }
  return result;
};
// console.log(manySkills(data, keys))

const countLoggedIn = (data, keys) => {
  let number = keys.length;
  const result = [];
  for (let i = 0; i < number; i++) {
    if (data[i].isLoggedIn) result.push(keys[i]);
  }
  return result.length;
};
// console.log(countLoggedIn(data, keys))

const countPoints = (data, keys) => {
  let number = keys.length;
  const result = [];
  for (let i = 0; i < number; i++) {
    if (data[i].points >= 50) result.push(keys[i]);
  }
  return result;
};
// console.log(countPoints(data, keys))

function findMERN(data, keys) {
  let number = keys.length;
  const result = [];
  for (let i = 0; i < number; i++) {
    let m = data[i].skills.includes("MongoDB");
    let e = data[i].skills.includes("Express");
    let r = data[i].skills.includes("React");
    let n = data[i].skills.includes("Node");
    if (m && e && r && n) result.push(keys[i]);
  }
  return result;
}
// console.log(findMERN(data, keys))

const addUser = (userName, email, skills, age, isLoggedIn, points) => {
  users[userName] = {
    email: email,
    skills: skills,
    age: age,
    isLoggedIn: isLoggedIn,
    points: points,
  };
  data.push(users[userName]);
  keys.push(userName);
};
// addUser('Hieu', 'vohieu972003@gmail.com', ['HTML', 'CSS', 'JavaScript'], 21, true, 60)
// console.log(users)

const getAllKeys = [];
for (const key of data) {
  getAllKeys.push(Object.keys(key));
}

const getValues = [];
for (const key of data) {
  getValues.push(Object.values(key));
}
console.log(getAllKeys, getValues);

function printCountries() {
  const countriesCapital = [];
  const countriesPopulations = [];
  const countriesLanguages = [];
  const countriesName = [];
  for (const country of countries) {
    countriesName.push(country.name);
    countriesLanguages.push(country.languages);
    countriesPopulations.push(country.population);
    countriesCapital.push(country.capital);
  }
  console.log(`Country name: \n ${countriesName} 
        \n\nCountry capital: \n${countriesCapital} 
        \n\nCountry populations: \n${countriesPopulations} 
        \n\nCountry languages: \n${countriesLanguages}`);
}
// printCountries()

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

const personAccount = {
  firstName: "",
  lastName: "",
  incomes: new Set(), //{description, amount}
  expenses: new Set(),

  totalIncome() {
    let total = 0;
    for (const income of this.incomes) {
      total += income.amount;
    }
    return total;
  },

  totalExpense() {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  },

  accountInfo() {
    return `Name: ${this.firstName} ${this.lastName}\n
        Total Income: ${this.totalIncome()}\n
        Total Expenses: ${this.totalExpense()}`;
  },

  addIncome(income) {
    this.incomes.add(income);
  },

  addExpense(expense) {
    this.expenses.add(expense);
  },

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  },
};

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;
function randomUserId(num, countMax = 4, str = ":") {
  let id = "",
    count = 0;

  for (let i = 0; i <= num; i++) {
    if (count == countMax) {
      id += str;
      count = 0;
    } else {
      id += characters[Math.floor(Math.random() * charactersLength)];
      count++;
    }
  }
  return id;
}

function signUp(userName, email, password, createdAt) {
  const obj = {
    _id: randomUserId(6, 6, ""),
    username: userName,
    email: email,
    password: password,
    createdAt: createdAt,
    isLoggedIn: false,
  };
  users.push(obj);
}

function signIn(userName, password) {
  const nameOfUser = [];
  const passOfUser = [];
  for (const user of users) {
    nameOfUser.push(user.username);
    passOfUser.push(user.password);
  }
  let pos = nameOfUser.indexOf(userName);
  if (passOfUser[pos] == password) {
    return true;
  }
  return false;
}

function check(name) {
  for (const user of users) {
    if (user.username == name) {
      return false;
    }
  }
  return true;
}

function showDateTime() {
  let time = new Date();
  return `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`;
}

function sumOfRate() {
  const inforOfRate = [];
  const sumRate = [];
  const nameProducts = [];
  for (const product of products) {
    inforOfRate.push(product.ratings);
    nameProducts.push(product.name);
  }
  for (let i = 0; i < inforOfRate.length; i++) {
    if (inforOfRate[i].length > 0) {
      let sum = 0;
      for (let j = 0; j < inforOfRate[i].length; j++) {
        sum += inforOfRate[i][j].rate;
      }
      sumRate.push(sum);
    } else {
      sumRate.push(0);
    }
  }
  return sumRate;
}

function rateProduct() {
  const inforOfRate = [];
  const sumRate = sumOfRate();
  const nameProducts = [];
  for (const product of products) {
    inforOfRate.push(product.ratings);
    nameProducts.push(product.name);
  }
  const result = {};
  for (let i = 0; i < nameProducts.length; i++) {
    result[nameProducts[i]] = sumRate[i];
  }
  const sortResult = Object.fromEntries(
    Object.entries(result).sort((a, b) => a[1] - b[1])
  );
  return sortResult;
}

function averageRating() {
  const inforOfRate = [];
  const sumRate = sumOfRate();
  const nameProducts = [];
  for (const product of products) {
    inforOfRate.push(product.ratings);
    nameProducts.push(product.name);
  }
  for (let i = 0; i < inforOfRate.length; i++) {
    if (inforOfRate[i].length > 0) {
      sumRate[i] = sumRate[i] / inforOfRate[i].length;
    }
  }
  sumRate.sort();
  const newResult = Object.entries(rateProduct());
  for (let i = 0; i < sumRate.length; i++) {
    newResult[i][1] = sumRate[i];
  }
  Object.fromEntries(newResult);
  return newResult;
}

function likeProduct() {
  const IdOfUser = [];
  for (const user of users) {
    IdOfUser.push(user._id);
  }

  for (const product of products) {
    const likesOfRate = product.likes;
    if (likesOfRate.length > 0) {
      likesOfRate.splice(0, likesOfRate.length);
    } else {
      let idLike = Math.floor(Math.random() * IdOfUser.length);
      likesOfRate.push(IdOfUser[idLike]);
    }
    product.likes = likesOfRate;
  }
}

let signUpOrIn = confirm("OK to sign up and cancel to sign in");

if (signUpOrIn) {
  let userName = prompt("Can i get your name: ");
  userName = userName[0].toUpperCase() + userName.slice(1, userName.length);

  if (check(userName)) {
    email = prompt("Email: ");
    password = prompt("Password: ");
    createdAt = showDateTime();
    signUp(userName, email, password, createdAt);
    console.log(users);
  } else {
    console.log("You has already an account!");
  }
} else {
  let userName = prompt("Can i get your name: ").trim();
  let password = +prompt("Can i get your password: ");

  if (signIn(userName, password)) alert("You are signed in!");
  else alert("Your username or password wrong!");
}

console.log(rateProduct());
console.log(averageRating());
likeProduct();
console.log(products);
