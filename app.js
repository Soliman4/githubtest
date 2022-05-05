const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar_menu'); 
const navlogo = document.querySelector('#navbar_logo');

// display menubar
const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}
menu.addEventListener('click',mobileMenu);


// show active menu when scroling
const highlightMenu = ()=>{
    const elem =document.querySelector('.highlight');
    const homeMenu =document.querySelector('#home-page');
    const aboutMenu=document.querySelector('#about-page');
    const servicesMenu =document.querySelector('#services-page');
    let scrollpos = window.scrollY

    // add 'highlight' class to menu items
    if(window.innerWidth > 960 && scrollpos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth >960 && scrollpos <1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return
    }else if(window.innerWidth >960 && scrollpos <2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return
    }
    if(elem && window.innerWidth < 960 && scrollpos < 600 ||elem){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll' , highlightMenu);
window.addEventListener('click' , highlightMenu);

// close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
    const menuBar =document.querySelector('.is-active');        
    if(window.innerWidth <= 768 && menuBar){
        menu.classList.toggle('is-active');
        menulinks.classList.remove('active');
    }
};

menulinks.addEventListener('click',hideMobileMenu);
navlogo.addEventListener('click',hideMobileMenu);