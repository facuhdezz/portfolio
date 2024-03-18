let btnLight = document.getElementsByClassName("btn-light");
let btnDark = document.getElementsByClassName("btn-dark");

btnLight[0].addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'dark');
});

btnDark[0].addEventListener('click', () => {
    document.documentElement.setAttribute('data-theme', 'light');
});

// function getTime(){
//     let fecha = new Date();
//     let horas = fecha.getHours();
//     let minutos = fecha.getMinutes();
//     let segundos = fecha.getSeconds();

//     let diaSemana = obtenerDiaSemana(fecha.getDay());
//     let dia = fecha.getDate();
//     let mes = obtenerNombreMes(fecha.getMonth());
//     let año = fecha.getFullYear();

//     horas = horas < 10 ? '0' + horas : horas;
//     minutos = minutos < 10 ? '0' + minutos : minutos;
//     segundos = segundos < 10 ? '0' + segundos : segundos;

//     document.getElementById('dateAsset').innerHTML = horas + ':' + minutos + ':' + segundos;
//     document.getElementById('dia-semana').innerHTML = `${diaSemana}`;
//     document.getElementById('fecha').innerHTML = `${dia} de ${mes} de ${año}`;
// }

// function obtenerDiaSemana(numeroDia) {
//     let diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
//     return diasSemana[numeroDia];
// }

// function obtenerNombreMes(numeroMes) {
//     let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
//     return meses[numeroMes];
// }

// setInterval(getTime, 1000);

// getTime();