let favorites = readFromLocalStorage("favorites")
console.log(favorites);

if (!favorites) favorites = []


fetch("data/destinations.json")
.then(response => response.json())
.then((data) => {  

    let sectionElm = document.createElement("section")
    sectionElm.innerHTML = "<h1>Apartments for rent</h1>";
    //console.log(sectionElm)
    sectionElm.innerHTML += data.destinations.map((destination) => `

            
            <article class="productCard">
            <img src="/img/${destination.image}" alt="${destination.subtitle}">
            <button class="favorite_btn ${favorites.includes(destination.id.toString()) ? "favorite_btn--selected" : "" }" data-favid="${destination.id}">
            <i class="fa-solid fa-heart"></i>
            </button>
             <a href="destination.html?id=${destination.id}">More  
            </a>
            </article>`
            ).join("")

            sectionElm.querySelectorAll(".favorite_btn").forEach(function(button){
                button.addEventListener("click", function(event) {
                    let currentId = event.target.closest("button").dataset.favid
                    console.log(currentId)
                    if (favorites.includes(currentId)) {
                        let newFavorites = favorites.filter(id => id != currentId)
                        favorites = newFavorites
                        event.target.classList.remove("favorite_btn--selected")
                        console.log(favorites)
                    } else {
                        favorites.push(currentId)
                        event.target.classList.add("favorite_btn--selected")
                        console.log(favorites);
                    }
                    saveToLocalStorage("favorites", favorites)
                })
            })
              

            document.querySelector("#wrapper").append(sectionElm);
        });
    
   
 
      