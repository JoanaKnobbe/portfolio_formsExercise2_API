/*A assincronicidade em programação é o ato de executar uma tarefa em “segundo plano”, para a execução das outras tarefas menores acontecerem enquanto a maior está sendo carregada, sem interromper o código. O javascript tem o comportamento de executar uma coisa por vez, mesmo se transformarmos trechos de código em assíncrono. 


console.log("hello world");

function chamaUmaFuncao() {
    console.log("eu passei pelo Task Queue");
    console.log("essa tarefa fica em segundo plano enquanto outras linhas de codigo sao executadas");
    console.log("esse processo de espera 'e uma CALLBACK")
}

console.log("Eu fui direto para o Call Stack");

//o Event Loop vai passar essa instrucao para o Task Queue:
//parametros: funcao, tempo em milisegundos
setTimeout(chamaUmaFuncao, 5000);


*/
//o fetch retorna uma promise.
//a promise retorna o then(), caso seja resolvida e o catch(), caso seja recusada:
const consultaCEP = fetch(`https://viacep.com.br/ws/01001000/json/`)
.then(resposta => resposta.json())
.then(respostaConvertidaJson => {

    if(respostaConvertidaJson.erro) {
        throw Error ('Esse CEP nao existe')
    } else {
    console.log(respostaConvertidaJson)
    }
})
.catch(erro => console.log(erro))
.finally(mensagemFinal => console.log('Processamento concluido'));



console.log(consultaCEP);