// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

const body = document.body;
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.flexDirection = "column";
body.style.alignItems = "center";

const p = document.createElement("p");
p.className = "text";
p.style.fontSize = "40px";
p.style.fontWeight = "bold";
p.textContent = "Press any keyboard!";
p.style.padding = "5px 5px";
p.style.border = "5px solid rgba(255, 255, 255, 0.5)";
p.style.backdropFilter = "blur(5px)";
p.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
p.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.46)";
body.appendChild(p);

const keylog = document.createElement("p");
keylog.className = "number";
keylog.style.fontSize = "50px";
keylog.style.margin = "0";
keylog.style.color = "green";
keylog.style.fontWeight = "bold";

body.appendChild(keylog);

body.addEventListener("keypress", (e) => {
  p.innerHTML = `You pressed <span style="color: green; font-size: 45px; font-weight: bold">${e.key}</span>`;
  keylog.style.padding = "5px 5px";
  keylog.style.border = "5px solid rgba(255, 255, 255, 0.5)";
  keylog.style.backdropFilter = "blur(5px)";
  keylog.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
  keylog.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.46)";
  keylog.textContent = e.keyCode;
});
