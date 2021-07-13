const navs = [{
    Text: "Home",
    Url: "index.html",
    Class: "nav-link"
},
{
    Text: "Quote",
    Url: "form.html",
    Class: "nav-link"
},
{
    Text: "Products",
    Url: "store.html",
    Class: "nav-link"
},
{
    Text: "Industries",
    Url: "industries.html",
    Class: "nav-link"
}]

//loops through navs and creates <li> for each nav item
const navBarMarkup =
navs.map(nav => `<li class="navLink"><a href="${nav.Url}" class="${nav.Class}">${nav.Text}</a></li>`).join(' ');

document.getElementById('primaryNav').innerHTML = navBarMarkup;

//Select HTML elements
const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');
const navClose = document.querySelector('.nav i');

//Function to toggle menu open and closed
function toggleNav(){
    burger.classList.toggle('fa-bars');
    burger.classList.toggle('fa-times');
    nav.classList.toggle('nav-active');
}

//add event listener for click

burger.addEventListener('click', function(){
    toggleNav();
});

//When mobile menu is open, this if statement will lock the body so
//it doesn't scroll. 

if(getElementById(''))