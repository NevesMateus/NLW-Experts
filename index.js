const perguntas = [
  {
    pergunta: "Quantos livros compõem o Novo Testamento?",
    respostas: [
      "27",
      "39",
      "66"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é conhecido como o 'Pai da Fé'?",
    respostas: [
      "Abraão",
      "Moisés",
      "José"
    ],
    correta: 0
  },
  {
    pergunta: "Qual dos seguintes livros não está no Antigo Testamento?",
    respostas: [
      "Mateus",
      "Gênesis",
      "Levítico"
    ],
    correta: 0
  },
  {
    pergunta: "Quem escreveu a maior parte dos livros do Novo Testamento?",
    respostas: [
      "Paulo",
      "Pedro",
      "João"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o último livro da Bíblia?",
    respostas: [
      "Apocalipse",
      "Gênesis",
      "Êxodo"
    ],
    correta: 0
  },
  {
    pergunta: "Quantos filhos teve Jacó?",
    respostas: [
      "12",
      "7",
      "4"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o primeiro rei de Israel?",
    respostas: [
      "Saul",
      "David",
      "Salomão"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o menor livro da Bíblia?",
    respostas: [
      "Obadias",
      "Malaquias",
      "1 João"
    ],
    correta: 0
  },
  {
    pergunta: "Quem foi o profeta que enfrentou os sacerdotes de Baal no Monte Carmelo?",
    respostas: [
      "Elias",
      "Isaías",
      "Jeremias"
    ],
    correta: 0
  },
  {
    pergunta: "Qual foi o primeiro milagre realizado por Jesus, segundo o Evangelho de João?",
    respostas: [
      "Transformação de água em vinho",
      "Curar o cego de nascença",
      "Andar sobre as águas"
    ],
    correta: 0
  }
];


  //crie uma variável chamada quiz e atribua a ela o conteúdo da div com a id=quiz
  const quiz = document.querySelector('#quiz')
  //crie uma variável chamada template e atribua a ela o template que consta no documento do html 
  const template = document.querySelector('template')
  //crie uma variável chamada corretas e atribua a ela uma função nova 
  const corretas = new Set() 
  //crie uma variável chamada totalDePerguntas e atribua a ela o somatório de todas as perguntas
  const totalDePerguntas = perguntas.length
  //crie uma variável chamada mostrarTotal e atribua a ela o span que está dentro do id #acertos
  const mostrarTotal = document.querySelector("#acertos span")
  //Em, mostrarTotal, troque o conteúdo do texto pelo pela quantidade de corretas de totalDePerguntas que são 10.
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas


  //loop ou laço de repetição 
  for(const item of perguntas) {
  //crie uma variável chamada quizItem e atribua a ela todos os nós que estão na função da variável template
  const quizItem = template.content.cloneNode(true)
  //selecione, dentro da variável quizItem, o h3 e atribua a ele o conteúdo do texto pergunta do objeto item.
  quizItem.querySelector('h3').textContent = item.pergunta




    //Loop ou Laço de repetição
    for (let resposta of item.respostas) {
      //crie uma variável dt e atribua a ela o conteúdo do dt que está dentro da dl e clone as informações de lá.
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //Selecione o span dentro da variável dt e mude para resposta 
      dt.querySelector('span').textContent = resposta
      // Selecione 'input' dentro da variável dt e atribua o nome e a pergunta junto com o seu índice específico que consta no 'item'.
      dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
      // Selecione 'input' dentro da variável dt e de a ele o valor das respostas que estão no arrat item.respostas
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //Selecione 'input' dentro da variável dt e fique de olho na mudança do valor do input para saber se o indíce está igual ao valor do objeto item.correta
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = (event.target.value) == item.correta
        //exclua todo item 
        corretas.delete(item)
        //se o valor do evento for igual ao valor do objeto correta então adicionem ao item
        if(estaCorreta) {
          corretas.add(item) 

        } 
        mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

      }

      //coloca a pergunta na tela 
      quizItem.querySelector('dl').appendChild(dt)
    }



  quizItem.querySelector('dl dt').remove()



  //coloca a pergunta na tela 
  quiz.appendChild(quizItem)


  }