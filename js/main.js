var elModal = document.querySelector(".modal");
var modalOpenButton = document.querySelector(".header__button");
// var modalOpenButtonHome = document.querySelector(".header__button-home");
var modalCloseButton = document.querySelector(".modal__close__btn")

// modalOpenButtonHome.addEventListener("click" ,  function(){
//     elModal.classList.add("modal--active");
// })

modalOpenButton.addEventListener("click" ,  function(){
    elModal.classList.add("modal--active");
})

modalCloseButton.addEventListener("click", function(){
    elModal.classList.remove("modal--active")
});

