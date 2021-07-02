const navs = [{
    Text: "Home",
    Url: "index.html",
    Class: "home-link"
},
{
    Text: "Quote",
    Url: "form.html",
    Class: "form-link"
},
{
    Text: "Products",
    Url: "store.html",
    Class: "store-link"
},
{
    Text: "Industries",
    Url: "industries.html",
    Class: "industries-link"
}]

//loops through navs and creates <li> for each nav item
const navBarMarkup =
navs.map(nav => `<li class="navLink"><a href="${nav.Url}" class="${nav.Class}">${nav.Text}</a></li>`).join(' ');

document.getElementById('primaryNav').innerHTML = navBarMarkup;

//Select HTML elements
const burger = document.getElementById('hamburgerBtn');
const nav = document.querySelector('.main-nav');

//Function to toggle menu open and closed
function toggleNav() {
    burger.classList.toggle('fa-bars')
    burger.classList.toggle('fa-times')
    nav.classList.toggle('nav-active')
}

//add event listener for click

burger.addEventListener('click', function(){
    toggleNav();
});