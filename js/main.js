const $ = document;
//nav
const toggle = $.querySelector(".toggle");
const menu = $.querySelector(".menu");
const labels = $.querySelectorAll(".bi");
const menuMessages = $.querySelector(".menuMessages");

//menu
let menuMessageArray = [
  "MENU",
  "Turn back to Home page",
  "Do you like to know, Who I Am?",
  "You can see my SKILLS in this part",
  "If you wanna check my PORTFOLIO, click right there",
  "Need a designer? <br> Let's work together",
  "It's my Github page",
  "Welcome to MENU section",
];

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});
labels.forEach((label, idx) => {
  label.addEventListener("mouseenter", () => {
    menuMessages.style.opacity = "1";
    menuMessages.innerHTML = menuMessageArray[idx];
  });
  label.addEventListener("mouseleave", () => {
    menuMessages.style.opacity = "0";
    menuMessages.innerHTML = menuMessageArray[idx];
  });
});

//about
const aboutGoUp = $.querySelector(".about-go-up");
const aboutStrong = $.querySelector("#aboutStrong");

aboutGoUp.addEventListener("mouseenter", () => {
  aboutGoUp.classList.add("active-up");
  aboutStrong.style.opacity = 1;
});
aboutGoUp.addEventListener("mouseleave", () => {
  aboutGoUp.classList.remove("active-up");
  aboutStrong.style.opacity = 0;
});
aboutGoUp.addEventListener("click", () => {
  menuMessages.innerHTML = menuMessageArray[7];
});

//skills
const numberClass = $.querySelectorAll(".number");
const skillPercent = $.querySelector(".skill-percent").firstElementChild;
const skillsStrong = $.querySelector("#skillsStrong");
const skillsGoUp = $.querySelector(".skills-go-up");

numberClass.forEach((number) => {
  let numberImages = number.firstElementChild;
  let numberImagesPercent = numberImages.getAttribute("data-percent");
  numberImages.addEventListener("mouseenter", () => {
    skillPercent.innerHTML = numberImages.alt + " → " + numberImagesPercent;
    skillPercent.style.opacity = 1;
  });
  numberImages.addEventListener("mouseleave", () => {
    skillPercent.style.opacity = 0;
  });
});

skillsGoUp.addEventListener("mouseenter", () => {
  skillsGoUp.classList.add("active-up");
  skillsStrong.style.opacity = 1;
});
skillsGoUp.addEventListener("mouseleave", () => {
  skillsGoUp.classList.remove("active-up");
  skillsStrong.style.opacity = 0;
});
skillsGoUp.addEventListener("click", () => {
  menuMessages.innerHTML = menuMessageArray[7];
});


//portfolio
let designHover = $.querySelectorAll(".design-hover");
const portfolioStrong = $.querySelector("#portfolioStrong");
const portfolioGoUp = $.querySelector(".portfolio-go-up");

designHover.forEach((hover) => {
  let designHoverFirstChild = hover.firstElementChild;
  hover.addEventListener("mouseenter", () => {
    designHoverFirstChild.style.opacity = 0;
  });
  hover.addEventListener("mouseleave", () => {
    designHoverFirstChild.style.opacity = 1;
  });
});

portfolioGoUp.addEventListener("mouseenter", () => {
  portfolioGoUp.classList.add("active-up");
  portfolioStrong.style.opacity = 1;
});
portfolioGoUp.addEventListener("mouseleave", () => {
  portfolioGoUp.classList.remove("active-up");
  portfolioStrong.style.opacity = 0;
});
portfolioGoUp.addEventListener("click", () => {
  menuMessages.innerHTML = menuMessageArray[7];
});



//contact
const contactStrong = $.querySelector("#contactStrong");
const contactGoUp = $.querySelector(".contact-go-up");

contactGoUp.addEventListener("mouseenter", () => {
  contactGoUp.classList.add("active-up");
  contactStrong.style.opacity = 1;
});
contactGoUp.addEventListener("mouseleave", () => {
  contactGoUp.classList.remove("active-up");
  contactStrong.style.opacity = 0;
});
contactGoUp.addEventListener("click", () => {
  menuMessages.innerHTML = menuMessageArray[7];
});

//github
const githubStrong = $.querySelector("#githubStrong");
const githubGoUp = $.querySelector(".github-go-up");

githubGoUp.addEventListener("mouseenter", () => {
  githubGoUp.classList.add("active-up");
  githubStrong.style.opacity = 1;
});
githubGoUp.addEventListener("mouseleave", () => {
  githubGoUp.classList.remove("active-up");
  githubStrong.style.opacity = 0;
});
githubGoUp.addEventListener("click", () => {
  menuMessages.innerHTML = menuMessageArray[7];
});
