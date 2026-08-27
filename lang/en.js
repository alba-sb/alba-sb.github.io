// ---------- Navbar titles
const enNavbarData = {
  title: " Alba Sendón Blanco ",
  Home: "Home",
  publications: "Publications",
  Research: "Talks",
  Jobs: "Jobs",
  Contact: "Contact",
};

// ---------- Home page data
const enHomePageData = {
  name: " Alba Sendón Blanco ",
  jobTitle: " PhD student, Vrije Universiteit Amsterdam ",
  home_title: "About me",
  home_content: `
  <div>
    <p> Hello! I am Alba, a PhD student at the Vrije Universiteit, in Amsterdam, working under the supervision of <a href="https://www.reneehoekzema.nl/">Renee Hoekzema</a> and <a href="https://www.few.vu.nl/~trt800/">Thomas Rot</a>. </p>
    <p> My research interests lie in the algebraic topology of manifolds. Namely, I like studying cobordisms between nested manifolds (manifolds with manifolds inside), as well as cutting and pasting equivariant manifolds.</p>
    <p> Before my PhD, I studied a Master in Advanced Mathematics at Universitat de Barcelona and a Grao en Matemáticas at Universidade de Santiago de Compostela.</p>
    <p>On the academic year 2026/2027, I am on the job market. My CV is available upon request.</p>
    <h2 class='title'> News? </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh  </p>
  </div>
  `,
};



// ---------- Publications page data
const enPublicationsPageData = {
  type_one_title: "Publications and writing",

  type_one_items: [
    {
      title: `Cobordism of nested manifolds.`,
      abstract: `We study cobordisms of nested manifolds, which are manifolds together with embedded submanifolds, which can themselves have embedded submanifolds, etc. We identify a nested analog of the Pontryagin-Thom construction. Moreover, when the highest-dimensional manifold has a normal bundle with a framed direction, we find spaces homotopy equivalent to the nested Pontryagin-Thom spaces that relate nested manifolds up to cobordism with links up to cobordism. This gives rise to nested cobordism invariants coming from previously studied cobordism invariants of links. In addition, we provide an alternative proof of a result by Wall about the splitting of the stable nested cobordism groups.`,
      date: "2025",
      link: "https://arxiv.org/abs/2512.18277",
      github: "",
      download: "",
      writers: ["Alba Sendón Blanco"],
    },
   {
      title: `Scissors congruence K-theory for equivariant manifolds.`,
      abstract: `We introduce a scissors congruence K-theory spectrum which lifts the equivariant scissors congruence groups for compact G-manifolds with boundary, and we show that on π0 this is the source of a spectrum level lift of the Burnside ring valued equivariant Euler characteristic of a compact G-manifold. We also show that the equivariant scissors congruence groups for varying subgroups assemble into a Mackey functor, which is a shadow of a conjectural higher genuine equivariant structure.`,
      date: "2025",
      link: "https://arxiv.org/abs/2501.06928",
      github: "",
      download: "",
      writers: ["Mona Merling", "Ming Ng", "Julia Semikina", "Alba Sendón Blanco", "Lucas Williams"],
    },
     {
      title: `La conjetura de Andrews Curtis`,
      abstract: `This is an adaptation of my bachelor thesis, written under the supervision of Enrique Macías Virgós and David Mosquera Lois. The Andrews-Curtis conjecture was proposed by James J. Andrews and Morton L. Curtis in 1965, is originally algebraic and states that every balanced presentation of the trivial group can become (through Andrews-Curtis transformations) the trivial presentation. Our aim is to show two different versions of the Andrews-Curtis conjecture, both of them from a topological point of view: one for finite simplicial complexes and another one for finite posets. Furthermore, we will establish the equivalence between them.`,
      date: "2023",
      link: "https://temat.es/articulo/2023-p1",
      github: "",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `Modeling the homotopy theory of spaces via posets`,
      abstract: `This is my master thesis, written under the supervision of Javier J. Gutiérrez Marín. The aim of this project is to study the basics of Quillen model structures as an essential tool in algebraic topology and abstract homotopy theory. In the first part, we will focus on the necessary background on category theory and homotopy theory in order to understand the notion of model structure and some fundamental constructions and tools within this framework. The second part will deal with particular examples of model structures. Namely, we will study Thomason's model structure on the category of small categories and how it relates to Kan-Quillen's model structure on simplicial sets via an equivalence of homotopy categories, providing a model for the homotopy theory of topological spaces. Finally, we will describe how the category of partially ordered sets inherits this model structure, offering yet another model for the homotopy theory of spaces. Moreover, we will analyze the relation between this structure and T0 Alexandroff spaces.`,
      date: "2022",
      link: "https://diposit.ub.edu/items/0bfe9626-9c64-47cb-9502-4d384e78073d",
      github: "",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `A conxectura de Andrews-Curtis`,
      abstract: `This is my bachelor thesis, written under the supervision of Enrique Macías Virgós and David Mosquera Lois. The Andrews-Curtis conjecture was proposed by James J. Andrews and Morton L. Curtis in 1965, is originally algebraic and states that every balanced presentation of the trivial group can become (through Andrews-Curtis transformations) the trivial presentation. Our aim is to show two different versions of the Andrews-Curtis conjecture, both of them from a topological point of view: one for finite simplicial complexes and another one for finite posets. Furthermore, we will establish the equivalence between them.`,
      date: "2021",
      link: "https://minerva.usc.gal/entities/publication/8b88f269-6dd2-48aa-85db-b7d0fbd14212",
      github: "",
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

// ---------- Research page data
const enResearchPageData = {
  title: "Talks",
  content: `
    <div>
      <h4 style="font-size: 1.1rem "> Invited talks </h4>
       <ul>
          <li>[2026] <a href="https://friday-fish.github.io/">Friday Fish Seminar</a>, Utrecht. <i>Cobordism of nested manifolds</i>.<a href="https://www.youtube.com/watch?v=f_wVdzI1K3k"> Proof</a>.</li>
          <li>[2025] <a href="https://sites.google.com/view/scissorscongruenceandk-theory/home">Scissors Congruence and K-theory</a>, Philadelphia. <i>Scissors congruence K-theory for equivariant manifolds</i>, with Ming Ng and Lucas Williams.</li>
          <li>[2025] <a href="https://www.math.ru.nl/~sagave/past-topics.html">Topology Intercity Seminar (TopICS)</a>, Amsterdam. <i>Scissors congruence K-theory for equivariant manifolds</i>.</li>
          <li>[2023] Topology Workshop, Universidade de Santiago de Compostela. <i>A (very introductory) introduction to intersection (co)homology</i>.</li>
          <li>[2022] Seminario CIMAGROUP, Universidad de Sevilla. <i>Una introducción (muy introductoria) a la (co)homología de intersección</i> and <i>Sobre la zona de duda</i>.</li>
          <li>[2022] Seminario de Topoloxía, Universidade de Santiago de Compostela. <i>Modelando a teoría homotópica dos espazos vía posets</i>.</li>
          <li>[2021] Círculo matemático virtual, online. <i>Topological Data Analysis</i>.<a href="https://www.instagram.com/p/CWLEvR1Ij2A/?utm_source=ig_web_copy_link&igsi=NTc4MTIwNjQ2YQ=="> Proof</a>.</li>
        </ul>
    </div>
      <div>
      <h4 style="font-size: 1.1rem "> Contributed talks </h4>
       <ul>
          <li>[2026] <a href="https://www.math.ku.dk/english/calendar/events/ytm26/">Young Topologists Meeting</a>, Copenhagen. <i>Nested Pontryagin-Thom construction and nested boundaries</i>.<a href="https://www.youtube.com/watch?v=f_wVdzI1K3k"> Proof</a>.</li>
          <li>[2025] <a href="https://blogs.upm.es/et25/">XIII Encuentro de Jóvenes Topólogos</a>, Madrid. <i>Teoría K-algebraica de cortado y pegado para variedades equivariantes</i>.</li>
          <li>[2025] <a href="https://www.math-stockholm.se/en/kalender/konferens/ytm2025-1.1350169">Young Topologists Meeting</a>, Stockholm. <i>Scissors congruence K-theory for equivariant manifolds</i>.</li>
          <li>[2023] <a href="https://web.ua.es/es/encuentrostopologia/pagina-de-inicio-del-sitio.html">XI Encuentro de Jóvenes Topólogos</a>, Alicante. <i>Cobordismo: clásico vs anidado</i>.</li>
          <li>[2023] <a href="https://rsmejovenes23.unileon.es/">VI Congreso de Jóvenes Investigadores de la RSME</a>, León. <i>Una introducción (muy introductoria) a la (co)homología de intersección</i>.</li>
          <li>[2021] IX Encuentro de Jóvenes Topólogos, Sevilla. <i>La conjetura de Andrews-Curtis</i>.</li>
        </ul>
    </div>
    <div>
      <h4 style="font-size: 1.1rem "> Seminar talks </h4>
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
        </ul>
    </div>
    <div>
      <h4 style="font-size: 1.1rem "> Contributed posters </h4>
       <ul>
          <li>[2024] VU Amsterdam Research fair. <i>Arts and crafts with manifolds</i>. Won one of the prizes. <a href="https://www.cta2.nl/poster-prices-for-riya-dogra-and-alba-sendon-blanco/">Proof</a>.</li>
          <li>[2023] <a href="https://web.ua.es/es/encuentrostopologia/pagina-de-inicio-del-sitio.html">XXIX Encuentro de Topología</a>, Madrid. <i>Cobordismo: clásico vs anidado</i>.</li>
          <li>[2022] <a href="https://sites.google.com/view/aatrn-poster-session/prior-poster-sessions/january-2022-posters">Applied Algebraic Topology Research Network poster session</a>, online. <i>Simplicial-map neural networks and proposals for the improvement of its efficiency</i>.</li>
          <li>[2022] <a href="https://www.math.ku.dk/english/calendar/events/ytm2022/">Young Topologists Meeting</a>, Copenhagen. <i>Simple homotopy type and rings</i>.</li>
          <li>[2021] XXVII Encuentro de Topología, Sevilla. <i>Simplicial-map neural networks y propuestas para la mejora de su eficiencia</i>.</li>
        </ul>
    </div>



  `,
};





// ---------- Jobs page data
const enJobsPageData = {
  title: "Jobs",
  items: [
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "20 April 2022",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2", "achievement 3"],
    },
    {
      title: `Job title`,
      company: "Company name",
      startData: "20 April 2019",
      endDate: "",
      location: "Berlin",
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus.",
      achievements: ["achievement 1", "achievement 2"],
    },
  ],
};
