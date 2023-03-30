const toggleIsGoodDog = (dog, button) => {
dog.isGoodDog = !dog.isGoodDog
button.textContent = dog.IsGoodDog ? "Good Dog!" : "Bad Dog!"
fetch(`http://localhost:3000/pups/${dog.id}`, {
method: "PATCH",
headers: {"Content-Type": "application/json"},
body: JSON.stringify(dog),

});

};


const showDetails = (dog) => {
    const img = document.createElement("img");
    img.src = dog.image
    img.alt = dog.name
    const name = document.createElement("h2");
    name.textContent = dog.name
    const button =document.createElement("button")
    button.textContent = dog.isGoodDog ? "Good Dog!" : "Bad Dog!";
    
     
    button.addEventListener("click", () => { toggleIsGoodDog(dog, button )})
    
    
    
    const infoDiv =document.querySelector("#dog-info")
    infoDiv.innerHTML = "";

    infoDiv.append(img, name, button)
}




fetch("http://localhost:3000/pups")
.then((r)=> r.json())
.then((dogs) => {
dogs.forEach((dog) => {
    console.log(dog.name)
    const span = document.createElement("span")
    span.textContent = dog.name
    document.querySelector("#dog-bar").append(span)


span.addEventListener("click", () => showDetails(dog))
});
});
