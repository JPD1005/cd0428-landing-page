/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const theDom = [];

for (let i = 0; i < 3; i++) {
    let x = i + 1;
    let sektor = document.querySelector("#section" + x);
    theDom.push(sektor);
}

const nav = document.querySelector("#navbar__list");

const navItems = [];


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for (let x = 0; x < theDom.length; x++) {
    const newLi = document.createElement("li");
    const sectionChild = theDom[x].querySelector(".landing__container");
    newLi.textContent = sectionChild.querySelector("h2").textContent;
    newLi.classList.add("menu__link");
    nav.appendChild(newLi);
    navItems.push(newLi);
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

navItems.forEach((section) => {
    section.addEventListener("click", (event) => {
        console.log("Clicked!");
    })
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


