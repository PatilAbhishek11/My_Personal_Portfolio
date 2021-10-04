// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}
// JS of Fading navbar 

function changecolor(){
    var navv = document.getElementById('container');
    var scrollval = window.scrollY;
  
    console.log(scrollval);
    if (scrollval<55){
        navv.classList.remove("bgnav");
    }
    else{
        navv.classList.add("bgnav");
    }
}
window.addEventListener("scroll", changecolor);