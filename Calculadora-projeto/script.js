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
        document.getElementById("Peopleremove").style.display = "inline"
        document.getElementById("iBox").style.border = "2px solid red"
    }
    else{
        document.getElementById("Peopleremove").style.display = "none"
        document.getElementById("iBox").style.border = "none"
    }

    let customValue = Number(document.getElementById("custom").value)

    if(customValue >= 0 && customValue != null && customValue != ""){
        porcentagemGorjeta = customValue
        document.getElementById("remove").style.display = "none"
        document.getElementById("Box").style.border = "none"
    }
    else{
        document.getElementById("remove").style.display = "inline"
        document.getElementById("Box").style.border = "2px solid red"
    }


        const price =  Number(document.querySelector("#price").value)
    
        let gorjeta = (price*porcentagemGorjeta)/100

        let gorjetaPorPessoa = gorjeta/pessoas
    
        resultadoParcialArea.innerHTML = `$${gorjetaPorPessoa.toFixed(2)}`

        let totalPorPessoa = (price/pessoas)+gorjetaPorPessoa

        resultadoTotalArea.innerHTML = `$${totalPorPessoa.toFixed(2)}`
}

function reload(){
    porcentagem(0);

    document.getElementById("price").value = ""
    document.getElementById("numberPeople").value = ""

    resultadoParcialArea.innerHTML = `$0.00`

    resultadoTotalArea.innerHTML = `$0.00`
}