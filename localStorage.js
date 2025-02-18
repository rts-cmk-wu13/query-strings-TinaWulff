/*function saveToLocalStorage(key, value) {

    localStorage.setItem(key, JSON.stringify(value))
    return "data saved with the key" + key
}



console.log(succes);

function readFromLocalStorage(key) {

    return JSON.parse(localStorage.getItem(key));

}

function deleteFromLocalStorage(key) {
    localStorage.removeItem(key)
    return "the Element with" + key + "was deleted"
}

let succes = saveToLocalStorage("favorites", [1, 5, 8]) //Test

let read = readFromLocalStorage("favorites")            //Test

let deleted = deleteFromLocalStorage("favorites")       //Test

*/
// NY

function saveToLocalStorage(key, value) {

    localStorage.setItem(key, JSON.stringify(value))
    return "data saved with the key" + key
}



//console.log(succes);

function readFromLocalStorage(key) {

    return JSON.parse(localStorage.getItem(key));

}

function deleteFromLocalStorage(key) {
    localStorage.removeItem(key)
    return "the Element with" + key + "was deleted"
}


