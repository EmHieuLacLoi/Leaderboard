const h2 = document.querySelector("h2");
h2.textContent += " " + countries.length;

const h3 = document.querySelector("h3");
const input = document.getElementById("search");

let matchWith;
let firstMatchWith;
let check = false;

for (let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toLowerCase()
}

input.addEventListener("keyup", () => {
  matchWith = countries.filter((country) => country.includes(input.value.toLowerCase()));

  firstMatchWith = countries.filter((country) => {
    if (country.slice(0, input.value.length) == input.value.toLowerCase()) return country;
  });

  buttons[2].innerHTML = '<i class="fa-solid fa-arrow-down-a-z"></i>';

  if (input.value != "") {
    buttons[2].disabled = true;
    check = true;
  } else {
    buttons[2].disabled = false;
    check = false;
  }

  if (document.querySelector("table") != null) {
    let oldTable = document.querySelector("table");
    result.removeChild(oldTable);
  }

  if (isActiveArray.indexOf(true) == 0) {
    h3.textContent = `Countries start with ${input.value == ' ' ? ' "space" ' : input.value} are ${firstMatchWith.length}`;
    showData(firstMatchWith);
  } else {
    h3.textContent = `Countries containing ${input.value == ' ' ? ' "space" ' : input.value} are ${matchWith.length}`;
    showData(matchWith);
  }

  if (input.value == "") {
    h3.textContent = "";
  }
});

const buttons = document.querySelectorAll(".sort");
const isActiveArray = Array(buttons.length - 1).fill(false);

for (let i = 0; i < buttons.length - 1; i++) {
  buttons[i].addEventListener("click", () => {
    if (isActiveArray[i]) {
      buttons[i].classList.remove("active");
      isActiveArray[i] = false;
    } else {
      buttons[i].classList.add("active");
      isActiveArray[i] = true;
      for (let j = 0; j < buttons.length - 1; j++) {
        if (j !== i) {
          isActiveArray[j] = false;
          buttons[j].classList.remove("active");
        }
      }
    }
  });
}

const result = document.getElementById("result");

function showData(arr) {
  const table = document.createElement("table");
  table.style.borderCollapse = "separate";
  table.style.borderSpacing = "25px";
  table.style.width = "100%";
  table.style.tableLayout = "fixed";
  result.appendChild(table);
  let tr;
  for (let i = 0; i < arr.length; i++) {
    if (i % 6 == 0) {
      tr = document.createElement("tr");
      table.appendChild(tr);
    }
    let td = document.createElement("td");
    let blur = document.createElement("div");
    let content = document.createElement("p");
    td.appendChild(blur);
    td.appendChild(content);

    td.style.position = "relative";
    td.style.width = "1.3%";
    td.style.height = "100px";
    td.style.padding = "40px 0";

    blur.style.position = "absolute";
    blur.style.backgroundImage = 'url("./images/map_image.jpg")';
    blur.style.backgroundPosition = "center";
    blur.style.backgroundSize = "cover";
    blur.style.filter = "brightness(0.45)";
    blur.style.zIndex = 1;
    blur.style.height = "100%";
    blur.style.width = "100%";
    blur.style.top = "0";
    blur.style.left = "0";
    blur.style.right = "0";
    blur.style.bottom = "0";
    blur.style.borderRadius = "15px";

    content.style.position = "relative";
    content.style.zIndex = 2;
    content.style.margin = "auto";
    content.style.width = "min-content";
    content.style.textAlign = "center";
    content.style.fontWeight = "bold";
    content.textContent = arr[i].toUpperCase();

    tr.appendChild(td);
  }
}

let sortCountries = countries.slice();

if (check == false) {
  showData(countries);
} else {
  showData(
    sortCountries.sort(function (a, b) {
      if (a > b) return -1;
      if (a < b) return 1;
      return 0;
    })
  );
}

buttons[2].addEventListener("click", () => {
  if (document.querySelector("table") != null) {
    let oldTable = document.querySelector("table");
    result.removeChild(oldTable);
  }
  if (check == true) {
    showData(countries);
    buttons[2].innerHTML = '<i class="fa-solid fa-arrow-down-a-z"></i>';
    check = false;
  } else {
    showData(
      sortCountries.sort(function (a, b) {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
      })
    );
    buttons[2].innerHTML = '<i class="fa-solid fa-arrow-down-z-a"></i>';
    check = true;
  }
});
