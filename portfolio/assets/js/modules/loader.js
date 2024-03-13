window.addEventListener('load', () => {
    let loader = document.querySelector('.loader_container');
    loader.style.transform = 'translateY(-100%)';

    setTimeout(() => {
        let navbar = document.querySelector('header');
        navbar.style.transform = 'translateY(0)'
    }, "2000");
    
    setTimeout(() => {
        let sn = document.querySelector('.social-networks');
        sn.style.transform = 'translate(0, -50%)';
        let tc = document.querySelector('.theme-color');
        tc.style.transform = 'translate(0, -50%)';
    }, "2750");

    setTimeout(() => {
        let h1 = document.querySelector('.preface h1 span:first-child');
        h1.style.transform = 'translateY(0)';
        h1.style.opacity = '1';
    }, "3750");

    setTimeout(() => {
        let h1 = document.querySelector('.preface h1 span:last-child');
        h1.style.transform = 'translateY(0)';
        h1.style.opacity = '1';
    }, "4250");

    setTimeout(() => {
        let h2 = document.querySelector('.preface h2');
        h2.style.transform = 'translateY(0)';
        h2.style.opacity = '1';
    }, "5000");

    setTimeout(() => {
        let h2 = document.querySelector('.preface .container a');
        h2.style.opacity = '1';
    }, "5750");
});