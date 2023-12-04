import Logo from './assets/logo.png';

export default function createMenus() {
    const div = document.createElement('div');
    div.classList.add('menus');
    div.innerHTML = `<header>
    <img src="../src/assets/logo.png" alt="">
  </header>
  <section class="hero">
    <h1>menus</h1>
  </section>
  <section class="dinner">
    <h2>dinner</h2>
    <section class="col-1">
      <h3>antipasti</h3>
      <section>
        <h4>caseificio</h4>
        <ul>
          <li>
            <dl>
              <dt>fett'unta</dt>
              <dd>(a perfect accompaniment to caseificio) toasted bread with extra virgin oil
              </dd>
            </dl>
            <span>9</span>
          </li>
          <li>
            <dl>
              <dt>burrata</dt>
              <dd>prosciutto di parma "24 mesi"</dd>
            </dl>
            <span>28</span>
          </li>
          <li>
            <dl>
              <dt>burrata "funghi del bosco"</dt>
              <dd>funghi reali, tartufo nero</dd>
            </dl>
            <span>29</span>
          </li>
          <li>
            <dl>
              <dt>bocconcini mozzarella di bufala</dt>
              <dd>"zucca" in three ways, saba, hazelnuts</dd>
            </dl>
            <span>26</span>
          </li>
          <li>
            <dl>
              <dt>stracciatella encontra lambrusco</dt>
              <dd>cipolla stracotto, puree & bruciata</dd>
            </dl>
            <span>25</span>
          </li>
        </ul>
      </section>
    </section>
    <section class="col-2">
      <h3>primi</h3>
      <section>
        <h4>pasta</h4>
        <ul>
          <li>
            <dl>
              <dt>strozzapreti</dt>
              <dd>tomato sauce from emilia with rock shrimp & basil</dd>
            </dl>
            <span>29</span>
          </li>
          <li>
            <dl>
              <dt>anolini di parma</dt>
              <dd>traditional meat filling with parmigiano sauce</dd>
            </dl>
            <span>26</span>
          </li>
          <li>
            <dl>
              <dt>tagliolini al ragu</dt>
              <dd>from modena</dd>
            </dl>
            <span>26</span>
          </li>
          <li>
            <dl>
              <dt>grandma walking through forest in emilia</dt>
              <dd>cappelletti verdi with roasted, sauteed leeks & black mushroom puree</dd>
            </dl>
            <span>28</span>
          </li>
          <li>
            <dl>
              <dt>tortelli "modo cacciatore"</dt>
              <dd>doppio ripeno, guinea hen & fennel</dd>
            </dl>
            <span>28</span>
          </li>
          <li>
            <dl>
              <dt>uovo raviolo di nino bergese</dt>
              <dd>spugnole, spinach & tartufo nero</dd>
            </dl>
            <span>31</span>
          </li>
          <li>
            <dl>
              <dt>gramigna giallo e verde</dt>
              <dd>with slow braised sausage ragu "in bianco"</dd>
            </dl>
            <span>26</span>
          </li>
          <li>
            <dl>
              <dt>"dolcetto scherzetto" in lombardia</dt>
              <dd>roasted squash, parmigiano fonduta, amaretti cookies</dd>
            </dl>
            <span>27</span>
          </li>
          <li>
            <dl>
              <dt>spinach stracci</dt>
              <dd>"funghi del bosco" pecorino di fossa</dd>
            </dl>
            <span>27</span>
          </li>
          <li>
            <dl>
              <dt>regional pasta tasting</dt>
              <dd></dd>
            </dl>
            <span>98</span>
          </li>
          <li>
            <dl>
              <dt>optional wine pairing</dt>
              <dd></dd>
            </dl>
            <span>90</span>
          </li>
        </ul>
      </section>
    </section>
    <section class="col-3">
      <h3>secondi</h3>
      <section>
        <h4>padella</h4>
        <ul>
          <li>
            <dl>
              <dt>cow grazing in emilia romagna</dt>
              <dd>sirloin steak, sauces from emilia romagna & herb salad</dd>
            </dl>
            <span>34</span>
          </li>
          <li>
            <dl>
              <dt>guancia brasato</dt>
              <dd>beef cheek, polenta, gremolata</dd>
            </dl>
            <span>29</span>
          </li>
          <li>
            <dl>
              <dt>capesante</dt>
              <dd>scallops, cauliflower, pine nuts, capers & gremolata</dd>
            </dl>
            <span>34</span>
          </li>
        </ul>
      </section>
    </section>
  </section>
  <footer>
    <nav>
      <menu>
        <li>menus</li>
        <li>about</li>
        <li>contact</li>
      </menu>
    </nav>
  </footer>`;

  return div;
}