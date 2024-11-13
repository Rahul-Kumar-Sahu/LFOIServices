const menuToggle = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

menuToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
    const nav =document.querySelector('nav');

    if(window.scrollY > 0){
        nav.classList.add('scrolled')
    }else{
        nav.classList.remove('scrolled')
    }
})