const resultadoParcialArea = document.querySelector("#parcial-result")
const resultadoTotalArea = document.querySelector("#total-result")
let porcentagemGorjeta = 0
let pessoas = 1

function porcentagem(percentage){
    porcentagemGorjeta = percentage
    document.getElementById("custom").value = ""

    gorjeta()
}


function gorjeta(){

    pessoas = Number(document.querySelector("#numberPeople").value)
    
    if(pessoas === 0 || pessoas == null || pessoas == ""){
        pessoas = 1
    }

    let customValue = Number(document.getElementById("custom").value)

    if(customValue >= 0 && customValue != null && customValue != ""){
        porcentagemGorjeta = customValue
    }
    
        
        const price =  Number(document.querySelector("#price").value)
    
        let gorjeta = (price*porcentagemGorjeta)/100

        let gorjetaPorPessoa = gorjeta/pessoas
    
        resultadoParcialArea.innerHTML = `$${gorjetaPorPessoa}`

        resultadoTotalArea.innerHTML = `$${(price/pessoas)+gorjetaPorPessoa}`
}

function reload(){
    porcentagem(0);

    document.getElementById("price").value = ""
    document.getElementById("numberPeople").value = ""

    resultadoParcialArea.innerHTML = `$0`

        resultadoTotalArea.innerHTML = `$0`
}