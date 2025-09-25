let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header-icon__responsive")
let menuBtnIcon = document.querySelector(".header-icon__responsive i")


menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.top= "91px"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.top= "-400px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})