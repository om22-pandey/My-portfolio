// const skills = document.querySelector('#skills');
// const education = document.querySelector('#Education');
// const experience = document.querySelector('#Experience');

// var tablinks = document.getElementsByClassName('tab-links');
// var tabcontents = document.getElementsByClassName('tab-contents');

// skills.addEventListener('click',()=>{
//     // alert('hello')
//     skills.classList.add('active-link');
//     education.classList.remove('active-link');
//     experience.classList.remove('active-link');
//     tabcontents.classList.add('active-tab');
// })
// education.addEventListener('click',()=>{
//     // alert('hello')
//     education.classList.add('active-link');
//     skills.classList.remove('active-link');
//     experience.classList.remove('active-link');
//     tabcontents.classList.add('active-tab');

// })
// experience.addEventListener('click',()=>{
//     // alert('hello')
//     experience.classList.add('active-link');
//     skills.classList.remove('active-link');
//     education.classList.remove('active-link');
//     tabcontents.classList.add('active-tab');

// })

// Get references to all tab links and contents
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

// Function to remove active classes
function removeActiveClasses() {
    tabLinks.forEach(link => link.classList.remove('active-link'));
    tabContents.forEach(content => content.classList.remove('active-tab'));
}

// Function to add active class to clicked tab
function activateTab(tabIndex) {
    removeActiveClasses();
    tabLinks[tabIndex].classList.toggle('active-link');
    tabContents[tabIndex].classList.toggle('active-tab');
}

// Add click event listeners to each tab link
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