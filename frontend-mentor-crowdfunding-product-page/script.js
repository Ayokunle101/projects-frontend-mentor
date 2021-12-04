var menu = document.getElementById("mobile-menu");
var menuList = document.getElementById("menuLinks");
menu.addEventListener("click",()=>{
    menu.classList.toggle("is-active");
    menuList.classList.toggle("activemenu");
})