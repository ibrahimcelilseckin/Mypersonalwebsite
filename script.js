const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
var top = document.getElementsByClassName("go-up")[0];
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const goUpButton = document.querySelector('.go-up');


function toggleGoUpButton() {
    if (window.scrollY > 100) { 
        goUpButton.style.display = 'flex'; 
    } else {
        goUpButton.style.display = 'none'; 
    }
}


window.addEventListener('DOMContentLoaded', toggleGoUpButton);
window.addEventListener('scroll', toggleGoUpButton);


goUpButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
}
