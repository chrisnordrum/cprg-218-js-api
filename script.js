// Random Joke
fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
.then(response => response.json())
.then (data => {
    joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
})

// Buttons
const dev = () => {
    fetch("https://v2.jokeapi.dev/joke/Programming?safe-mode")
    .then (response => response.json())
    .then (data => {
        title.textContent = `A Random Programming Joke`
        joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
    })
}

const misc = () => {
    fetch("https://v2.jokeapi.dev/joke/Miscellaneous?safe-mode")
    .then (response => response.json())
    .then (data => {
        title.textContent = `A Random Misc Joke`
        joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
    })
}

const pun = () => {
    fetch("https://v2.jokeapi.dev/joke/Pun?safe-mode")
    .then (response => response.json())
    .then (data => {
        title.textContent = `A Random Pun`
        joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
    })
}

const boo = () => {
    fetch("https://v2.jokeapi.dev/joke/Spooky?safe-mode")
    .then (response => response.json())
    .then (data => {
        title.textContent = `A Random Spooky Joke`
        joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
    })
}

const xmas = () => {
    fetch("https://v2.jokeapi.dev/joke/Christmas?safe-mode")
    .then (response => response.json())
    .then (data => {
        console.log("data.joke")
        title.textContent = `A Random Christmas Joke`
        joke.textContent = data.joke || `${data.setup} ... ${data.delivery}`;
    })
}