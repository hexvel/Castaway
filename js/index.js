const scrollBtn = document.querySelector(".scrollUp")

window.addEventListener("scroll", (e) => {
  if (window.scrollY >= 255) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
})

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0)
})