const faNavbarData = {
  title: "Alba Sendón Blanco",
  Home: "Inicio",
  publications: "Escritos",
  Research: "Exposicións",
  Jobs: "Conferencias",
  More: "Máis",
};

const faHomePageData = {
  name: " Alba Sendón Blanco ",
  jobTitle: " Estudante de doutoramento, Vrije Universiteit Amsterdam ",
  home_title: "Sobre min",
  home_content: `
  <div>
    <p> Ola! Son Alba, unha estudante de doutoramento na Vrije Universiteit, en Amsterdam, baixo a supervisón de <a href="https://www.reneehoekzema.nl/">Renee Hoekzema</a> e <a href="https://www.few.vu.nl/~trt800/">Thomas Rot</a>. </p>
    <p> Os meus intereses de investigación céntranse na topoloxía alxébrica de variedades. En particular, gústame estudar cobordismos entre variedades aniñadas (variedades con variedades dentro), e tamén cortar e pegar variedades equivariantes.</p>
    <p> Antes do meu doutoramento, estudei o Máster en Matemática Avanzada na Universitat de Barcelona e o Grao en Matemáticas na Universidade de Santiago de Compostela.</p>
    <p> No ano académico 2026/2027, estou no mercado laboral. O meu CV está dispoñible baixo demanda.</p>
    <p><img src=../assets/images/icons/mail.png alt="" width="30"> a.sendon.blancoSPAMvu.nl, cambiando SPAM por @.</p>
    <p><img src=../assets/images/icons/orcid.png alt="" width="30"> 0009-0008-0846-3276 </p>
    <h2 class='title'> Novas </h2>
    <ul>
      <li> [Xuño 2026] <a href="https://www.sciencedirect.com/science/article/pii/S0166864126001665">Cobordism of nested manifolds</a> foi aceptado para publicación en Topology and its applications.</li>
      <li> [Decembro 2025] <a href="https://arxiv.org/abs/2512.18277">Cobordism of nested manifolds</a> apareceu no arXiv.</li>
      <li> [Setembro 2025] Pasarei tres meses no <a href="https://geotop.math.ku.dk/">Copenhagen Centre for Geometry and Topology</a>.</li>
      <li> [Agosto 2025] <a href="https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/blms.70181">Scissors congruence K-theory for equivariant manifolds</a> foi aceptado para publicación en Bulletin of the London Mathematical Society.</li>
      <li> [Xaneiro 2025] <a href="https://arxiv.org/abs/2501.06928">Scissors congruence K-theory for equivariant manifolds</a> apareceu no arXiv.</li>
    </ul>
  </div>
  `,
};

const faPublicationsPageData = {
  type_one_title: "Publications and writing",

  type_one_items: [
    {
      title: `Cobordism of nested manifolds (Cobordismo de variedades aniñadas).`,
      abstract: `Estudamos cobordisms de variedades aniñadas, que son variedades con subvariedades mergulladas, que poden á súa vez ter subvariedades aniñadas, etc. Identificamos un análogo da construción de Pontryagin-Thom para variedades aniñadas. Ademais, cando a variedade de maior dimensión ten un fibrado normal cunha dirección enmarcada, atopamos espazos homotópicamente equivalentes ós espazos de Pontryagin-Thom aniñados que relacionan as variedades aniñadas salvo cobordismo con enlaces salvo cobordismo. Isto dá lugar a invariantes de cobordismo aniñado que veñen de invariantes de cobordismo de enlaces previamente estudadas. Tamén aportamos unha proba alternativa dun resultado de Wall sobre a escisión dos grupos de cobordismo aniñado estable.`,
      date: "2025",
      arxiv: "https://arxiv.org/abs/2512.18277",
      journalname: "Topology and its applications",
      journallink: "https://www.sciencedirect.com/science/article/pii/S0166864126001665",
      link: "",
      writers: ["Alba Sendón Blanco"],
    },
   {
      title: `Scissors congruence K-theory for equivariant manifolds (Teoría K de cortado e pegado para variedades equivariantes).`,
      abstract: `Introducimos un espectro de teoría K de cortado e pegado que levante os grupos de cortado e pegado equivariante para G-variedades compactas con borde, e demostramos que en π0 este é o dominio dun levantamento ó nivel de espectros da característica de Euler equivariante dunha G-variedade compacta, con valores no anel de Burnside. Tamén demostramos que os grupos de cortado e pegado equivariante para cada subgrupo asémblanse nun funtor de Mackey, o cal é un presaxio dunha estrutura de espectro equivariante xenuíno conxectural.`,
      date: "2025",
      arxiv: "https://arxiv.org/abs/2501.06928",
      journalname: "Bulletin of the London Mathematical Society",
      journallink: "https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/blms.70181",
      link: "",
      writers: ["Mona Merling", "Ming Ng", "Julia Semikina", "Alba Sendón Blanco", "Lucas Williams"],
    },
     {
      title: `La conjetura de Andrews Curtis`,
      abstract: `Esta é unha adaptación do meu traballo de fin de grao, escrito baixo a supervisón de Enrique Macías Virgós e David Mosquera Lois.A conxectura de Andrews-Curtis foi proposta por James J. Andrews e Morton L. Curtis en 1965, é orixinalmente alxébrica e afirma que toda presentación balanceada do grupo trivial pode converterse (a través de transformacións de Andrews-Curtis) na presentación trivial. O noso obxectivo é mostrar dúas versións diferentes da conxectura de Andrews-Curtis, ambas cun enfoque topolóxico: unha para complexos simpliciais finitos e outra para posets finitos. Ademais, estableceremos a equivalencia entre elas.`,
      date: "2023",
      arxiv: "",
      journalname: "TEMat",
      journallink: "https://temat.es/articulo/2023-p1",
      link: "",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `Modeling the homotopy theory of spaces via posets`,
      abstract: `Este é o meu traballo de fin de máster, escrito baixo a supervisión de Javier J. Gutiérrez Marín. O obxectivo deste proxecto é estudar as nocións básicas das estruturas de modelos de Quillen coma unha ferramenta esencial en topoloxía alxébrica e teoría de homotopía abstracta. Na primeira parte, centrarémonos nos conceptos necesarios en teoría de categorías e teoría de homotopía para entender a noción de estrutura de modelos e algunhas construcións e ferramentas fundamentais neste encadre. A segunda parte tratará con exemplos particulares de estruturas de modelos. Concretamente, estudaremos a estrutura de modelos de Thomason na categoría de categorías pequenas e como se relaciona coa estrutura de modelos de Kan-Quillen na categoría de conxuntos simpliciais vía unha equivalencia de categorías homotópicas, aportando un modelo para a teoría de homotopía dos espazos topolóxicos. Finalmente, describiremos como a categoría de conxuntos parcialmente ordenados herda esta estrutura de modelos, ofrecendo aínda outro modelo para a teoría de homotopía dos espazos. Ademais, analizaremos a relación entre esta estrutura e a dos espazos T0 de Alexandroff.`,
      date: "2022",
      arxiv: "",
      journalname: "",
      jounallink: "",
      link: "https://diposit.ub.edu/items/0bfe9626-9c64-47cb-9502-4d384e78073d",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `A conxectura de Andrews-Curtis`,
      abstract: `Este é o meu traballo de fin de grao, escrito baixo a supervisón de Enrique Macías Virgós e David Mosquera Lois.A conxectura de Andrews-Curtis foi proposta por James J. Andrews e Morton L. Curtis en 1965, é orixinalmente alxébrica e afirma que toda presentación balanceada do grupo trivial pode converterse (a través de transformacións de Andrews-Curtis) na presentación trivial. O noso obxectivo é mostrar dúas versións diferentes da conxectura de Andrews-Curtis, ambas cun enfoque topolóxico: unha para complexos simpliciais finitos e outra para posets finitos. Ademais, estableceremos a equivalencia entre elas.`,
      date: "2021",
      arxiv: "",
      journalname: "",
      journallink: "",
      link: "https://minerva.usc.gal/entities/publication/8b88f269-6dd2-48aa-85db-b7d0fbd14212",
      writers: ["Alba Sendón Blanco"],
    },

  ],

  type_two_title: "",
  type_two_items: [],

  type_three_title: "",
  type_three_items: [],

  type_four_title: "",
  type_four_items: [],
};

const faResearchPageData = {
  title: "Charlas e pósters",
  content: `
    <div>
      <h4 style="font-size: 1.1rem "> Charlas invitadas </h4>
       <ul>
          <li>[2026] <a href="https://friday-fish.github.io/">Friday Fish Seminar</a>, Utrecht. <i>Cobordism of nested manifolds</i>. <a href="https://www.youtube.com/watch?v=f_wVdzI1K3k">Proba</a>.</li>
          <li>[2025] <a href="https://sites.google.com/view/scissorscongruenceandk-theory/home">Scissors Congruence and K-theory</a>, Philadelphia. <i>Scissors congruence K-theory for equivariant manifolds</i>, con Ming Ng e Lucas Williams. <a href="./files/philly.jpg">Proba</a>.</li>
          <li>[2025] <a href="https://www.math.ru.nl/~sagave/past-topics.html">Topology Intercity Seminar (TopICS)</a>, Amsterdam. <i>Scissors congruence K-theory for equivariant manifolds</i>.</li>
        </ul>
    </div>
      <div>
      <h4 style="font-size: 1.1rem "> Charlas contribuídas </h4>
       <ul>
          <li>[2026] <a href="https://www.math.ku.dk/english/calendar/events/ytm26/">Young Topologists Meeting</a>, Copenhagen. <i>Nested Pontryagin-Thom construction and nested boundaries</i>. <a href="./files/copenhagen.jpg">Proba</a>.</li>
          <li>[2025] <a href="https://blogs.upm.es/et25/">XIII Encuentro de Jóvenes Topólogos</a>, Madrid. <i>Teoría K-algebraica de cortado y pegado para variedades equivariantes</i>. <a href="./files/madrid.jpg">Proba</a>.</li>
          <li>[2025] <a href="https://www.math-stockholm.se/en/kalender/konferens/ytm2025-1.1350169">Young Topologists Meeting</a>, Stockholm. <i>Scissors congruence K-theory for equivariant manifolds</i>. <a href="./files/stockholm.jpg">Proba</a>.</li>
          <li>[2023] <a href="https://web.ua.es/es/encuentrostopologia/pagina-de-inicio-del-sitio.html">XI Encuentro de Jóvenes Topólogos</a>, Alicante. <i>Cobordismo: clásico vs anidado</i>. <a href="./files/alicante.jpg">Proba</a>.</li>
          <li>[2023] <a href="https://rsmejovenes23.unileon.es/">VI Congreso de Jóvenes Investigadores de la RSME</a>, León. <i>Una introducción (muy introductoria) a la (co)homología de intersección</i>.</li>
          <li>[2021] IX Encuentro de Jóvenes Topólogos, Sevilla. <i>La conjetura de Andrews-Curtis</i>.</li>
        </ul>
    </div>
    <div>
      <h4 style="font-size: 1.1rem "> Charlas en seminarios locais </h4>
       <ul>
          <li>[2026] <a href="https://www.cta2.nl/spectral-sequence-reading-seminar/">Spectral Sequences Seminar</a>, Amsterdam. <i>Quillen's argument for homological stability</i>.</li>
          <li>[2026] <a href="https://www.few.vu.nl/~trt800/arbeitsgemeinschaft.html">CTA2 Arbeitsgemeinschaft</a>, Amsterdam. <i>Bananas</i>.</li>
          <li>[2025] Preprint presentation, Copenhagen. <i>The Barrat-Priddy-Quillen theorem via scanning methods</i>.</li>
          <li>[2025] Coolloquium, Copenhagen. <i>Cool stuff (a.k.a. manifolds)</i>.</li>
          <li>[2025] Preprint presentation, Copenhagen. <i>Framed configuration spaces and exotic spheres</i>.</li>
          <li>[2024] <a href="https://sites.google.com/view/miguelbarata/seminar/factorisation-homology-seminar">Factorisation Homology Seminar </a>, Utrecht. <i>oo-categories of manifolds and sheaves</i>.</li>
          <li>[2024] <a href="https://www.math.ru.nl/~sagave/east2024/">European Autumn School in Topology</a>, Utrecht. Preparatory talk: <i>Algebraic K-theory</i>.</li>
          <li>[2023] <a href="https://www.few.vu.nl/~trt800/arbeitsgemeinschaft.html"> Arbeitsgemeinschaft Differential Topology</a>, Amsterdam. <i>Bananas</i>.</li>
          <li>[2023] Nutshell Seminar, Amsterdam. <i>Bananas in a nutshell</i>.</li>
          <li>[2023] <a href="https://www.few.vu.nl/~trt800/arbeitsgemeinschaft.html"> Arbeitsgemeinschaft Differential Topology</a>, Amsterdam. <i>The stability theorem</i>.</li>
          <li>[2023] Topology Workshop, Universidade de Santiago de Compostela. <i>A (very introductory) introduction to intersection (co)homology</i>.</li>
          <li>[2022] Seminario CIMAGROUP, Universidad de Sevilla. <i>Una introducción (muy introductoria) a la (co)homología de intersección</i> and <i>Sobre la zona de duda</i>.</li>
          <li>[2022] Seminario de Topoloxía, Universidade de Santiago de Compostela. <i>Modelando a teoría homotópica dos espazos vía posets</i>.</li>
        </ul>
    </div>
    <div>
      <h4 style="font-size: 1.1rem "> Pósters contribuídos </h4>
       <ul>
          <li>[2024] VU Amsterdam Research fair. <i>Arts and crafts with manifolds</i>. Gañadora dun dos premios. <a href="https://www.cta2.nl/poster-prices-for-riya-dogra-and-alba-sendon-blanco/">Proba</a>.</li>
          <li>[2023] <a href="https://web.ua.es/es/encuentrostopologia/pagina-de-inicio-del-sitio.html">XXIX Encuentro de Topología</a>, Madrid. <i>Cobordismo: clásico vs anidado</i>.</li>
          <li>[2022] <a href="https://sites.google.com/view/aatrn-poster-session/prior-poster-sessions/january-2022-posters">Applied Algebraic Topology Research Network poster session</a>, online. <i>Simplicial-map neural networks and proposals for the improvement of its efficiency</i>.</li>
          <li>[2022] <a href="https://www.math.ku.dk/english/calendar/events/ytm2022/">Young Topologists Meeting</a>, Copenhagen. <i>Simple homotopy type and rings</i>.</li>
          <li>[2021] XXVII Encuentro de Topología, Sevilla. <i>Simplicial-map neural networks y propuestas para la mejora de su eficiencia</i>.</li>
        </ul>
    </div>



  `,
};


const faJobsPageData = {
  title: " سوابق شغلی ",
  content: `
    <div> Blablabla </div>
    `,
};

// ---------- More page data
const faMorePageData = {
  title: "More",
  content: `
    <div>
       <ul>
          <li> Blablabla. </li>
        </ul>
    </div>   

  `,
};
