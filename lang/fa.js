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
  type_one_title: "Publicacións e escritos",

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
      title: `La conjetura de Andrews Curtis.`,
      abstract: `Esta é unha adaptación do meu traballo de fin de grao, escrito baixo a supervisón de Enrique Macías Virgós e David Mosquera Lois.A conxectura de Andrews-Curtis foi proposta por James J. Andrews e Morton L. Curtis en 1965, é orixinalmente alxébrica e afirma que toda presentación balanceada do grupo trivial pode converterse (a través de transformacións de Andrews-Curtis) na presentación trivial. O noso obxectivo é mostrar dúas versións diferentes da conxectura de Andrews-Curtis, ambas cun enfoque topolóxico: unha para complexos simpliciais finitos e outra para posets finitos. Ademais, estableceremos a equivalencia entre elas.`,
      date: "2023",
      arxiv: "",
      journalname: "TEMat",
      journallink: "https://temat.es/articulo/2023-p1",
      link: "",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `Modeling the homotopy theory of spaces via posets (Modelando a teoría de homotopía dos espazos vía posets).`,
      abstract: `Este é o meu traballo de fin de máster, escrito baixo a supervisión de Javier J. Gutiérrez Marín. O obxectivo deste proxecto é estudar as nocións básicas das estruturas de modelos de Quillen coma unha ferramenta esencial en topoloxía alxébrica e teoría de homotopía abstracta. Na primeira parte, centrarémonos nos conceptos necesarios en teoría de categorías e teoría de homotopía para entender a noción de estrutura de modelos e algunhas construcións e ferramentas fundamentais neste encadre. A segunda parte tratará con exemplos particulares de estruturas de modelos. Concretamente, estudaremos a estrutura de modelos de Thomason na categoría de categorías pequenas e como se relaciona coa estrutura de modelos de Kan-Quillen na categoría de conxuntos simpliciais vía unha equivalencia de categorías homotópicas, aportando un modelo para a teoría de homotopía dos espazos topolóxicos. Finalmente, describiremos como a categoría de conxuntos parcialmente ordenados herda esta estrutura de modelos, ofrecendo aínda outro modelo para a teoría de homotopía dos espazos. Ademais, analizaremos a relación entre esta estrutura e a dos espazos T0 de Alexandroff.`,
      date: "2022",
      arxiv: "",
      journalname: "",
      jounallink: "",
      link: "https://diposit.ub.edu/items/0bfe9626-9c64-47cb-9502-4d384e78073d",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `A conxectura de Andrews-Curtis.`,
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
  title: "Conferencias e seminarios",
  content: `
    <div>
       <ul>
          <li> [2023-26] <a href="https://www.few.vu.nl/~trt800/ddtg.html">Dutch Differential Topology and Geometry Seminar</a>. </li>
          <li> [2023-26] <a href="https://www.few.vu.nl/~trt800/arbeitsgemeinschaft.html">Arbeitsgemeinschaft Differential Topology - CTA2 Arbeitsgemeinschaft</a>, Vrije Universiteit Amsterdam.</li>
          <li> [2023-26] <a href="https://sites.google.com/view/general-mathematics-colloquium/home">General Mathematics Colloquium</a>, Vrije Universiteit Amsterdam.</li>
          <li> [2023-26] Nutshell seminar, Vrije Universiteit Amsterdam.</li>
          <li> [2023-26] <a href="https://www.math.ru.nl/~sagave/past-topics.html">Topology Intercity Seminar (TopICS)</a>.</li>
          <li> [2026] <a href="https://sites.google.com/vu.nl/cta2spatialstructures/">Conference on Spatial Structures</a>, VU Amsterdam.</li>
          <li> [2026] <a href="https://math-events.uni-bonn.de/event/917/">Young Women in Geometric Topology</a>, Hausdorff Institute (Bonn).</li>
          <li> [2026] <a href="https://www.math.ku.dk/english/calendar/events/ytm26/">Young Topologists Meeting</a>, Copenhagen.</li>
          <li> [2026] <a href="https://sites.google.com/view/european-talbot/2026-workshop">European Talbot Workshop - Algebraic and Geometric Surgery</a>, Kolding.</li>
          <li> [2026] <a href="https://vu.nl/en/about-vu/more-about/applied-topology-day2026">Applied Topology Day</a>, Vrije Universiteit Amsterdam.</li>
          <li> [2026] <a href="https://www.cta2.nl/cta-2-lectures-2026/">CTA2 Lectures</a>, Vrije Universiteit Amsterdam.</li>
          <li> [2026] <a href="https://www.mpim-bonn.mpg.de/hamfc">Interactions between higher algebra, manifolds and functor calculus</a>, MPIM Bonn.</li>
          <li> [2025-26] <a href="https://sites.google.com/view/mhtrt/home"> Manifolds, Homotopy Theory and Related Topics seminar</a>, online.</li>
          <li> [2026] <a href="https://www.uu.nl/en/research/utrecht-geometry-centre/higher-geometric-structures-along-the-lower-rhine">Higher Geometric Structures along the Lower Rhine</a>, Utrecht.</li>
          <li> [2026] <a href="https://sites.google.com/view/vigneshsubramanian/seminars/lectures-on-geometric-topology">Lectures on Geometric Topology</a>, Utrecht.</li>
          <li> [2026] <a href="https://sites.google.com/view/francescapratali/two-lectures-on-infinity-operads">Lectures on oo-operads</a>, Utrecht.</li>
          <li> [2026] <a href="https://www.cta2.nl/spectral-sequence-reading-seminar/">Spectral Sequences Seminar</a>, Vrije Universiteit Amsterdam.</li>
          <li> [2025] <a href="https://www.uu.nl/en/research/utrecht-geometry-centre/research/algebraic-topology/daniel-kan-memorial-lectures">Kan Lectures</a>, Utrecht.</li>
          <li> [Winter 2025] Algebra and Topology Seminar, Copenhagen.</li>
          <li> [Winter 2025] Coolloquium, Copenhagen.</li>
          <li> [2025] <a href="https://www.math.ku.dk/english/calendar/events/nancy-hingston-celebration/">Nancy Hingston Celebration</a>, Copenhagen.</li>
          <li> [2025] <a href="https://blogs.upm.es/et25/">XXXI Encuentro de Topología</a>, Madrid.</li>
          <li> [2025] <a href="https://blogs.upm.es/et25/">XIII Encuentro de Jóvenes Topólogos</a>, Madrid.</li>
          <li> [2025] <a href="https://www.birs.ca/events/2025/5-day-workshops/25w5402">Equivariant Topological Quantum Field Theory</a>, Oaxaca.</li>
          <li> [2025] <a href="https://sites.google.com/view/scissorscongruenceandk-theory/home?pli=1&authuser=0">Scissors Congruence and K-theory</a>, Philadelphia.</li>
          <li> [2025] <a href="https://www.math-stockholm.se/en/kalender/konferens/ytm2025-1.1350169">Young Topologists Meeting</a>, Stockholm.</li>
          <li> [2025] <a href="https://sites.google.com/view/talbotworkshop/past-talbots/talbot-2025">Talbot Workshop - Homological stability</a>, Cassopolis.</li>
          <li> [2025] <a href="https://www.newton.ac.uk/event/ehtw03/">New horizons for equivariance in homotopy theory</a>, Isaac Newton Institute (Cambridge).</li>
          <li> [2025] <a href="https://www.math.ku.dk/english/calendar/events/cobordism-categories_copy/">Masterclass in cobordism categories</a>, Copenhagen.</li>
          <li> [2025] <a href="https://jovenes2025.rsme.es/">VII Congreso de Jóvenes Investigadores de la RSME</a>, Bilbao.</li>
          <li> [2024] <a href="https://sites.google.com/view/miguelbarata/seminar/factorisation-homology-seminar?authuser=0">Factorisation homology seminar</a>, VU-UU.</li>
          <li> [2024] <a href="https://www.math.ru.nl/~sagave/east2024/">European Autumn School in Topology</a>, Utrecht.</li>
          <li> [2024] <a href="https://www.math.ku.dk/english/calendar/events/topology-of-moduli-spaces">Topology of moduli spaces</a>, Copenhagen.</li>
          <li> [2024] Collaborative research workshop on K-theory and scissors congruence, Vanderbilt University.</li>
          <li> [2024] <a href="https://dkasprowski.github.io/Conference/">The interplay of Geometric Group Theory and K-theory</a>, Southampton.</li>
          <li> [2024] <a href="https://algtoppr.github.io/2024.html">Algebraic Structures in Topology</a>, Puerto Rico.</li>
          <li> [2024] <a href="https://www.math.ku.dk/english/calendar/events/hmmt/">Masterclass on homotopical methods in manifold theory</a>, Copenhagen.</li>
          <li> [2024] <a href="https://mathematischcongres.nl/nmc-2024/">Nederlands Matematisch Congres</a>, Lunteren.</li>
          <li> [2022-2024] <a href="https://seminari-simba.github.io/en/index.html">Seminari Informal de Matemàtiques de Barcelona (SIMBa)</a>.</li>
          <li> [2024] <a href="https://www.uni-muenster.de/FB10/Service/show_article.shtml?id=9980&brettid=8">Colloquium in honor of Michael Weiss</a>, Münster.</li>
          <li> [2023] Spaces of manifolds: algebraic and geometric approaches, online.</li>
          <li> [2023] <a href="https://web.ua.es/es/encuentrostopologia/pagina-de-inicio-del-sitio.html">XXIX Encuentro de Topología</a>, Alicante.</li>
          <li> [2023] <a href="https://web.ua.es/es/encuentrostopologia/pagina-de-inicio-del-sitio.html">XI Encuentro de Jóvenes Topólogos</a>, Alicante.</li>
          <li> [2023] <a href="https://redshift.mathi.uni-heidelberg.de/">Fall school in Algebraic K-theory and Redshift</a>, Mainz.</li>
          <li> [2023] <a href="https://archiveweb.epfl.ch/ytm2023.epfl.ch/">Young Topologists Meeting</a>, Lausanne.</li>
          <li> [2023] <a href="https://sites.google.com/view/grootopology/previous-years/groot-2023">GROOT summer seminar</a>, online.</li>
          <li> [2023] <a href="https://www.math.ru.nl/hkt-conference/">Homotopy theory, K-theory and trace methods</a>, Radbout Universiteit.</li>
          <li> [2023] <a href="https://rsmejovenes23.unileon.es/">VI Congreso de Jóvenes Investigadores de la RSME</a>, León.</li>
          <li> [2022-2023] Seminario de Topoloxía, Unviersidade de Santiago de Compostela.</li>
          <li> [2022-2023] Seminario de Iniciación á Investigación, Universidade de Santiago de Compostela.</li>
          <li> [2022] <a href="https://www.rsmeuma2022.uma.es/">II Encuentro RSME-UMA</a>, Ronda.</li>
          <li> [2022] "An allegedly somewhat friendly introduction to infinity-operads", online.</li>
          <li> [2022] <a href="https://icms.ac.uk/archive/workshop/classifying-spaces-in-homotopy-theory-in-honour-of-ran-levis-60th-birthday/">Classifying spaces in homotopy theory: in honour of Ran Levi's 60th birthday</a>, online.</li>
          <li> [2022] <a href="https://www.math.ku.dk/english/calendar/events/ytm2022/">Young Topologists Meeting</a>, Copenhagen.</li>
          <li> [2022] Graduate school on Geometric Group Theory and Low Dimensional Topology, ICMAT.</li>
          <li> [2022] Topological machine learning seminar, Universitat de Barcelona.</li>
          <li> [2022] Algebraic geometry seminar, Universitat de Barcelona.</li>
          <li> [2021] XXVII Encuentro de Topología, Sevilla.</li>
          <li> [2021] IX Encuentro de Jóvenes Topólogos, Sevilla.</li>
          <li> [2021] "Versión combinatoria de algunos invariantes topológicos", Sevilla.</li>
          <li> [2012-2020] <a href="https://www.usc.gal/gl/servizos/area/normalizacion-linguistica/promover/xornadas-seminarios/matematicas-habelas-hainas-seguimos-querendo-contarchas">Matemáticas, habelas hainas!</a>, Universidade de Santiago de Compostela.</li>
        </ul>
    </div>   

  `,
};

// ---------- More page data
const faMorePageData = {
  title: "Organizción, comités e máis",
  content: `
    <div>
       <ul>
          <li> En xaneiro de 2025, fun integrante do comité organizador da sesión paralela <a href="https://jovenes2025.rsme.es/paralelaGT06.html">"Métodos categóricos y homotópicos"</a> do <a href="https://jovenes2025.rsme.es/paralelaGT06.html">VII Congreso de Jóvenes Investigadores de la RSME</a>, Bilbao. <a href="./files/bilbao.jpg">Proba</a>.</li>
          <li> En xullo de 2023, fun integrante do comité organizador do <a href="https://easychair.org/cfp/EGC23">XX Encuentro Español de Geometría Computacional</a>, Universidade de Santiago de Compostela.</li>
          <li> Son integrante do comité organizdador do evento <a href="https://platformwiskunde.nl/2025/01/a-phd-is-that-for-me-2/">A PhD, is that for me?</a>, que ten lugar na Vrije Universiteit Amsterdam en xaneiro 2026 e febreiro 2027.</li>
          <li> Canda <a href="https://sites.google.com/view/miguelbarata/homepage">Miguel Barata</a>, organizamos o <a href="https://sites.google.com/view/miguelbarata/seminar/factorisation-homology-seminar?authuser=0">Factorization homology seminar</a>, que tivo lugar no outono de 2024 entre a Vrije Universiteit Amsterdam e a Universiteit Utrecht.</li>
          <li> Son integrante do comité de doutoramento do departamento de Matemáticas da Vrije Universiteit Amsterdam. Este comité encárgase de facer o posible para que os estudantes de doutoramento no deparmento se adhiran ás regras a nivel da facultade, así como de implementar varias medidas relacionadas coa traxectoria de doutoramento: incorporación, formación, pautas de ensino...</li>
          <li> Fun integrante da Comissió de Qualitat na Universitat de Barcelona. Esta comisión encargouse de preparar o Departamento de Matemáticas e Enxeñería Informática para unha avaliación de calidade en 2021.</li>
          <li> Fixen varios cursos de comunicación: “A redacción científica” e “Falar en público”, do Servizo de Normalización Lingüística (USC), de 25h cada un, e Young KWG Science Communication workshop.</li>
        </ul>
    </div>   

  `,
};
