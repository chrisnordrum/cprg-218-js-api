// Random Joke
fetch(`https://v2.jokeapi.dev/joke/Any?safe-mode`)
.then(response => response.json())
.then (data => {
    joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
})

// Random Joke by Category
const getJoke = () => {
    fetch(`https://v2.jokeapi.dev/joke/${event.srcElement.innerHTML}?safe-mode`)
    .then (response => response.json())
    .then (data => {
        joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
        if (data.category == `Pun`) {
            title.textContent = `A Random Pun`;
        } else {
            title.textContent = `A Random ${data.category} Joke`;
        }
    })
}

// Footer Copyright
document.getElementById(`fYear`).textContent = new Date().getFullYear();