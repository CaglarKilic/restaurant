import createHome from "./home";
import createAbout from "./about";
import createMenus from "./menus";
import './style.css'

//initialize page and return root for further page loading.
const root = (function () {
    const root = document.getElementById('content');
    root.append(createHome());
    attachRouting();
    return root;
})();

function attachRouting() {
    const [menu, about] = document.querySelectorAll('menu>li');
    const home = document.querySelector('header>img');

    let i = 0;
    [home, about, menu].forEach(function (e) {
        e.addEventListener('click', route);
        e.setAttribute('data-page-index', i++);
    })

}

function route(event) {
    const pages = [createHome, createAbout, createMenus];
    const div = pages[event.target.dataset.pageIndex]();
    console.log(div);
    root.firstElementChild.remove();
    root.append(div);
    attachRouting();
}




