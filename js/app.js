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

const sections = document.querySelectorAll("section");

const nav = document.querySelector("#navbar__list");

const navItems = [];

let activeSection = document.querySelector("#section1");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function setActive(element) {
    activeSection.classList.remove("active");
    element.classList.add("active");
    activeSection = element;
}

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

for (let i = 0; i < sections.length; i++) {
    let x = i + 1;
    let sektor = document.querySelector("#section" + x);
    theDom.push(sektor);
}

// build the nav

for (let x = 0; x < theDom.length; x++) {
    const newLi = document.createElement("li");
    newLi.textContent = theDom[x].dataset.nav;
    newLi.classList.add("menu__link");
    nav.appendChild(newLi);
    navItems.push(newLi);
}

theDom.forEach(section => {
    window.addEventListener("scroll", () => {
        if (isSectionNearTop(section)) {
            setActive(section);
            console.log("Scrolled!");
        }
    })
})

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click



for (let y = 0; y < navItems.length; y++) {
    navItems[y].addEventListener("click", (event) => {
        console.log("Clicked!")
        event.preventDefault();
        theDom[y].scrollIntoView( {
            behavior: "smooth"
        });
        setActive(theDom[y]);
    })
};