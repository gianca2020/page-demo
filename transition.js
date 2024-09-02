const pages = document.querySelectorAll(".page");
const translateAmount = 100;
let translate = 0;

function next() {
  translate -= translateAmount;
  updatePageTranslation();
}

function prev() {
  translate += translateAmount;
  updatePageTranslation();
}

function updatePageTranslation() {
  pages.forEach((page) => {
    page.style.transform = `translateX(${translate}%)`;
  });
}

console.log(pages);