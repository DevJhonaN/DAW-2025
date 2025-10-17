//Função sem retorno
function inicio() {
    const mensagem = 'Estou inciando...';  
    console.log(mensagem);
}

//Função com retorno
function processa(){
    const mensagem = 'Estou processando...';
    return mensagem;
}

inicio();

const processamento = processa();
console.log(processamento);