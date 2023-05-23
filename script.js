let menu = document.querySelector('menu-btn');
let navber = document.querySelector('.header .flex .navber');

menu.ouclick = () =>{
    menu.classList.toggle('fa-times');
    navber.classList.toggle('sctive');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navber.classList.toggle('active');
}