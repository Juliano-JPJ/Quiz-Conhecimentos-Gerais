let perguntas = [
  {
    pergunta: "Qual é o maior oceano do planeta Terra?",
    respostas: [
      { opcao: "Oceano Atlântico", correto: false },
      { opcao: "Oceano Pacífico", correto: true },
      { opcao: "Oceano Índico", correto: false },
      { opcao: "Oceano Ártico", correto: false },
      { opcao: "Oceano Antártico", correto: false }
    ]
  },
  {
    pergunta: "Quem pintou a Mona Lisa?",
    respostas: [
      { opcao: "Leonardo da Vinci", correto: true },
      { opcao: "Pablo Picasso", correto: false },
      { opcao: "Michelangelo", correto: false },
      { opcao: "Claude Monet", correto: false },
      { opcao: "Vincent van Gogh", correto: false }
    ]
  },
  {
    pergunta: "Qual é o maior país do mundo em extensão territorial?",
    respostas: [
      { opcao: "Estados Unidos", correto: false },
      { opcao: "Canadá", correto: false },
      { opcao: "Rússia", correto: true },
      { opcao: "China", correto: false },
      { opcao: "Brasil", correto: false }
    ]
  },
  {
    pergunta: "Em que continente fica o deserto do Saara?",
    respostas: [
      { opcao: "Ásia", correto: false },
      { opcao: "África", correto: true },
      { opcao: "América do Sul", correto: false },
      { opcao: "Europa", correto: false },
      { opcao: "Oceania", correto: false }
    ]
  },
  {
    pergunta: "Qual é o elemento químico representado pelo símbolo 'O'?",
    respostas: [
      { opcao: "Ouro", correto: false },
      { opcao: "Oxigênio", correto: true },
      { opcao: "Ozônio", correto: false },
      { opcao: "Ósmio", correto: false },
      { opcao: "Oxalato", correto: false }
    ]
  },
  {
    pergunta: "Quem escreveu 'Dom Quixote'?",
    respostas: [
      { opcao: "Miguel de Cervantes", correto: true },
      { opcao: "Gabriel García Márquez", correto: false },
      { opcao: "William Shakespeare", correto: false },
      { opcao: "José Saramago", correto: false },
      { opcao: "Fernando Pessoa", correto: false }
    ]
  },
  {
    pergunta: "Qual é o planeta mais próximo do Sol?",
    respostas: [
      { opcao: "Vênus", correto: false },
      { opcao: "Marte", correto: false },
      { opcao: "Mercúrio", correto: true },
      { opcao: "Terra", correto: false },
      { opcao: "Júpiter", correto: false }
    ]
  },
  {
    pergunta: "Quantos lados tem um hexágono?",
    respostas: [
      { opcao: "Seis", correto: true },
      { opcao: "Oito", correto: false },
      { opcao: "Cinco", correto: false },
      { opcao: "Sete", correto: false },
      { opcao: "Quatro", correto: false }
    ]
  },
  {
    pergunta: "Qual é o menor país do mundo em território?",
    respostas: [
      { opcao: "Mônaco", correto: false },
      { opcao: "Vaticano", correto: true },
      { opcao: "San Marino", correto: false },
      { opcao: "Liechtenstein", correto: false },
      { opcao: "Malta", correto: false }
    ]
  },
  {
    pergunta: "Em que país fica a Torre Eiffel?",
    respostas: [
      { opcao: "Itália", correto: false },
      { opcao: "França", correto: true },
      { opcao: "Inglaterra", correto: false },
      { opcao: "Alemanha", correto: false },
      { opcao: "Espanha", correto: false }
    ]
  }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");
const botaoReiniciar = document.querySelector(".botao-reiniciar");

let perguntasAleatorias = [];
let indiceAtual = 0;
let acertos = 0;

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${
    perguntasAleatorias.length
  }`;
  const perguntaAtual = perguntasAleatorias[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;

  respostasElemento.innerHTML = "";
  const respostasEmbaralhadas = embaralhar([...perguntaAtual.respostas]);

  respostasEmbaralhadas.forEach((resposta) => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;
    botao.onclick = () => {
      if (resposta.correto) acertos++;
      indiceAtual++;
      if (indiceAtual < perguntasAleatorias.length) {
        carregarPergunta();
      } else {
        finalizarJogo();
      }
    };
    respostasElemento.appendChild(botao);
  });
}

function finalizarJogo() {
  textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntasAleatorias.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

function reiniciarJogo() {
  perguntasAleatorias = embaralhar([...perguntas]);
  indiceAtual = 0;
  acertos = 0;
  conteudo.style.display = "flex";
  conteudoFinal.style.display = "none";
  carregarPergunta();
}

botaoReiniciar.addEventListener("click", reiniciarJogo);
reiniciarJogo();
