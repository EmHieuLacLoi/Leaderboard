// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

// const firstP = document.querySelector('p')
// console.log(firstP.textContent)

// const firstPG = document.querySelector('#first-paragraph')
// const secondPG = document.querySelector('#second-paragraph')
// const thirdPG = document.querySelector('#third-paragraph')
// const fourthPG = document.querySelector('#fourth-paragraph')
// console.log(firstPG, secondPG, thirdPG, fourthPG)

// const allP = document.querySelectorAll('p')
// console.log(allP)

// const l = allP.length
// for (let i = 0; i < l; i++) {
//     console.log(allP[i].textContent)
// }
// allP[3].textContent = 'Fourth Paragraph'
// console.log(allP[3].textContent)

// allP[0].setAttribute('id', 'PG-1')
// allP[0].className = 'Paragraph-1'
// allP[1].classList.add('class', 'PG-2')
// allP[1].className = 'Paragraph-2'
// console.log(allP)

// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

// allP[0].style.color = 'red'
// allP[1].style.backgroundColor = 'blue'
// allP[2].style.border = 'solid'
// allP[3].style.fontSize = '20px'
// allP[1].style.fontFamily = 'Arial'

// for (let i = 0; i < l; i++) {
//     if (i % 2 == 0) {
//         allP[i].style.color = 'red'
//     }
//     else {
//         allP[i].style.color = 'green'
//     }
// }

// for (let i = 0; i < l; i++) {
//     allP[i].textContent = `Paragraph ${i}!`
//     allP[i].setAttribute('id', `P-${i}`)
//     allP[i].className = `Para-${i}`
// }
// console.log(allP)

// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

const body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const wrapper = document.querySelector(".wrapper");
wrapper.style.textAlign = "center";

const list = document.querySelectorAll("li");
list.forEach((l) => {
  l.style.listStyleType = "none";
  l.style.margin = "5px";
  l.style.padding = "20px";
  l.style.textAlign = "left";
  l.style.backgroundColor = "#ff00009c";
});
list[0].style.backgroundColor = "#008000a8";
list[1].style.backgroundColor = "#ffc800";

const ul = document.querySelector("ul");
ul.style.padding = "0";

const textOfYear = document.querySelector("#year");
textOfYear.style.fontSize = "60px";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colorIndex = 0;
setInterval(() => {
  textOfYear.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

const addTitle = document.querySelector("h2");
const str = addTitle.textContent;

const Lightcolors = [
    "#FFCCCC", // Light Red
    "#FFEBCC", // Light Orange
    "#FFFFCC", // Light Yellow
    "#CCFFCC", // Light Green
    "#CCDDFF", // Light Blue
    "#E0CCFF", // Light Indigo
    "#F2CCFF"  // Light Violet
];

function updateTime() {
  const time = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[time.getMonth()];
  const day = time.getDate();
  const year = time.getFullYear();
  const hour = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");
  const second = time.getSeconds().toString().padStart(2, "0");
  const DateAndTime = `<h5> ${month} ${day}, ${year} ${hour}:${minute}:${second}</h5>`;
  addTitle.innerHTML = str + "\n" + DateAndTime;
  const h3 = document.querySelector("h5");
  h3.style.margin = "20px 25%";
  h3.style.padding = "5px 10px";
  h3.style.backgroundColor = Lightcolors[colorIndex];
  colorIndex = (colorIndex + 1) % Lightcolors.length;
}

setInterval(updateTime, 1000);
