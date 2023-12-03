import createHome from "./home";

//initialize page and return root for further page loading.
const root = (function () {
    const root = document.getElementById('content');
    root.append(createHome());
    addListeners();
    return root;
})();

function addListeners() {
    const [menu, about] = document.querySelectorAll('menu>li');
    const home = document.querySelector('header>img');
    [home, menu, about].forEach(e => e.addEventListener('click', route));
}

function route(event) {
    const pages = [createHome];
    const root = document.getElementById('content');
    root.firstElementChild.remove();
    root.append(pages[event.target.dataset.pageIndex]());
    addListeners();
}




