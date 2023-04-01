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

addEventListener('scroll', load());


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
  this.classList.add('active-portfolio');
}

tabfilter.forEach(l => l.addEventListener('click', activefilter));