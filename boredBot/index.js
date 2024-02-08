// console.log('testing async js');

// async function dogs() {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random')
//     const data = await response.json()
//     console.log(data);
// }

// dogs()
// console.log('testing async js 2');

const show = document.getElementById('btn')

show.addEventListener('click', function(){
    fetch('https://www.boredapi.com/api/activity')
.then(response => response.json())
.then(data => {
    console.log(data);
    const activity = document.getElementById('activity')
    console.log(activity);
    activity.textContent = data.activity
}) 
console.log('active');
})


