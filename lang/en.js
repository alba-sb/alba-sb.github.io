// ---------- Navbar titles
const enNavbarData = {
  title: " Alba Sendón Blanco ",
  Home: "Home",
  publications: "publications",
  Research: "Research",
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
  type_one_title: "Journal Papers",

  type_one_items: [
    {
      title: `Cobordism of nested manifolds.`,
      abstract: `We study cobordisms of nested manifolds, which are manifolds together with embedded submanifolds, which can themselves have embedded submanifolds, etc. We identify a nested analog of the Pontryagin-Thom construction. Moreover, when the highest-dimensional manifold has a normal bundle with a framed direction, we find spaces homotopy equivalent to the nested Pontryagin-Thom spaces that relate nested manifolds up to cobordism with links up to cobordism. This gives rise to nested cobordism invariants coming from previously studied cobordism invariants of links. In addition, we provide an alternative proof of a result by Wall about the splitting of the stable nested cobordism groups.`,
      date: "2026",
      link: "https://arxiv.org/abs/2512.18277",
      github: "",
      download: "",
      writers: ["Alba Sendón Blanco".],
    },
    {
      title: `Scissors congruence K-theory for equivariant manifolds`,
      abstract: `We introduce a scissors congruence K-theory spectrum which lifts the equivariant scissors congruence groups for compact G-manifolds with boundary, and we show that on π0 this is the source of a spectrum level lift of the Burnside ring valued equivariant Euler characteristic of a compact G-manifold. We also show that the equivariant scissors congruence groups for varying subgroups assemble into a Mackey functor, which is a shadow of a conjectural higher genuine equivariant structure.`,
      date: "2025",
      link: "",
      github: "https://arxiv.org/abs/2501.06928",
      writers: ["Mona Merling", "Ming Ng", "Julia Semikina", "Alba Sendón Blanco", "Lucas Willliams".],
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
  title: "Research",
  content: `
    <div class='research_content'>
        <p> My research goal is to combine the three major sub-fields of the Computational Social Science, including Social Media Data Analysis, Network Analysis, and Agent-based Modeling, to study various social science problems. Below you can find a summary of my past and current projects.</p>
        <br />
        <h4 style="font-size: 1.1rem "> Identifying and Characterizing US Domestic Ideological Extremists </h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
        <img src='../files/images/research.png' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra  accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat <br /> imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet <br /> lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
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
