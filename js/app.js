const fotoPerfil = document.querySelector(".text-img h3");
const fotoPerfil2 = document.querySelector(".text-img h3 img");

var habilidades = document.querySelectorAll(".content__habilidades .best_box");
var $aboutbox = document.querySelector(".about_box");
var $titlepage = document.querySelector(".titlepage");
var $cv = document.querySelector("#cv");
/* habilidades.classList.remove("wow"); */

/* for (i in habilidades) {
  habilidades[i].classList.remove("wow");
  console.log(habilidades[i]);
} */

var ancho = window.innerWidth;
var aancho = screen.width;

console.log("ancho" + ancho);
console.log(aancho);

if (aancho < 992) {
  (function () {
    for (i = 0; i < habilidades.length; i++) {
      habilidades[i].classList.remove(
        "wow",
        "animate__animated",
        "animate__rotateIn"
      );
      console.log(habilidades[i]);
    }
    $aboutbox.classList.remove(
      "wow",
      "animate__animated",
      "animate__bounceInLeft"
    );

    $titlepage.classList.remove(
      "wow",
      "animate__animated",
      "animate__bounceInRight"
    );

    $cv.classList.remove("wow", );
  })();
}

fotoPerfil.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 120;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  fotoPerfil.style.transform = `rotateY(0deg) rotateX(${yAxis}deg)`;
});

fotoPerfil.addEventListener("mouseenter", (e) => {
  fotoPerfil2.style.transform = "translateZ(260px)";
  console.log("Hola");
});

fotoPerfil.addEventListener("mouseleave", (e) => {
  fotoPerfil2.style.transform = "translateZ(0px)";
});

/* FORMULARIO */
const form = document.querySelector("#form__contacto");
const $cargando = document.querySelector("#cargando");
const $btnEnviar = document.querySelector(".form__btn");
form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  $cargando.style.display = "flex";
  $btnEnviar.style.display = "none";
  event.preventDefault();
  const datos = new FormData(this);

  const respuesta = await fetch(this.action, {
    method: this.method,
    body: datos,
    headers: {
      Accept: "application/json",
    },
  });

  if (respuesta.ok) {
    $cargando.style.display = "none";
    $btnEnviar.style.display = "block";
    this.reset();

    swal(
      "¡Mensaje Enviado!",
      "Recibirá una respuesta en el correo registrado lo mas pronto posible.",
      "success"
    );
  }
}
