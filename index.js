let departureDateEntry = prompt("Digite a data de partida (Formato DD/MM/YYYY)" )

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias")

if(chosenOption == 1){
    let second = Math.round(dateDiff/1000)
    alert("Tempo de vôo: " + second + " segundos")
}else if(chosenOption == 2){
    let minutes = Math.round(dateDiff/1000/60)
    alert("Tempo de vôo: " + minutes + " minutos")
}else if(chosenOption == 3){
    let hour = Math.round(dateDiff/1000/3600)
    alert("Tempo de vôo: " + hour + " horas")
}else if(chosenOption == 4){
    let days = Math.round(dateDiff/1000/3600/24)
    alert("Tempo de vôo: " + days + " dias")
}else{
    alert("Opção inválida")
}