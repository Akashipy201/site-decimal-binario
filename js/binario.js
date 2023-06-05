export function converter_binario(n){
    let valor = n
    let resto = 0 
    let lista = []
    let resposta = 0
    
    if (valor == 0){
        return "0" 
    } 
    else{
        while (valor >0){
            resto = valor%2 
            valor = Math.floor(valor/2)
            lista.push(resto)
    
        }  
        resposta = lista.reverse()
        return resposta.join("")

    }
}
