var popup = document.getElementById("modal");
var juarez = document.getElementById("modalJuarez");
var leonardo = document.getElementById("modalLeonardo");
var caio = document.getElementById("modalCaio");
var guilherme = document.getElementById("modalGuilherme");
var inscrever = document.getElementById("modalInscrever");
var parabens = document.getElementById("modalParabens");

//modal alex
function popupOnAlex() {
  popup.style.display = "block";
}

function popupOffAlex() {
  popup.style.display = "none";
}

popupOffAlex();

//modal juarez
function popupOnJuarez() {
  juarez.style.display = "block";
}

function popupOffJuarez() {
  juarez.style.display = "none";
}

popupOffJuarez();

//modal leonardo
function popupOnLeonardo() {
  leonardo.style.display = "block";
}

function popupOffLeonardo() {
  leonardo.style.display = "none";
}

popupOffLeonardo();

//modal caio
function popupOnCaio() {
  caio.style.display = "block";
}

function popupOffCaio() {
  caio.style.display = "none";
}

popupOffCaio();

//modal guilherme
function popupOnGuilherme() {
  guilherme.style.display = "block";
}

function popupOffGuilherme() {
  guilherme.style.display = "none";
}

popupOffGuilherme();

//modal inscrição

function popupOnInscrever() {
  inscrever.style.display = "block";
}

function popupOffInscrever() {
  inscrever.style.display = "none";
}

popupOffInscrever();

//modal parabens

function popupOnParabens() {
  parabens.style.display = "block";
}

function popupOffParabens() {
  parabens.style.display = "none";
}

popupOffParabens();

const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach((item) => {
  item.addEventListener("click", scrollToIdOnClick);
});

function scrollToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}
