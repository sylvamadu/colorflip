const colors = ['yellow', 'grey','whitesmoke', '#34ad4e', '#ed454a', '#f34ad4']

const rand =()=> Math.floor(Math.random() * colors.length)

const btn = document.querySelector('#btn')
const textColor = document.querySelector('#color')
const headtag = document.querySelector('h1')

btn.addEventListener('click', function(){
    let randColor = colors[rand()]
    document.body.style.backgroundColor = randColor
    document.getElementsByClassName('color').textContent = randColor    //document.querySelector('.content')
    textColor.textContent = randColor
    headtag.style.color = randColor
})