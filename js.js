const mostrarReloj = () =>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getUTCHours());
    let min = formatoHora(fecha.getMinutes());
    let sec = formatoHora(fecha.getUTCSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${sec}`;

    const meses = ['Ene','Feb','Mar','Abr','mayo','jun','jul','ago','sep','oct','nov','dic'];
    const dias =['Dom','Lun','Mar','Mier','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto = `${diaSemana},${dia},${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
    

}
const formatoHora= (hora) =>{
    if(hora<10)
        hora='0'+hora;
    return hora;
}

setInterval(mostrarReloj,1000);