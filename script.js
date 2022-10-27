let searchBtn = document.getElementById("search-button");
let countryInput = document.getElementById("country-input");

searchBtn.addEventListener("click", () =>{
    let countryName = "India";
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true `;
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data[0]);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            console.log(Object.keys(data[0].currencies)[0]);
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(Object.values(data[0].languages).toString().split(',').join(', '));
        });
});