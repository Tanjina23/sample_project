// Header

let menu = document.getElementById('menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.getElementById('search-icon').onclick = () =>{
    document.getElementById('search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.getElementById('search-form').classList.toggle('active');
}
