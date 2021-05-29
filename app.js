//INPUT
let userName = document.querySelector(".name");
let userEmail = document.querySelector(".email")
let userMessage = document.querySelector(".message");
let dateOfBirth = document.querySelector(".birth");
let button = document.querySelector(".send")

dateOfBirth.addEventListener("focus", function() {
    dateOfBirth.type = "date"
})
dateOfBirth.addEventListener("focusout", function() {
    dateOfBirth.type = "text"
})

button.addEventListener("click", function() {
    if (userName.value.length == 0 || userEmail.value.length == 0 || userMessage.value.length == 0 || dateOfBirth.value.length == 0 ) {
        alert("Please fill all the information")
    } else {
        alert("Information sent successfully")
    }
})
//SLIDER bottom
function swiperImgNumber () {
    if (window.innerWidth <= 480) {
        return "2"
    } else if (window.innerWidth <= 1024) {
        return "3"
    } else {
        return "5"
    }
}

new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    slidesPerView: swiperImgNumber(),
    spaceBetween: 32,
    loop: true
  });

  //Slider Mobile TOP
let dot1 = document.querySelector(".dot1");
let dot2 = document.querySelector(".dot2");
let dot3 = document.querySelector(".dot3");
let dot4 = document.querySelector(".dot4");
let boxes = document.querySelectorAll(".box")

dot1.addEventListener("click", function(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.left = 0 + "px";
    }
})

dot2.addEventListener("click", function(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.left = -336 + "px";
    }
})

dot3.addEventListener("click", function(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.left = -672 + "px";
    }
})
dot4.addEventListener("click", function(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.left = -1008 + "px";
    }
})
