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

const sections = document.querySelectorAll("section");

const nav = document.querySelector("#navbar__list");

const navItems = [];

let activeSection = document.querySelector("#section1");

let activeNav = null;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Helper function sets the chosen section as the active one and removes previous active section
function setActive(element) {
    activeSection.classList.remove("active");
    element.classList.add("active");
    activeSection = element;
}

// Helper function who behaves exactly as the one above, but with the navbar elements instead
function setActiveNav(element) {
    activeNav.classList.remove("active");
    element.classList.add("active");
    activeNav = element;
}

// Helper function checks if any of the sections are close to the top of viewport
function isSectionNearTop(element) {
    const getTop = element.getBoundingClientRect().top;
    if ((getTop <= 80) && (getTop >= -80)) {
        return true;
    } else {
        return false;
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// For loop creates li element for each section, gives them a class and html text, and pushes them to nav bar
for (let x = 0; x < sections.length; x++) {
    const newLi = document.createElement("li");
    newLi.innerHTML = sections[x].dataset.nav;
    newLi.classList.add("menu__link");
    nav.appendChild(newLi);
    navItems.push(newLi);
    if (x === 0) {
        navItems[x].classList.add("active");
        activeNav = navItems[x];
    }
}

// Loop that adds event listener to each section for when they reach top of viewport through scrolling, and sets them active

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// For loop add event listener for each nav button. Once they are clicked, their respective section is made active
for (let y = 0; y < navItems.length; y++) {
    navItems[y].addEventListener("click", (event) => {
        event.preventDefault();
        sections[y].scrollIntoView( {
            behavior: "smooth"
            
        });
        setActive(sections[y]);
        setActiveNav(navItems[y]);
    })
};

/** 
ForEach loop adds event listener that listens for any sections reaching the top of viewport. 
If so, it makes section and its navbar counterpart active
*/
sections.forEach(section => {
    window.addEventListener("scroll", () => {
        if (isSectionNearTop(section)) {
            setActive(section);
            const navID = [...sections].indexOf(section);
            console.log(navID);
            setActiveNav(navItems[navID]);
        }
    })
})