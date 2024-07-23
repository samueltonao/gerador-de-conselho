async function conselhos() {
    const url = '	https://api.adviceslip.com/advice'
    
    const resposta = await fetch(url);

    return await resposta.json();
}

const numeroAleatorio = document.getElementById('contagem');

async function gerarConselho() {
    const conselho = await conselhos();
    const conselhoAleatorio = document.getElementById('texto').innerText = conselho.slip.advice;

    const advice = `Advice#${conselho.slip.id}`;
    
    numeroAleatorio.innerText = advice;
    
    console.log(conselhoAleatorio);
}

 
const botao = document.getElementById('botao');

botao.addEventListener('click', gerarConselho);