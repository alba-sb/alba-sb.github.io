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
          <li>(2026) <a href="https://friday-fish.github.io/">Link</a>, place. <i>``Talk''</i>.</li>
          <li>(2025) Talk.</li>
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
