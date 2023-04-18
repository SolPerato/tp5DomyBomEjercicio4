(function(){

    var horaActual =function(){
       var fecha = new Date(),
       horas = fecha.getHours(),
       ampm,
       minutos = fecha.getMinutes(),
       segundos = fecha.getSeconds(),
       diasemana = fecha.getDay(),
       dia = fecha.getDate(),
       mes = fecha.getMonth(),
       anio = fecha.getFullYear();

   var tHoras = document.getElementById('horas') ,
        tAMPM = document.getElementById('ampm'),
        tMinutos = document.getElementById('minutos'),
        tSegundos = document.getElementById('segundos'),
        tDiasemana = document.getElementById('diasemana'),
        tDia = document.getElementById('dia'),
        tMes = document.getElementById('mes'),
        tAnio = document.getElementById('anio');
        
      
var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
tDiasemana.textContent= semana[diasemana];
tDia.textContent= dia;
     var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
     tMes.textContent=meses[mes];
     tAnio.textContent=anio;

       if(horas>=12){
        horas= horas -12;
        ampm= "PM";
       }else{
        ampm="AM"
       }

       if(horas == 0){
        horas == 12;
       };

       tHoras.textContent = horas;
       tAMPM.textContent = ampm;

       if(minutos < 10){
        minutos= "0" + minutos;
       };
       if(minutos < 10){
        segundos= "0" + segundos;
       };

       tMinutos.textContent=minutos;
       tSegundos.textContent=segundos;
    };

    horaActual();
       var intervalo = setInterval(horaActual,1000);

}())