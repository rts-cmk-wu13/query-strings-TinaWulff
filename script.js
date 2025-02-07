
fetch("data/destinations.json")
.then(response => response.json())
.then((data) => {  

    let sectionElm = document.createElement("section")
    sectionElm.innerHTML = "<h1>Apartments for rent</h1>";
    
    sectionElm.innerHTML += data.destinations.map((destination) => `

            
            <article class="productCard">
            <img src="/img/${destination.image}" alt="${destination.subtitle}">
            <i class="fa-regular fa-heart"></i>
             <a href="destination.html?id=${destination.id}">More  
            </a>
            </article>`
            ).join("")



            document.querySelector("#wrapper").append(sectionElm);
        })
    
        