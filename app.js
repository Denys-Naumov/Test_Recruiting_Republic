let dateOfBirth = document.querySelector(".textbox-birth");

dateOfBirth.addEventListener("focus", function() {
    dateOfBirth.type = "date"
})

dateOfBirth.addEventListener("focusout", function() {
    dateOfBirth.type = "text"
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
