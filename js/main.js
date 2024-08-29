const x = document.getElementById("x");
const o = document.getElementById("o");

localStorage.setItem("pick", "O");

x.addEventListener("click", () => {
  o.classList.remove("active");
  x.classList.add("active");
  localStorage.setItem("pick", "X");
});

o.addEventListener("click", () => {
  x.classList.remove("active");
  o.classList.add("active");
  localStorage.setItem("pick", "O");
});
