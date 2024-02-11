const title = document.getElementById('title')
const body = document.getElementById('body')
const blog = document.getElementById('blog')
const form = document.querySelector('form')

let postArray = []

function renderPost() {
    let html =''
    
    postArray.forEach(post => {
        html += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <hr>
        `          
    });
    blog.innerHTML = html
}



fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    postArray = data.slice(0,3)
    renderPost()
})

form.addEventListener('submit', function(e){
    e.preventDefault()
    const postTitle = title.value
    const postBody = body.value
    const post = {
        title: postTitle,
        body:  postBody
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => {
        postArray.unshift(data)
        renderPost()
    })

    form.reset()
})

// fetch example with itunes API
// fetch('https://itunes.apple.com/search?term=jack+johnson')
//     .then(response => response.json())
//     .then(data => console.log(data))



fetch('https://api.openweathermap.org/data/2.5/weather')
    .then(res => res.json())
    .then(data => console.log(data))

    
