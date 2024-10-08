// ------------------Level 3-----------------------
console.log("------------------Level 3-----------------------");

// CSS body
const body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "stretch";
body.style.flexDirection = "column";

//====================Title==========================
// Select and CSS title
const wrapper = document.querySelector(".wrapper");
const title = document.createElement("h1");
title.style.textAlign = "center";
title.textContent = asabenehChallenges2020.description + ` in `;

// Create and CSS time of the title
const span = document.createElement("span");
span.textContent = `${asabenehChallenges2020.challengeYear}`;
span.style.fontSize = "80px";
const colors = [
  "#ff0000b0",
  "orange",
  "#ffcd009c",
  "#008000b8",
  "#0000ff9e",
  "#00ffec9e",
  "violet",
];
let colorIndex = 0;
setInterval(() => {
  span.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

title.appendChild(span);
wrapper.appendChild(title);

// Create and CSS challenge subtitle
const challenge = document.createElement("h2");
challenge.textContent = asabenehChallenges2020.challengeSubtitle;
challenge.style.textDecoration = "underline";
challenge.style.textAlign = "center";
challenge.style.fontWeight = "normal";
wrapper.appendChild(challenge);

// Create and CSS realtime
const h4 = document.createElement("h3");

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
  const DateAndTime = `${month} ${day}, ${year} ${hour}:${minute}:${second}`;
  h4.textContent = DateAndTime;
  h4.style.margin = "auto auto 10px auto";
  h4.style.padding = "7px 10px";
  h4.style.width = "25%";
  h4.style.textAlign = "center";
  h4.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  wrapper.appendChild(h4);
}
setInterval(updateTime, 1000);

// ======================List of courses===============================
//Create and CSS Header of courses
const listOfCourses = document.createElement("div");
listOfCourses.className = "List-Of-Courses";
body.appendChild(listOfCourses);

// Get the list of 30 day challenges
const listOf30 = asabenehChallenges2020.challenges;

// Create div class name courses contain course
const courses = document.createElement("div");
courses.className = "courses";
listOfCourses.appendChild(courses);

// Create course and append to courses
for (let i = 0; i < listOf30.length; i++) {
  let course = document.createElement("p");
  course.style.display = "flex";
  course.style.justifyContent = "space-between";
  course.style.fontSize = "20px";
  course.style.margin = "10px auto 0 auto";
  course.style.width = "60%";
  course.style.padding = "30px 30px";
  course.style.backgroundColor = "#ff0000ad";
  course.className = `p-${i}`;

  //   Create and CSS name of course
  let courseSpan = document.createElement("span");
  courseSpan.textContent = listOf30[i].name;
  courseSpan.style.textDecoration = "underline";
  course.appendChild(courseSpan);

  //   Create a span contain list of topics
  let span = document.createElement("span");
  course.appendChild(span);

  //   Create and CSS topics
  let topics = document.createElement("ul");
  topics.style.margin = "0 0";
  topics.style.padding = "0 40px";
  span.appendChild(topics);

  //   Get array of topics
  let arrOfLanguages = listOf30[i].topics;
  let count = 0;

  // Create and CSS a topic
  arrOfLanguages.forEach((language) => {
    let li = document.createElement("li");
    li.className = `skill-${i}`;
    li.textContent = language;
    li.style.userSelect = "none";
    li.style.listStyleType = "none";
    li.style.cursor = "pointer";
    li.style.fontWeight = "bold";
    if (count !== 0) {
      li.style.display = "none";
    }
    count++;
    topics.appendChild(li);
  });

  //   Create an event open and close list of topics
  topics.addEventListener("click", function () {
    li = document.querySelectorAll(`.skill-${i}`);
    if (li[1].style.display === "block") {
      for (let i = 1; i < li.length; i++) {
        li[i].style.display = "none";
      }
    } else {
      for (let i = 1; i < li.length; i++) {
        li[i].style.display = "block";
      }
    }
  });

  //   Create and CSS span status of challenge
  const status = document.createElement("span");
  status.textContent = listOf30[i].status;
  course.appendChild(status);

  //   Change color according to status
  if (listOf30[i].status == "Done") {
    course.style.backgroundColor = "#008000b0";
  }

  if (listOf30[i].status == "Ongoing") {
    course.style.backgroundColor = "#ffff00a3";
  }
  courses.appendChild(course);
}

// =====================Author========================
// Create a div author
const author = document.createElement("div");
author.className = "Author";
author.style.display = "flex";
author.style.flexDirection = "column";
author.style.justifyContent = "center";
author.style.textAlign = "center";
body.appendChild(author);

// Create and CSS fullname
const fullName = document.createElement("h3");
fullName.textContent =
  asabenehChallenges2020.author.firstName +
  " " +
  asabenehChallenges2020.author.lastName;
fullName.style.fontSize = "40px";
fullName.style.margin = "20px auto 5px auto";
author.appendChild(fullName);

// Create and CSS social links
const ulLink = document.createElement("ul");
ulLink.style.marginTop = "5px";
ulLink.style.padding = "0";
const listOfLinks = asabenehChallenges2020.author.socialLinks;
listOfLinks.forEach((link) => {
  let li = document.createElement("li");
  li.style.listStyleType = "none";
  li.style.display = "inline";
  li.style.fontSize = "30px";
  li.style.padding = "5px";
  let a = document.createElement("a");
  a.href = link.url;
  a.innerHTML = link.fontawesomeIcon;
  a.style.fontSize = "50px";
  a.style.color = "black";
  li.appendChild(a);
  ulLink.appendChild(li);
});
author.appendChild(ulLink);

// Create and CSS bio
const bio = document.createElement("p");
bio.textContent = asabenehChallenges2020.author.bio;
bio.style.fontSize = "20px";
bio.style.margin = "40px auto";
bio.style.width = "65%";
author.appendChild(bio);

// Create and CSS titles, skills, qualifications
const divInfo = document.createElement("div");
divInfo.className = "title-skills-qualifications";
divInfo.style.width = "60%";
divInfo.style.margin = "auto auto 20px auto";
author.appendChild(divInfo);

// titles
const titles = document.createElement("div");
titles.className = "titles";
titles.style.textAlign = "left";
titles.style.display = "inline-block";
titles.style.width = "33%";
titles.style.verticalAlign = "top";

let info = document.createElement("h4");
info.textContent = Object.keys(asabenehChallenges2020.author)[2].toUpperCase();
titles.appendChild(info);
divInfo.appendChild(titles);

const listOfTitles = asabenehChallenges2020.author.titles;
listOfTitles.forEach((title) => {
  let t = document.createElement("p");
  t.textContent = title[0] + " " + title[1];
  titles.appendChild(t);
});

// skills
const skills = document.createElement("div");
skills.className = "skills";
skills.style.textAlign = "left";
skills.style.display = "inline-block";
skills.style.width = "33%";
skills.style.verticalAlign = "top";

info = document.createElement("h4");
info.textContent = Object.keys(asabenehChallenges2020.author)[5].toUpperCase();
skills.appendChild(info);
divInfo.appendChild(skills);

let icon = '<i class="fa-solid fa-check"></i>';
const listOfSkills = asabenehChallenges2020.author.skills;
listOfSkills.forEach((skill) => {
  let t = document.createElement("p");
  t.innerHTML = icon + " " + skill;
  skills.appendChild(t);
});

// Qualifications
const qualifications = document.createElement("div");
qualifications.className = "qualifications";
qualifications.style.textAlign = "left";
qualifications.style.display = "inline-block";
qualifications.style.width = "34%";
qualifications.style.verticalAlign = "top";

info = document.createElement("h4");
info.textContent = Object.keys(asabenehChallenges2020.author)[3].toUpperCase();
qualifications.appendChild(info);
divInfo.appendChild(qualifications);

icon = '<i class="fa-solid fa-check"></i>';
const listOfQualifications = asabenehChallenges2020.author.qualifications;
listOfQualifications.forEach((skill) => {
  let t = document.createElement("p");
  t.innerHTML = icon + " " + skill;
  qualifications.appendChild(t);
});

// Keywords
const keywords = document.createElement("div");
keywords.className = "keywords";
keywords.style.width = "65%";
keywords.style.margin = "auto";
author.appendChild(keywords);

// Title keywords
const titleKeyWords = document.createElement("h3");
titleKeyWords.textContent = Object.keys(
  asabenehChallenges2020
)[4].toUpperCase();
titleKeyWords.style.textAlign = "left";
keywords.appendChild(titleKeyWords);

// List of keywords
tr = document.createElement("tr");
const containKeyWords = document.createElement("table");
containKeyWords.style.display = 'inline-table'
containKeyWords.style.borderSpacing = '15px'
containKeyWords.appendChild(tr);
keywords.appendChild(containKeyWords);

let i = 0;
const listOfKeyWords = asabenehChallenges2020.keywords;
listOfKeyWords.forEach((keyword) => {
  // Create li element
  let li = document.createElement("td");
  let a = document.createElement('a')
  li.appendChild(a)
  a.href = '#'
  a.style.textDecoration = 'none'
  a.style.color = 'black'
  a.textContent = '#' + keyword;
  a.style.fontStyle = 'italic'
  li.style.padding = "10px 10px";
  li.style.fontWeight = 'bold'
  li.style.borderRadius = '20px'
  li.style.backgroundColor = colors[i];
  tr.appendChild(li);
  // Endl when full color
  if (i == colors.length - 1) {
    tr = document.createElement("tr");
    containKeyWords.appendChild(tr);
    i = 0;
  } else i++;
});

