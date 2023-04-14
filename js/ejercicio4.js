setInterval(() => {
    let fecha= new Date();
    const meses= ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","DIciembre"];
    const dias=["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    const mes= meses[fecha.getMonth()];
    const dia= dias[fecha.getDay()];
    const diaN= fecha.getDate();
    const horas=(String(fecha.getHours()).length == 2) ? fecha.getHours() : `0${fecha.getHours()}`;
    const minutos=(String(fecha.getMinutes()).length == 2) ? fecha.getMinute():`0${fecha.getMinute()}`;
    const segundos=(String(fecha.getSecond()).length == 2) ? fecha.getSecond() : `0${fecha.getSecond()}`;

     document.getElementById("dia").innerHTML = dia;
     document.getElementById("mes").innerHTML = `${diaN} ${mes}`;
     document.querySelector("#hora p:nth-child(1)").innerHTML= horas;
     document.querySelector("#hora p:nth-child(2)").innerHTML= minutos;
     document.querySelector("#hora p:nth-child(3)").innerHTML= segundos;

}, 1000);