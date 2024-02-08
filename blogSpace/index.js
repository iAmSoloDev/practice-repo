const title = document.getElementById('title')
const body = document.getElementById('body')
const blog = document.getElementById('blog')
console.log(body);



fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    const posts = data.slice(0,5)
    let html =''
    
    posts.forEach(post => {
        html += `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <hr>
            `          
        });
        blog.innerHTML = html
    
    })