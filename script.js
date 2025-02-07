
fetch("data/destinations.json")
.then(response => response.json())
.then((data) => {
    let sectionElm = document.querySelector("section")

    let productCard = document.createElement("article")
    productCard.classList.add("productCard")    

    
    productCard.innerHTML = data.destinations.map((destination) => `

            
            <img src="/img/${destination.image}" alt="${destination.subtitle}">
            <i class="fa-regular fa-heart"></i>
             <a href="destination.html?id=${destination.id}">More  
            </a>`
            ).join("")



            sectionElm.append(productCard);
        })
    
        