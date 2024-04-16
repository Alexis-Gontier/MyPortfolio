let about = document.querySelectorAll('.baner_about')
let projects = document.querySelectorAll('.baner_projects')
let contact = document.querySelectorAll('.baner_contact')
let n = 30

about.forEach((banner) => {
    for (let i = 0; i < n; i++) {
        banner.innerHTML += '<span>about</span>';
    }
});

projects.forEach((banner) => {
    for (let i = 0; i < n; i++) {
        banner.innerHTML += '<span>projects</span>';
    }
});

contact.forEach((banner) => {
    for (let i = 0; i < n; i++) {
        banner.innerHTML += '<span>contact</span>';
    }
});