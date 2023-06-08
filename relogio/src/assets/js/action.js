function data(){
    let data = new Date()

    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    
    if(hora < 10){
        hora = '0' + hora
    }
    if(minutos < 10){
        minutos = '0' + minutos
    }

    if(segundos < 10){
        segundos = '0' + segundos
    }
    document.querySelector('.r-hora').innerHTML = hora
    document.querySelector('.r-minutes').innerHTML = minutos
    document.querySelector('.r-seconds').innerHTML = segundos
    document.querySelector('.wrapper').style.display = 'flex'
}
setInterval(()=>{
    data()
},1000)