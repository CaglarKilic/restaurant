import Logo from './assets/logo.png';

export default function createAbout() {
    const div = document.createElement('div');
    div.classList.add('about');

    const header = document.createElement('header');
    const img = document.createElement('img');
    img.src = Logo;
    img.setAttribute('data-page-index', 1);
    header.append(img);

    const sectionHero = document.createElement('section');
    sectionHero.classList.add('hero');
    const heroH1 = document.createElement('h1');
    heroH1.append('who we are');
    sectionHero.append(heroH1);

    const sectionAbout = document.createElement('section');
    sectionAbout.classList.add('about');
    const aboutH2 = document.createElement('h2');
    aboutH2.append('about rezdora');
    const aboutP = document.createElement('p');
    aboutP.append(`Rezdôra is a New York Times three-star restaurant and a 2021 and 2022 Michelin Star recipient from Chef Stefano
    Secchi and Partner David Switzer in New York City's Flatiron neighborhood. The menu celebrates the cuisine of
    Emilia Romagna and is centered around house-made pasta, a nod to the restaurant's name which translates to “head
    of household”-usually a nonna who hand rolls pasta. Traditionally prepared meat, fish, local vegetables, and
    Northern Italian wines complement the offerings.`);
    sectionAbout.append(aboutH2, aboutP);

    const footer = document.createElement('footer');
    const nav = document.createElement('nav');
    const menu = document.createElement('menu');
    footer.append(nav);
    nav.append(menu);
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    menu.append(l1, l2, l3)
    li1.append('menus');
    li2.append('about');
    li3.append('contact');

    div.append(header, sectionHero, sectionAbout, footer)
}