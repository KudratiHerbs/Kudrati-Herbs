const category_BTN = document.getElementById("Category-btn");

category_BTN.addEventListener("click", function (e) {
  e.preventDefault();
  const category_box = document.getElementById("category-box"); //Box Category
  const category_nav = document.getElementById("category-nav");
  const nav = document.getElementById("nav");
  const Category_btn_li = document.getElementById("Category-btn-li") ;
  let screenWidth = window.innerWidth;

  if (category_box.style.height == "0px") {
    category_box.style.height = "50px";
    Category_btn_li.style.marginTop = "10px";
    category_BTN.style.position = "reletive";
    // category_box.style.height = "50px";
    setTimeout(function () {
      category_nav.style.display = "flex";
    }, 500);
  } else {
    const element = document.getElementById("homes");
    const style = window.getComputedStyle(element);
    const fontSizee = style.fontSize;
    category_box.style.height = "0px";
    Category_btn_li.style.marginTop = "0px";
    // category_box.style.height = "50px";
    setTimeout(function () {
      category_nav.style.display = "none";
    }, 100);
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to navigation
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  const categorybox = document.getElementById("category-box");         
  if (window.scrollY > 100) {
    nav.style.background = "rgba(0, 0, 0, 0.8)";
    categorybox.style.background = "rgba(0, 0, 0, 0.8)";
  } else {
    nav.style.background = "rgba(0, 0, 0, 0.3)";
    categorybox.style.background = "rgba(0, 0, 0, 0.3)";
  }
});

// Animate stats on scroll
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalValue = target.textContent;
        const numericValue = parseInt(finalValue.replace(/\D/g, ""));
        const suffix = finalValue.replace(/\d/g, "");

        let current = 0;
        const increment = numericValue / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= numericValue) {
            current = numericValue;
            clearInterval(timer);
          }
          target.textContent = Math.floor(current) + suffix;
        }, 10);
      }
    });
  });

  stats.forEach((stat) => observer.observe(stat));
}

// Initialize animations
document.addEventListener("DOMContentLoaded", function () {
  animateStats();
});

