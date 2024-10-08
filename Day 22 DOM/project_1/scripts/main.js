// ------------------Level 1-----------------------
console.log("------------------Level 1-----------------------");

const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const wrapper = document.querySelector(".wrapper");
wrapper.style.margin = "0 25%";
wrapper.style.padding = "20px 20px";
const table = document.createElement("table");
wrapper.appendChild(table);
console.log(wrapper.textContent)

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

let tr; // Declare tr outside the loop
for (let i = 0; i <= 101; i++) {
    // Create a new row every 6 numbers
    if (i % 6 === 0) {
        tr = document.createElement("tr");
        table.appendChild(tr);
    }

    // Create a new cell
    let num = document.createElement("td");
    num.style.fontSize = "40px"; // Adjusted font size for better visibility
    num.style.textAlign = "center";
    num.style.margin = "5px 10px";
    num.style.padding = "10px 40px";
    num.style.color = 'white'
    num.textContent = i;

    // Set background color based on conditions
    if (isPrime(i)) {
        num.style.backgroundColor = "red"; // Prime numbers
    } else {
        num.style.backgroundColor = (i % 2 === 0) ? "green" : "#ffbc00"; // Even or odd
    }

    // Append the cell to the current row
    tr.appendChild(num);
}
