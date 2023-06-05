import {converter_binario} from "./js/binario.js"



const btn_ = document.querySelector("#converter")
const chat = document.querySelector("#chat")
const resposta = document.querySelector("#resposta")

btn_.addEventListener("click", ()=>{
    let converter = converter_binario(Number(chat.value))
    
    if(converter ==""){
        alert("Digite apenas números inteiros !")
    }
    resposta.innerHTML = converter


})
