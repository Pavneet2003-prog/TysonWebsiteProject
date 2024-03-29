//  mobile navigation

const btnNavEl = document.querySelector(".toggle-nav");
const headerEl = document.querySelector(".header-nav");
const headerE2 = document.querySelector(".gHeader");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  headerE2.classList.toggle("nav-open");
});

// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

