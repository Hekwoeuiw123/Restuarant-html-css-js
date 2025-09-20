document.addEventListener("DOMContentLoaded", () => {
  const next = document.getElementById("next")
  const prev = document.getElementById("prev")

  let swiper_section = document.querySelector(".swipersection")
  let list = document.querySelector(".list")
  next.addEventListener('click', (e) => {
    swiper_section.classList.remove("next", "prev")
    let items = document.querySelectorAll(".items")
    list.appendChild(items[0])
    swiper_section.classList.add("next")
  })

  prev.addEventListener('click', (e) => {
    swiper_section.classList.remove("next", "prev")
    let items = document.querySelectorAll(".items")
    const lastposition = items.length - 1
    console.log(lastposition)
    list.prepend(items[lastposition])
    swiper_section.classList.add("prev")
  })

});

const hamburger = document.querySelector(".hamburger")
hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle("spin")
  document.querySelector(".menu").classList.toggle("active")
})

const swiper = new Swiper('.testimonial-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

AOS.init({
  duration: 1000,   // animation duration in milliseconds
  once: true        // whether animation should happen only once - while scrolling down
});