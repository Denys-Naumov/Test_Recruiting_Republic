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


new Swiper(".swiper-container", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true
    },
    slidesPerView: 5,
    spaceBetween: 32,
    loop: true
  });
