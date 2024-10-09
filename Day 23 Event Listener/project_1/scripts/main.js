// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.textAlign = "center";
body.style.justifyContent = "center";

const h1 = document.querySelector("h1");
h1.style.color = "green";
h1.style.fontSize = "50px";
h1.style.marginBottom = "10px";

const h2 = document.querySelector("h2");
h2.style.fontSize = "25px";
h2.style.marginBottom = "10px";

const wrapper = document.querySelector(".wrapper");
wrapper.style.width = "80%";
wrapper.style.margin = "auto";
wrapper.style.display = "flex";
wrapper.style.flexDirection = "column";
wrapper.style.alignItems = "center";

const getValue = document.createElement("div");
getValue.className = "get-value";
getValue.style.width = "70%";
getValue.style.margin = "0 auto 20px auto";
wrapper.appendChild(getValue);

const message = document.createElement("p");
message.className = "Error-Message";
message.style.margin = "0 0 0 3px";
message.style.float = "left";
message.style.width = "fit-content";
getValue.appendChild(message);

const input = document.createElement("input");
input.id = "value";
input.setAttribute("type", "number");
input.setAttribute("placeholder", "Type your number!");
input.style.padding = "10px 10px";
input.style.margin = "5px 20px 0 0";
input.style.border = "solid 2px green";
input.style.borderRadius = "5px";
input.style.width = "73%";
input.style.fontSize = "20px";
input.style.display = "inline";
getValue.appendChild(input);

const button = document.createElement("button");
button.className = "button";
button.setAttribute("type", "submit");
button.style.display = "inline";
button.style.fontSize = "20px";
button.textContent = "Generate numbers";
button.style.padding = "10px 5px";
button.style.margin = "5px 0px";
button.style.border = "solid #0080001a";
button.style.backgroundColor = "#008000ad";
button.style.color = "white";
button.style.width = "fit-content";
getValue.appendChild(button);

const numbers = document.createElement("div");
numbers.className = "numbers";
numbers.style.width = "80%";
numbers.style.display = "flex";
numbers.style.justifyContent = "center";
wrapper.appendChild(numbers);

let value = 50;
create(value);
button.addEventListener("click", () => {
  if (input.value == "") {
    message.textContent =
      "Enter number value on the input field to generate number!";
    message.style.color = "red";
  } else {
    message.textContent = "";
    console.log(input.value);
    value = input.value;
    if (document.querySelector("table")) {
      let oldTable = document.querySelector("table");
      numbers.removeChild(oldTable);
      create(value);
    }
  }
});

function create(value) {
  let tr;
  let table = document.createElement("table");
  table.className = "table";
  table.style.borderSpacing = "5px";
  numbers.appendChild(table);
  for (let i = 0; i <= value; i++) {
    if (i % 9 == 0) {
      tr = document.createElement("tr");
      table.appendChild(tr);
    }
    let td = document.createElement("td");
    td.textContent = i;
    td.style.color = "white";
    td.style.padding = "5px 15px";
    if (value <= 100) {
      td.style.fontSize = "60px";
    } else {
      td.style.fontSize = "250%";
    }
    const lightColors = [
      "#6c757d",
      "#495057",
      "#343a40",
      "#5a6268",
      "#0d6efd",
      "#198754",
      "#dc3545",
      "#fd7e14",
      "#ffc107",
      "#20c997",
    ];
    td.style.backgroundColor = lightColors[i % lightColors.length];
    tr.appendChild(td);
  }
}
