const dia = window.document.getElementById('dia')
const hora = window.document.getElementById('hora')
const minuto = window.document.getElementById('minuto')
const segundo = window.document.getElementById('segundo')

const lancamento = "15 dec 2024"

function countdown(){
    const datalanca = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (datalanca - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHora = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinuto = Math.floor(segTotal / 60) % 60;
    const finalSegundo = Math.floor(segTotal) % 60;

    dia.innerHTML = `${finalDias}D`
    hora.innerHTML = `${formatoTempo(finalHora)}H`
    minuto.innerHTML = `${formatoTempo(finalMinuto)}M`
    segundo.innerHTML = `${formatoTempo(finalSegundo)}S`
}

function formatoTempo(tempo){
    return tempo < 10? `0${tempo}` : tempo; 
}

countdown();
setInterval(countdown, 1000)