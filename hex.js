const hex = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

const rand =()=> Math.floor(Math.random() * hex.length)

const btn = document.querySelector('#btn')
const textColor = document.querySelector('#color')
const headtag = document.querySelector('h1')

btn.addEventListener('click', function(){
    let hexColor = '#'
    for(i = 0; i < 6; i++){
        hexColor += hex[rand()]
    }

    document.body.style.backgroundColor = hexColor
    document.getElementsByClassName('color').textContent = hexColor    //document.querySelector('.content')
    textColor.textContent = hexColor
    headtag.style.color = hexColor

})