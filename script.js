


// navbar toggle in mobile

const /**NodeElement */ $navbar = document.querySelector("[data-navbar]");

const /**NodeElement */ $navToggler = document.querySelector("[data-nav-toggler]");


$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));


// header scroll state 


const   /*nodeelement */ $header = document.querySelector("[data-header]");


window.addEventListener("scroll", () => {
    $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
});

//  add to favorite button toggle


const /** {Nodelist} */ $toggleBtns = document.querySelectorAll("[data-toggle-btn]");

$toggleBtns.forEach($toggleBtn => {
    $toggleBtn.addEventListener("click", () => {
        $toggleBtn.classList.toggle("active");
    });

});






