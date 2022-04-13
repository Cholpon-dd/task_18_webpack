import style from './style.css'

const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    if (id) {
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });

        e.target.classList.add("active");

        articles.forEach(function (article) {
            article.classList.remove("active");
        });

        const tabContent = document.getElementById(id);
        tabContent.classList.add("active");
    }
});