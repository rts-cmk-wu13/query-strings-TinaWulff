
fetch("data/destinations.json")
.then(response => response.json())
.then((data) => {
    let sectionElm = document.querySelector("section");

    let productCard = document.createElement("article");
    productCard.classList.add("productCard");

    productCard.innerHTML =
    
        ${data.destinations.map(() => `
            ${}`

})