/*fetch("data/destinations.json")
.then(response => response.json())
.then((data) => {
    let sectionElm = document.querySelector("section")

    let destinationInfo = document.createElement("div")


    destinationInfo.innerHTML = 
    data.destinations.map((destination) => 
    `


            <h2>
            ${destination.destination}
            </h2>

            <h1>
            ${destination.title}
            </h1>

            <p>
            ${destination.subtitle}
            </p>

            <p>
            ${destination.text}
            </p>

            <h3>
            Faciliteter
            </h3>

            <ul>
            ${destination.facilities.map(facility =>
                `<li>${facility}</li>`
            ).join("")}
            </ul>

            `).join("")

            sectionElm.append(destinationInfo);
    
    


    let destinationImage = document.createElement("figure")


    destinationImage.innerHTML = data.destination.map((destination) => `
    <img src="/img/${destination.image}" alt="${destination.subtitle}">

    <button><i class="fa-solid fa-heart"></i>FAVORIT</button>
    `).join("");

    sectionElm.append(destinationImage);


});
*/
/*
// Funktion til at hente URL-parametre
function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

fetch("data/destinations.json")
    .then(response => response.json())
    .then((data) => {
        // Hent destinationens id fra URL'en
        const destinationId = parseInt(getUrlParam('id'));
*/




let search = window.location.search
let params = new URLSearchParams(search)
console.log(params);
let id = params.get("id")
console.log(id);


fetch(`/data/${id}.json`)
    .then(response => response.json())
    .then((data) => {
        
        console.log(data)
        // let destination = data.find(destination => destination.id === parseInt(id));
        

        
            // Find section elementet og opret destination info
            let sectionElm = document.querySelector("section");
            let destinationInfo = document.createElement("div");

            // Indsæt destinationens information i destinationInfo
            destinationInfo.innerHTML = 
    `
    <h2>
    ${data.destination}
    </h2>

    <h1>
    ${data.title}
    </h1>

    <p>
    ${data.subtitle}
    </p>

    <p>
    ${data.text}
    </p>

    <h3>
    Faciliteter
    </h3>

    <ul>
    ${data.facilities.map(facility =>
        `<li>${facility}</li>`
    ).join("")}
    </ul>
    `

    sectionElm.append(destinationInfo);
   


    let destinationImage = document.createElement("div");

    destinationImage.innerHTML = `

    <img src="/img/${data.image}" alt="${data.subtitle}">

    <button><i class="fa-solid fa-heart"></i>FAVORIT</button>
  `
    sectionElm.append(destinationImage);

})





.catch(error => console.error("Error fetching data:", error));