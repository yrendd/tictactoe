const x = document.getElementById("x");
const o = document.getElementById("o");

x.addEventListener("click", () => {
  o.classList.remove("active");
  x.classList.add("active");
});

o.addEventListener("click", () => {
  x.classList.remove("active");
  o.classList.add("active");
});
