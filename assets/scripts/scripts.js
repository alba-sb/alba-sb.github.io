var lang = localStorage.getItem("lang");
var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // ---------- Language Handler
  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  if (lang === "fa") {
    document.getElementById("content_wrapper").classList.add("ltl_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").src =
        "../assets/images/icons/en.png";
      document.getElementById("languageText").innerText = "EN";
    }
  } else {
    document.getElementById("content_wrapper").classList.add("ltr_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").src =
        "../assets/images/icons/ir.png";
      document.getElementById("languageText").innerText = "GAL";
    }
  }

  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: globalData.email,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
      {
        name: globalData.orcid,
        active: globalData.orcid ? true : false,
        img: "../assets/images/icons/orcid.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;
    document.getElementById("home_job_title").innerText =
      lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
            `<li>
              <img src=${link.img} alt=${link.title} /> 
              ${
                link.url
                  ? `<a href=${link.url} target='_blank'>
                      ${link.name ? link.name : link.url} 
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
      )
      ;

    document.getElementById("home_title").innerText =
      lang === "en" ? enHomePageData.home_title : faHomePageData.home_title;
    document.getElementById("home_content").innerHTML =
      lang === "en" ? enHomePageData.home_content : faHomePageData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Publications page data
  const setPublicationData = (id, data) => {
    document.getElementById(id).innerHTML = data
      .map(
        (publication) =>
          `
        <div class='publications_item'>
        <div class='publications_header'>
          ${
            publication.writers.length > 0
              ? publication.writers
                  .map((writer) => `<span>${writer}</span>`)
                  .join(", ")
              : ""
          }
          ${publication.date ? `<span>(${publication.date}).</span>` : ""}
          <h2>${publication.title}</h2>
        </div>
        <p>${publication.abstract}</p>
        <ul class='publications_footer'>
          ${
            publication.arxiv &&
            `<li>
                <a href=${publication.arxiv} target="_blank"> ${
              lang === "en" ? "ArXiv" : "ArXiv"
            } </a>
              </li>`
          }
            ${
              publication.journalname &&
              `<li>
                  <a href=${publication.journallink} target="_blank">  ${
                lang === "en" ? publication.journalname : publication.journalname
              }</a>
                </li>`
            }
            ${
              publication.link &&
              `<li>
                  <a href=${publication.link} target="_blank">  ${
                lang === "en" ? "Link" : "Enlace"
              }</a>
                </li>`
            }
          
        </ul>
      </div>
     `
      )
      .join("");
  };

  function publicationsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Publications" : "Publicacións";

    document.getElementById("publications_type_one_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_one_title
        : faPublicationsPageData.type_one_title;

    setPublicationData(
      "publications_type_one_data",
      lang === "en"
        ? enPublicationsPageData.type_one_items
        : faPublicationsPageData.type_one_items
    );

    document.getElementById("publications_type_two_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_two_title
        : faPublicationsPageData.type_two_title;

    setPublicationData(
      "publications_type_two_data",
      lang === "en"
        ? enPublicationsPageData.type_two_items
        : faPublicationsPageData.type_two_items
    );

    document.getElementById("publications_type_three_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_three_title
        : faPublicationsPageData.type_three_title;

    setPublicationData(
      "publications_type_three_data",
      lang === "en"
        ? enPublicationsPageData.type_three_items
        : faPublicationsPageData.type_three_items
    );

    document.getElementById("publications_type_four_title").innerHTML =
      lang === "en"
        ? enPublicationsPageData.type_four_title
        : faPublicationsPageData.type_four_title;

    setPublicationData(
      "publications_type_four_data",
      lang === "en"
        ? enPublicationsPageData.type_four_items
        : faPublicationsPageData.type_four_items
    );
  }

  if (pathname === "/publications") {
    publicationsData();
  }

  // Research page data
  function researchData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Talks" : "Charlas";

    document.getElementById("research_title").innerHTML =
      lang === "en" ? enResearchPageData.title : faResearchPageData.title;
    document.getElementById("research_data").innerHTML =
      lang === "en" ? enResearchPageData.content : faResearchPageData.content;
  }

  if (pathname === "/talks") {
    researchData();
  }

  // Jobs page data
  function jobsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Conferences" : "Conferencias";

    document.getElementById("jobs_title").innerHTML =
      lang === "en" ? enJobsPageData.title : faJobsPageData.title;
    document.getElementById("jobs_data").innerHTML =
      lang === "en" ? enJobsPageData.content : faJobsPageData.content;
  }

  if (pathname === "/conferences") {
    jobsData();
  }

  // More page data
  function moreData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "More" : "Máis";

    document.getElementById("more_title").innerHTML =
      lang === "en" ? enMorePageData.title : faMorePageData.title;
    document.getElementById("more_data").innerHTML =
      lang === "en" ? enMorePageData.content : faMorePageData.content;
  }

  if (pathname === "/more") {
    moreData();
  }
});
