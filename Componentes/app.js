let horas = 7;
let minutos = 0;
let segundos = 0;
cargarSegundo();

//Definimos y ejecutamos los segundos
function cargarSegundo(){
    let txtsegundos;

    if(segundos < 0){
        segundos = 59;
    }

    //Mostrar segundos en pantalla segundos

    if(segundos < 10){
        txtsegundos = `0${segundos}`;
    }else {
        txtsegundos = segundos;
    }
    document.getElementById('segundos').innerHTML=txtsegundos;
    segundos --;

    cargarMinutos(segundos);
}

//Definimos y ejecutamos los minutos
function cargarMinutos(segundos){
    let txtminutos;
    if(segundos == -1 && minutos !== 0){
        setTimeout(()=>{
            minutos--;
        },500)
    }else{
        if(segundos == -1 && minutos == 0){
            setTimeout (()=>{
                minutos = 59;
            }, 500)
        }

        //Mostrar minutos en pantalla
        if(minutos < 10){
            txtminutos = `0${minutos}`;
        }else{
            txtminutos = minutos;
        }
        document.getElementById('minutos').innerHTML = txtminutos;
        cargarHorasHoras(segundos, minutos);
    }
}

//definimos y ejecutamos las horas
function cargarHorasHoras(segundos, minutos){
    let txtHoras;
    if(segundos == -1 && minutos == 0 && horas !== 0){
        setTimeout(()=>{
            horas--;
        },500)
    } else{
        if(segundos == -1 && minutos == 0 && horas == 0){
            setTimeout(()=>{
                horas = 2;
            },500)
        }

        if(horas < 10){
            txtHoras = `0${horas}`;
        }else{
            txtHoras = horas;
        }
        document.getElementById('horas').innerHTML = txtHoras;
    }
}

//Ejecutamos cada segundo
setInterval(cargarSegundo,1000);