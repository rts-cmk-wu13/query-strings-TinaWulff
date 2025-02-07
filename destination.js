fetch("data/destinations.json")
.then(response => response.json())
.then((data) => {
    let sectionElm = document.querySelector("section")

    let destinationInfo = document.createElement("div")


    destinationInfo.innerHTML = data.destinations.map((destination) => `

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

            <li>
            ${destination.facilities}
            </li>

            `).join("")

            sectionElm.append(destinationInfo);
        })
    