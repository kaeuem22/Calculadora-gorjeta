const resultadoParcialArea = document.querySelector("#parcial-result")
const resultadoTotalArea = document.querySelector("#total-result")
let porcentagem = 0
let pessoas = 1

function porcentagem(percentage){
    porcentagem = percentage
}

function gorjeta(){

    pessoas = Number(document.querySelector("#numberPeople").value)

    if(pessoas === 0 || pessoas == null){
        pessoas = 1
    }
    
    const price =  Number(document.querySelector("#price").value)

    let gorjeta = (price*porcentagem)/100

    resultadoParcialArea.innerHTML = `$${gorjeta/pessoas}`
}