import Logo from './assets/logo.png';
import './style.css';

export default function createHome() {
    const div = document.createElement('div');

    const header = document.createElement('header');
    const img = document.createElement('img');
    img.src = Logo;
    img.setAttribute('data-page-index', 0);
    
    const footer = document.createElement('footer');
    const nav = document.createElement('nav');
    const menu = document.createElement('menu');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    li1.append('menus');
    li2.append('about');
    li3.append('contact');

    div.append(header, footer);
    header.append(img);
    footer.append(nav);
    nav.append(menu);
    menu.append(li1, li2, li3);

    return div;
}