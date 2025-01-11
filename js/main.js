let backToTop = document.getElementById("btn-an-backToTop")
let header = document.getElementById("header")
let navLink = document.querySelectorAll(".nav-link")
let active = document.querySelector(".nav-link.active")
let load = document.getElementById("load")

window.addEventListener('load', start)
function start() {
    load.style.display = "flex"
}
setTimeout(() => {
    load.style.display = "none"
}, 6000);

window.addEventListener("scroll", checkScroll)
function checkScroll() {
    if (window.scrollY > 100) {
        navLink.forEach((item) =>{
            item.classList.add("black")
        })
        active.classList.replace("active","blackActive")
        header.classList.add("header")
        backToTop.classList.add("visible")
    }else{
        navLink.forEach((item) =>{
            item.classList.remove("black")
        })
        active.classList.replace("blackActive","active")
        header.classList.remove("header")
        backToTop.classList.remove("visible")
    }
}

backToTop.addEventListener("click", backtop)
function backtop() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
}