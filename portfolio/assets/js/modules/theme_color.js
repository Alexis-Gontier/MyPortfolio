// THEME COLOR
let container_theme = document.querySelector('.theme-color');
let themes = document.querySelectorAll('.theme-color .color');
let theme1 = document.querySelector('.theme-color .theme1');
let theme2 = document.querySelector('.theme-color .theme2');
let theme3 = document.querySelector('.theme-color .theme3');

container_theme.addEventListener("mouseover", () => {
    themes.forEach(theme => {
        theme.style.transform = "translateX(25%)";
    });
});
container_theme.addEventListener("mouseout", () => {
    themes.forEach(theme => {
        theme.style.transform = "translateX(75%)";
    });
});

theme1.addEventListener("mouseenter", () => {
    theme1.style.transform = "translateX(0)";
});
theme2.addEventListener("mouseenter", () => {
    theme2.style.transform = "translateX(0)";
});
theme3.addEventListener("mouseenter", () => {
    theme3.style.transform = "translateX(0)";
});

theme1.addEventListener('click', () => {
    document.body.classList.remove('theme2');
    document.body.classList.remove('theme3');
});
theme2.addEventListener('click', () => {
    document.body.classList.add('theme2');
    document.body.classList.remove('theme3');
});
theme3.addEventListener('click', () => {
    document.body.classList.remove('theme2');
    document.body.classList.add('theme3');
});