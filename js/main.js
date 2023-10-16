// kaydırırken barın şeklini değiştirme 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// nav menu açma kapama //
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

//sponsor slider


var swiper = new Swiper(".sponsor-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    breakpoints: {
        540: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 5,
        },
    },
});


//show/hide faq answer

