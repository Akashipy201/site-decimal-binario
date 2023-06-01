export function converter_binario(n){
    let valor = n
    let resto = 0 
    let lista = []
    let resposta = 0 
    while (valor >0){
        resto = valor%2 
        valor = Math.floor(valor/2)
        lista.push(resto)

    }  
    resposta = lista.reverse()
    return resposta.join("")
}


