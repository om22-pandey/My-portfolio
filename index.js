const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

function removeActiveClasses() {
    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));
}

function activateTab(tabIndex) {
    removeActiveClasses();
    tabLinks[tabIndex].classList.toggle('active-link');
    tabContents[tabIndex].classList.toggle('active-tab');
}

tabLinks.forEach((link, index) => {
    link.addEventListener('click', () => activateTab(index));
});


// -------------------------------responsive----------------------------



var bar = document.getElementById('bar');
var cross = document.getElementById('cross');
var nav_ul = document.getElementById('list');


// hideNav();
function showNav() {
    // nav_ul.setAttribute('style','display:block'; 'color: black');
    nav_ul.style.display = 'block';
    bar.style.display = 'none';
}
function hideNav() {
    // nav_ul.setAttribute('style','display:block'; 'color: black');
    nav_ul.style.display = 'none';
    bar.style.display = 'block';
}

bar.addEventListener('click', showNav);
cross.addEventListener('click',hideNav);


// function copyEmail(){
//     document.execCommand("copy");
// }

function refresh_page() {
    location.reload();
    // document.getElementById('myform').reset();
}
