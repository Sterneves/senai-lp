// cria referencia ao form e aos elementos de resposta(pelo seu id)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")
const resp3 = document.querySelector("#outResp3")

frm.addEvenListener("submit",(e)=>{
    const veiculo = frm.inVeiculo.value
    const preco = Number(frm.inPreco.value)

    const entrada = preco * 0.50
    const parcela =(preco * 0.50)/ 12

    resp1.innerText = `Promocao: ${veiculo}`
    resp2.innerText = `Entrada de R$: ${entrada.toFixed.Fixed(2)}`
    resp3.innerText = `+12x de R$ ${parcela.toFixed(2)}`

    e.preventDefalt()
})