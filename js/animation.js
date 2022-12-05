var go_pro_animation = anime.timeline({
    targets: ".animation__container .color_bands",
    duration: 3000,
    easing: "easeInQuart",
    delay: anime.stagger(300),
    width: "100%",
    autoplay: false,
    loop: 1
})
go_pro_animation.add({
    targets: ".animation__container .color_bands",
    duration: 3000,
    width: "0%",
})
go_pro_animation.add({
    targets: ".container",
    opacity: 1,
    duration: 300
})
go_pro_animation.add({
    targets: ".animation__container",
    duration: 2000, 
    left: "100%",
})
go_pro_animation.add({
    targets: [".container__elements .container__main__header", ".container__elements .container__extra__header", ".container__elements .container__prag"],
    duration: 400,
    opacity: 1,
    translateY: "-30",
    easing: "easeInQuart"
}, "+=500")
go_pro_animation.add({
    targets: ".container__buttons .button__num__1",
    duration: 300,
    opacity: 1,
    translateX: 30,
    easing: "easeInQuart"
})
go_pro_animation.add({
    targets: ".container__buttons .button__num__2",
    duration: 300,
    opacity: 1,
    translateX: -30,
    easing: "easeInQuart"
})

const GO__PRO = document.querySelector(".go__pro");
const GO__WEAK = document.querySelector(".go__weak")

GO__PRO.addEventListener("click", goPro);
GO__WEAK.addEventListener("click", goWeak);


var goProFuncCall = 0;
function goPro(){
    if(goProFuncCall === 0){
        go_pro_animation.play();
    }else{
        go_pro_animation.reverse();
        go_pro_animation.play();
    }
    GO__PRO.classList.remove("active__button");
    GO__WEAK.classList.add("active__button");
    goProFuncCall++;
}
function goWeak(){
    go_pro_animation.reverse();
    go_pro_animation.play();
    GO__PRO.classList.add("active__button");
    GO__WEAK.classList.remove("active__button");
}