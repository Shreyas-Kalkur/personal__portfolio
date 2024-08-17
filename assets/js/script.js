
// skill tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContent.forEach(tabContents => {
            tabContents.classList.remove("skills__active")
        })
        target.classList.add("skills__active")


        tabs.forEach(tab => {
            tab.classList.remove("skills__active")
        })
        tab.classList.add("skills__active")
    })
})


// mixitup

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

//link active work

const linkWork = document.querySelectorAll('.work__item');
function activeWork() {
    linkWork.forEach(l => l.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener("click", activeWork));

// work popup

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        TogglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function TogglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", TogglePortfolioPopup);

function portfolioItemDetails(portfolioItems) {
    // alert(portfolioItems.id);
    document.querySelector(".pp__thumbnail img").src = portfolioItems.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItems.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItems.querySelector(".portfolio__item-details").innerHTML;
}


// service modal

const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalCloses = document.querySelectorAll('.services__modal-close');

let model = function (modelClick) {
    modalViews[modelClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        model(i)
    })
})


modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})


// scrollbar active

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionID = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.add('active-link')
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionID + ']').classList.remove('active-link')
        }
    })
}


//show sidebar
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'),
    navItems = document.querySelector('.nav__link');



if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-sidebar')
    })
}
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar')
    })
}


function closeSideBar() {
    navClose.click();
}
