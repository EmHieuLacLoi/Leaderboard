// ------------------Level 2-----------------------
console.log("------------------Level 2-----------------------");

const body = document.body
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

const wrapper = document.querySelector('.countries-wrapper')
const table = document.createElement('table')
wrapper.appendChild(table)

const h2 = document.querySelector('h2')
h2.style.fontSize = '80px'
h2.style.marginTop = '10px'
h2.style.marginBottom = '30px'

const l = countries.length
const h4 = document.querySelector('#total-countries') 

h4.innerHTML = `Total number of coutries: ${l}`
h4.style.fontWeight = 'bold'
h4.style.fontSize = '20px'
h4.style.textAlign = 'center'

const h3 = document.querySelectorAll('h3')
for (let i = 0; i < h3.length; i++) {
    h3[i].style.textAlign = 'center'
    h3[i].style.fontWeight = 'normal'
}

let tr
for (let i = 0; i < l; i++) {
    if (i % 6 == 0) {
        tr = document.createElement('tr')
        table.appendChild(tr)
    }

    let country = document.createElement('td')
    country.textContent = countries[i]
    country.style.fontSize = '20px'
    country.style.fontWeight = 'bold'
    country.style.color = 'black'
    country.style.border = '2px solid black'
    country.style.borderRadius = '5px'
    country.style.textAlign = 'center'
    country.style.padding = '50px 5px'
    tr.appendChild(country)
}
