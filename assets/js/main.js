/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

/* ============= counter number animation ================ */
function animate(obj, initVal, lastVal, duration) {
  let startTime = null;

  //get the current timestamp and assign it to the currentTime variable
  let currentTime = Date.now();

  //pass the current timestamp to the step function
  const step = (currentTime) => {
    //if the start time is null, assign the current time to startTime
    if (!startTime) {
      startTime = currentTime;
    }

    //calculate the value to be used in calculating the number to be displayed
    const progress = Math.min((currentTime - startTime) / duration, 1);

    //calculate what to be displayed using the value gotten above
    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    //checking to make sure the counter does not exceed the last value (lastVal)
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      window.cancelAnimationFrame(window.requestAnimationFrame(step));
    }
  };
  //start animating
  window.requestAnimationFrame(step);
}
let text1 = document.getElementById("year");
let text2 = document.getElementById("project");
const load = () => {
  animate(text1, 0, 20, 7000);
  animate(text2, 0, 100, 7000);
};

addEventListener("scroll", load());

/* ======== MIXITUP FILTER PORTFOLIO ========== */
let mixerPortfolio = mixitup(".portfolio-container", {
  selectors: {
    target: ".portfolio-item",
  },
  animation: {
    duration: 300,
  },
});

/* ============= filter Active =============== */
let tabfilter = document.querySelectorAll(".filter-portfolio button");

function activefilter() {
  tabfilter.forEach((l) => l.classList.remove("active-portfolio"));
  this.classList.add("active-portfolio");
}

tabfilter.forEach((l) => l.addEventListener("click", activefilter));

// Animation skills progress
let span = $(".progress-bar span").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-progress") + "%",
    },
    2000
  );
});

$(".resume").scroll(span);

/* ============ SCROLL SECTIONS ACTIVE LINK ============= */
let sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu li a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu li a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ============ SCROLL SECTIONS RESUME LINK ============= */
const resumeItem = document.querySelectorAll(".resume-item");

function scrollResume() {
  const scrollY = window.pageYOffset;

  resumeItem.forEach((item) => {
    const sectionHeight = item.offsetHeight;
    const sectionTop = item.offsetTop + 2600;

    resumeId = item.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".sidebar a[href*=" + resumeId + "]")
        .classList.add("active-resume");
    } else {
      document
        .querySelector(".sidebar a[href*=" + resumeId + "]")
        .classList.remove("active-resume");
    }
  });
}

window.addEventListener("scroll", scrollResume);

/* ============ Active card testimonial ============= */
let cardsTest = document.querySelectorAll(".testimonial .card");

function activeCard() {
  cardsTest.forEach((card) => card.classList.remove("active-card"));
  this.classList.add("active-card");
}

cardsTest.forEach((card) => card.addEventListener("click", activeCard));

/* ============ Active card testimonial ============= */
let dataId = cardsTest.forEach((card) => card.getAttribute("data-id"));
let texts = document.querySelectorAll(".testimonial .text");
let textId = texts.forEach((text) => text.getAttribute("id"));

function textActive() {
  texts.forEach((text) => text.classList.remove("active-text"));
  let current = this.getAttribute("data-id");
  document
    .querySelector(".testimonial .text[id*=" + current + "]")
    .classList.add("active-text");
}

cardsTest.forEach((card) => card.addEventListener("click", textActive));


// Typed.js ==========
var typed = new Typed("#typed", {
  strings: ["Web Developer", "Designer", "Photographer"],
  typeSpeed: 70,
  backSpeed: 100,
  backDelay: 700,
  loop: true,
});

// menu bar 
let menuBar = document.querySelector(".menu-bar");
let navMenu = document.querySelector(".nav-menu");

menuBar.addEventListener('click', () => {
  navMenu.classList.toggle('menu-active');
})