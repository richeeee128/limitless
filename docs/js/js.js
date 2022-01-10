$(function(){
    $('.silde').bxSlider({
        auto:true,
    });
});

const menus = document.querySelectorAll(".menu");
menus.forEach(function(menu) {
    const hambergerMenu = menu.querySelector(".hamberger-menu");
    menu.addEventListener("click", function() {
        hambergerMenu.classList.toggle("open");
    });
});

$(function(){
    $('.menu').click(function(){
        $('.nav').toggle(300)
    });
});