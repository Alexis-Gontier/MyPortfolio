// BURGER MENU
let open_burger = document.querySelector('.burger-menu');
let close_burger = document.querySelector('.nav-resp ul p');
let burger_menu = document.querySelector('.nav-resp ul');

let links_nav = document.querySelectorAll('.nav-resp ul li a');

open_burger.addEventListener("click", () => {
    burger_menu.style.transform = "translateY(0)";
});

close_burger.addEventListener("click", () => {
    burger_menu.style.transform = "translateY(-100%)";  
});

links_nav.forEach(link => {
    link.addEventListener("click", () => {
        setTimeout(() => {
            burger_menu.style.transform = "translateY(-100%)";
          }, "500");
    });
});