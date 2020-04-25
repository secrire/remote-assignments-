// request1
const h1= document.querySelector('h1');

h1.addEventListener('click',()  =>{
h1.textContent = "Have a Good Time!";
});

// request2
let menuImg= document.querySelector('.menuImg');
let mobile_menu = document.querySelector('.mobile_menu');
let closemenu = document.querySelector('.closemenu');

menuImg.addEventListener('click',()  =>{
        mobile_menu.style.transform ="none";
});

closemenu.addEventListener('click',()  =>{
        mobile_menu.style.transform ="translateX(100%)";
});


// request 3
let call= document.querySelector('.call');
let moretoshow = document.querySelector('.moretoshow');

call.addEventListener('click',()  =>{
 moretoshow = moretoshow.classList.toggle("active");
});
