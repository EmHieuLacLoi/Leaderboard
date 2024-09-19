// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries1 = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60,
};
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];
const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

const [fin, est, sw, den, nor] = countries1;
console.log(fin, est, sw, den, nor);

let { width: w, height: h, area: a, perimeter: p } = rectangle;
console.log(w, h, a, p);

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

const lessTwoSkills = [];
for (const { name, scores, skills, age } of users) {
  console.log(
    `Name: ${name}, Scores: ${scores}, Skills: ${skills}, Age: ${age}\n`
  );
  if (skills.length < 2)
    lessTwoSkills.push(
      `Name: ${name}, Scores: ${scores}, Skills: ${skills}, Age: ${age}`
    );
}
console.log(lessTwoSkills);

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

for (const { name, capital, population, languages } of countries) {
  // console.log(`Name: ${name}\n Capital: ${capital}\n Population: ${population}\n Languages: ${languages}`)
}

// const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
// let [nameStu, skills, scores] = student;
// let [HTMLScore, CSSScore, jsScore, reactScore] = scores;
// console.log(nameStu, skills, jsScore, reactScore);

function convertArrayToObject(arr) {
  const ArrOfObj = [];
  const obj = {};
  for (const [nameStu, skills, scores] of arr) {
    obj["name"] = nameStu;
    obj["skills"] = skills;
    obj["scores"] = scores;
    ArrOfObj.push(obj);
  }
  return ArrOfObj;
}
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];
console.log(convertArrayToObject(students));

const student = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent = JSON.parse(JSON.stringify(student))
let {name: nameStu, age, skills} = newStudent
let {frontEnd: fe, backEnd: be, dataBase: db, dataScience: ds} = skills
fe.push({ skill: "Bootstrap ", level: 8 })
be.push({ skill: "Express  ", level: 9 })
db.push({ skill: "SQL", level: 8 })
ds.push("SQL")
console.log(newStudent, student)