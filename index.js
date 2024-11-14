// variable aria
var toggleMenu = document.querySelector('.toggle-menu');
var menu = document.querySelector('.menu');
var menuItems = document.querySelectorAll('.menu p');

// menu of navbar
function showMenu() {
    if (document.body.clientWidth <= 1023) {
        if (menu.style.height == '0px') {
            menu.style.height = '';
        } else {
            menu.style.height = '0';
        }
    }

}

menuItems.forEach(e => {
    e.addEventListener('click', () => { showMenu() })
})

showMenu();

// dark mode and light mode
if (localStorage.getItem('mode')) {
    var html = document.querySelector('html');
    if (localStorage.getItem('mode') !== 'dark') {
        html.classList.remove('dark')
        html.classList.add('light')
    } else {
        html.classList.remove('light')
        html.classList.add('dark')
    }
} else {
    html.classList.add('dark')
}
function toggleMode() {
    var html = document.querySelector('html');
    if (html.classList[0] == 'dark') {
        html.classList.remove('dark')
        html.classList.add('light')
        localStorage.setItem('mode', 'light')
    } else {
        html.classList.remove('light')
        html.classList.add('dark')
        localStorage.setItem('mode', 'dark')
    }
}
