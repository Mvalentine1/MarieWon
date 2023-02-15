console.log('Marie Valentine')

// Items on Capstone Page Lollipop Boutique
let item1 = document.querySelector('.link1')
let item2 = document.querySelector('.link2')
let item3 = document.querySelector('.link3')
let item4 = document.querySelector('.link4')
let item5 = document.querySelector('.link5')
let item6 = document.querySelector('.link6')


let xclose = document.querySelector('.modalHeadX')
let close2 = document.querySelector('.modalHeadX1')
let close3 = document.querySelector('.modalHeadX2')
let close4 = document.querySelector('.modalHeadX3')
let close5 = document.querySelector('.modalHeadX4')
let close6 = document.querySelector('.modalHeadX5')

let modal = document.querySelector('#windowItem1')
item1.addEventListener('click', function(){
    modal.style.display='block'
})
xclose.addEventListener('click',function(){
        modal.style.display ='none'
 });

let modal1 = document.querySelector('.Img2')
item2.addEventListener('click', function(){
    modal1.style.display='block'
});
close2.addEventListener('click',function(){
    modal1.style.display ='none'
});

let modal2 = document.querySelector('.Img3')
item3.addEventListener('click',function(){
    modal2.style.display='block'
})
close3.addEventListener('click',function(){
    modal2.style.display ='none'
})

let modal3 = document.querySelector('.Img4')
item4.addEventListener('click',function(){
    modal3.style.display='block'
})
close4.addEventListener('click',function(){
    modal3.style.display ='none'
})

let modal4 = document.querySelector('.Img5')
item5.addEventListener('click',function(){
    modal4.style.display='block'
})
close5.addEventListener('click',function(){
    modal4.style.display ='none'
})

let modal5 = document.querySelector('.Img6')
item6.addEventListener('click',function(){
    modal5.style.display='block'
})
close6.addEventListener('click',function(){
    modal5.style.display ='none'
})

// The Capstone Page Add to Cart

let carts =document.querySelectorAll('.add-cart')

let products =[
    {
        name: 'Pink Bow Headband',
        style: 'bubble gum headband',
        price: $12.99,
        inCart:0
    },

    {
        name: 'Striped T-Shirt Dress',
        style: 't shirt dress',
        price: $29.99,
        inCart:0
    },
    {
        name: 'Lace Trim Crop Top',
        style: 'Fashion my Crop Top
',
        price: $19.99,
        inCart:0
    },
    {
        name: 'denim skirt',
        style: 'Denim is In!',
        price: 25.50,
        inCart:0
    },
    {
        name: 'Suede Boots',
        style: 'These boots are made for walking!',
        price: $49.99,
        inCart:0
    },
    {
        name: Floral Midi Dress',
        style: 'Floral is in Boho',
        price: $34.99,
        inCart:0
    }
];




