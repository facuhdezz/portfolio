let abrir = document.getElementById("menu");
let cerrar = document.getElementById("close");

abrir.addEventListener("click", () => {
    document.getElementById("mobile-menu").style.width = "100%";
});

cerrar.addEventListener("click", () => {
    document.getElementById("mobile-menu").style.width = "0%";
});