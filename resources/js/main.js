/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    display: 400,
    // reset: true //animations repeat
})

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})

sr.reveal(`.about__data, .skills__data `, {origin: 'left'})
sr.reveal(`.about__image, .skills__content`, {origin: 'right'})

sr.reveal(`.projects__card`, {interval: 100})

/*=============== PROJECT INFO POPUP ===============*/
document.addEventListener('DOMContentLoaded', function() {
    // When the user clicks on the project card
    //var buttons = document.getElementById('openPopup');
    var mainContent = document.querySelector('main')
    var body = document.body;
    var buttons = document.querySelectorAll('.projects__button');
    buttons.forEach(function(button,index){
        button.addEventListener('click', function() {
            // Get the data attribute from the clicked button
            var popupId = 'popup' + (index + 1); // This creates "popup1", "popup2", etc.
            console.log("popup id is: ")
            console.log(popupId)
            var popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = "block";
                body.classList.add('pop-up_hidewebsite');
                popup.style.overflow = "auto"
                popup.style.pointerEvents = "all"
            }
        });
    });

    var closeButtons = document.querySelectorAll('.close-btn');
    closeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var popups = document.querySelectorAll('.popup');
            popups.forEach(function(popup) {
                popup.style.display = 'none';
                body.classList.remove('pop-up_hidewebsite');
            });    
        });
    });
     // Close the popup when clicking outside of it
     window.addEventListener('click', function(event) {
        var popups = document.querySelectorAll('.popup');
        popups.forEach(function(popup) {
            if (event.target == popup) {
                popup.style.display = "none";
                // Assuming mainContent is defined, remove the blur class
                body.classList.remove('pop-up_hidewebsite');
            }
        });
    });

});
