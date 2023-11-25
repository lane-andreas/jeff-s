const scrollElements = document.querySelectorAll(".scroll-fade");

window.addEventListener("scroll", scrollHandler);

function scrollHandler() {
  scrollElements.forEach((element) => {
    const distanceToTop = element.getBoundingClientRect().top;

    if (distanceToTop < window.innerHeight / 1.3) {
      element.classList.add("fade");
    }
  });
}
scrollHandler();

const scrollElements2 = document.querySelectorAll(".scroll-slide");

window.addEventListener("scroll", scrollHandler2);

function scrollHandler2() {
  scrollElements2.forEach((element) => {
    const distanceToTop = element.getBoundingClientRect().top;

    if (distanceToTop < window.innerHeight / 1.3) {
      element.classList.add("slide");
    }
  });
}

scrollHandler2();

function isScrollAtTop() {
  return window.scrollY === 0;
}

function handleScroll() {
  const animatedDiv = document.querySelector("nav");

  if (isScrollAtTop()) {
    animatedDiv.style.boxShadow = "none";
  } else {
    animatedDiv.style.boxShadow = "0 0 1em rgba(0, 0, 0, 0.2)";
  }
}

window.addEventListener("scroll", handleScroll);

function toggleNavHeight() {
  const navBar = document.querySelector("nav");
  const currentHeight = navBar.style.height;

  if (currentHeight === "100vh") {
    navBar.style.height = "4em";
    navBar.style.boxShadow = "0 0 1em rgba(0, 0, 0, 0.2)";
  } else {
    navBar.style.height = "100vh";
    navBar.style.boxShadow = "0 0 1em rgba(0, 0, 0, 0.2)";
  }
}

function closeNavHeight() {
  const navBar = document.querySelector("nav");
  const currentHeight = navBar.style.height;

  if (currentHeight === "100vh") {
    navBar.style.height = "4em";
    navBar.style.boxShadow = "0 0 1em rgba(0, 0, 0, 0.2)";
  }
}
