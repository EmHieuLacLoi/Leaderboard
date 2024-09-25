// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const obj = {
  firstName: "Vo",
  lastName: "Hieu",
  age: 21,
  country: "VietNam",
  city: "HaNoi",
};
const objJSON = JSON.stringify(obj, undefined, 4);
localStorage.setItem("Profile", objJSON);
console.log(localStorage.getItem("Profile"));

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

const student = {
  firstName: "Vo",
  lastName: "Hieu",
  age: 21,
  country: "VietNam",
  city: "HaNoi",
  skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
};
const studentObj = JSON.stringify(student, undefined, 4);
localStorage.clear();
localStorage.setItem("Student", studentObj);

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

const personAccount = {
  firstName: "Vo",
  lastName: "Hieu",
  incomes: 0,
  expensesProperties: 0,
  totalIncome: function () {
    return this.incomes;
  },
  totalExpense: function () {
    return this.expensesProperties;
  },
  accountInfo: function () {
    return (
      this.firstName +
      " " +
      this.lastName +
      ": " +
      this.incomes +
      ", " +
      this.expensesProperties
    );
  },
  addIncome: function () {
    let newIncome = +prompt("Add new income:");
    return (this.incomes += newIncome);
  },
  addExpense: function () {
    let newExpense = +prompt("Add new expense:");
    return (this.expensesProperties += newExpense);
  },
  accountBalance: function () {
    return "Hello!";
  },
};
const personAccountObj = JSON.stringify(
  personAccount,
  [
    "firstName",
    "lastName",
    "incomes",
    "expensesProperties",
    personAccount.addExpense(),
    personAccount.accountBalance(),
  ],
  4
);
localStorage.setItem("Person Account", personAccountObj);
