const faNavbarData = {
  title: "Alba Sendón Blanco",
  Home: "Inicio",
  publications: "Escritos",
  Research: "Exposicións",
  Jobs: "Conferencias",
  Contact: "Máis",
};

const faHomePageData = {
  name: " Alba Sendón Blanco ",
  jobTitle: " Estudante de doutoramento, Vrije Universiteit Amsterdam ",
  home_title: "Sobre min",
  home_content: `
  <div>
    <p> Ola! Son Alba, unha estudante de doutoramento na Vrije Universiteit, en Amsterdam, baixo a supervisón de <a href="https://www.reneehoekzema.nl/">Renee Hoekzema</a> e <a href="https://www.few.vu.nl/~trt800/">Thomas Rot</a>. </p>
    <p> Os meus intereses de investigación céntranse na topoloxía alxébrica de variedades. En particular, gústame estudar coboerdismos entre variedades aniñadas (variedades con variedades dentro), e tamén cortar e pegar variedades equivariantes.</p>
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
      title: `Cobordism of nested manifolds.`,
      abstract: `Estudamos cobordisms de variedades aniñadas, que son variedades con subvariedades mergulladas, que poden á súa vez ter subvariedades aniñadas, etc. Identificamos un análogo da construción de Pontryagin-Thom para variedades aniñadas. Ademais, cando a variedade de maior dimensión ten un fibrado normal cunha dirección enmarcada, atopamos espazos homotópicamente equivalentes ós espazos de Pontryagin-Thom aniñados que relacionan as variedades aniñadas salvo cobordismo con enlaces salvo cobordismo. Isto dá lugar a invariantes de cobordismo aniñado que veñen de invariantes de cobordismo de enlaces previamente estudadas. Tamén aportamos unha proba alternativa dun resultado de Wall sobre a escisión dos grupos de cobordismo aniñado estable.`,
      date: "2025",
      arxiv: "https://arxiv.org/abs/2512.18277",
      journalname: "Topology and its applications",
      journallink: "https://www.sciencedirect.com/science/article/pii/S0166864126001665",
      link: "",
      writers: ["Alba Sendón Blanco"],
    },
   {
      title: `Scissors congruence K-theory for equivariant manifolds.`,
      abstract: `We introduce a scissors congruence K-theory spectrum which lifts the equivariant scissors congruence groups for compact G-manifolds with boundary, and we show that on π0 this is the source of a spectrum level lift of the Burnside ring valued equivariant Euler characteristic of a compact G-manifold. We also show that the equivariant scissors congruence groups for varying subgroups assemble into a Mackey functor, which is a shadow of a conjectural higher genuine equivariant structure.`,
      date: "2025",
      arxiv: "https://arxiv.org/abs/2501.06928",
      journalname: "Bulletin of the London Mathematical Society",
      journallink: "https://londmathsoc.onlinelibrary.wiley.com/doi/10.1112/blms.70181",
      link: "",
      writers: ["Mona Merling", "Ming Ng", "Julia Semikina", "Alba Sendón Blanco", "Lucas Williams"],
    },
     {
      title: `La conjetura de Andrews Curtis`,
      abstract: `This is an adaptation of my bachelor thesis, written under the supervision of Enrique Macías Virgós and David Mosquera Lois. The Andrews-Curtis conjecture was proposed by James J. Andrews and Morton L. Curtis in 1965, is originally algebraic and states that every balanced presentation of the trivial group can become (through Andrews-Curtis transformations) the trivial presentation. Our aim is to show two different versions of the Andrews-Curtis conjecture, both of them from a topological point of view: one for finite simplicial complexes and another one for finite posets. Furthermore, we will establish the equivalence between them.`,
      date: "2023",
      arxiv: "",
      journalname: "TEMat",
      journallink: "https://temat.es/articulo/2023-p1",
      link: "",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `Modeling the homotopy theory of spaces via posets`,
      abstract: `This is my master thesis, written under the supervision of Javier J. Gutiérrez Marín. The aim of this project is to study the basics of Quillen model structures as an essential tool in algebraic topology and abstract homotopy theory. In the first part, we will focus on the necessary background on category theory and homotopy theory in order to understand the notion of model structure and some fundamental constructions and tools within this framework. The second part will deal with particular examples of model structures. Namely, we will study Thomason's model structure on the category of small categories and how it relates to Kan-Quillen's model structure on simplicial sets via an equivalence of homotopy categories, providing a model for the homotopy theory of topological spaces. Finally, we will describe how the category of partially ordered sets inherits this model structure, offering yet another model for the homotopy theory of spaces. Moreover, we will analyze the relation between this structure and T0 Alexandroff spaces.`,
      date: "2022",
      arxiv: "",
      journalname: "",
      jounallink: "",
      link: "https://diposit.ub.edu/items/0bfe9626-9c64-47cb-9502-4d384e78073d",
      writers: ["Alba Sendón Blanco"],
    },
    {
      title: `A conxectura de Andrews-Curtis`,
      abstract: `This is my bachelor thesis, written under the supervision of Enrique Macías Virgós and David Mosquera Lois. The Andrews-Curtis conjecture was proposed by James J. Andrews and Morton L. Curtis in 1965, is originally algebraic and states that every balanced presentation of the trivial group can become (through Andrews-Curtis transformations) the trivial presentation. Our aim is to show two different versions of the Andrews-Curtis conjecture, both of them from a topological point of view: one for finite simplicial complexes and another one for finite posets. Furthermore, we will establish the equivalence between them.`,
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
  title: " تحقیقات ",
  content: `
    <div class='research_content'>
        <p>هدف تحقیق من ترکیب سه زیر زمینه اصلی علوم اجتماعی محاسباتی، از جمله تجزیه و تحلیل داده های رسانه های اجتماعی، تجزیه و تحلیل شبکه، و مدل سازی مبتنی بر عامل، برای مطالعه مسائل مختلف علوم اجتماعی است. در زیر می توانید خلاصه ای از پروژه های گذشته و فعلی من را مشاهده کنید. </p>
        <h2> شناسایی و شناسایی افراط گرایان ایدئولوژیک داخلی ایالات متحده </h2>
        <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. </p>
        <img src='../files/images/research.png' />
        <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
    </div>
  `,
};

const faJobsPageData = {
  title: " سوابق شغلی ",
  content: `
    <div> Blablabla </div>
    `,
};
