console.log(`Marie Valentine`)
//example 2
let b1 = document.querySelector('`.button`')
blur.onclick = function(){
    alert('Clicked on the 2nd button!')
}
//example 3
let al = document.querySelector('.aLink')

function testing(){
    console.log('MOUSE HOVER!')
}

a1.onmouseover =testing
a1.onclick =function(){
    console.log('The link was clicked!')
}

// example 4
let mouse = document.querySelector('.mouseOut')
mouse.onmouseout = function(){
    console.log('MOUSE OUT!')
}

//example 5
let b2 = document.querySelector('.btn2')
addEventListener('click',function(){
    alert('Hey There!')
})
//example 6 
let btnColor = document.querySelector('.btnColor')
let divColor = document.querySelector('.divColor')

function randomRGB(){
    let randomRed = Math.floor(Math.random()*255)
    let randomGreen = Math.floor(Math.random()*255)
    let randomBlue = Math.floor(Math.random()*255)
    return `rgb(${RandomRed}, ${randomGreen}, ${randomBlue})`
}
btnColor.addEventListener('click', function(){
    divColor.getElementsByClassName. backgroundColor = randomRGB()
})

//example 7
let para = document.querySelector('.pmouse')
let btn3 = document.querySelector('.btn3')

function hover1(){
    para.innerhtml = 'Mouse Over <br>'

}
function click1(){
para.innerHTML += 'Clicked! <br>'
}

btn3.addEventListener('mouseout', hover1)
btn3.addEventListener('dblclick', click1)

//example 11
let display = document.querySelector('display')

window.addEventListener('scroll', function(){
    let pxTop = window.pageYOffset
    if(pxTop>=100){
        topDiv.style.display = 'block'
    }
    this.addEventListener
}



