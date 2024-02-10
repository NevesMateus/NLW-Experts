const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Realizar uma comparação estrita, verificando tanto o valor quanto o tipo de dados",
        "Realizar uma comparação solta, verificando apenas o valor dos dados",
        "Realizar uma atribuição de valor"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'map()' faz em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array e modifica cada um de acordo com a função fornecida",
        "Remove elementos duplicados de um array",
        "Ordena os elementos de um array em ordem alfabética"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'parseInt()' faz em JavaScript?",
      respostas: [
        "Analisa uma string e retorna um número inteiro",
        "Converte um número em uma string",
        "Arredonda um número para o inteiro mais próximo"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' em JavaScript?",
      respostas: [
        "let permite reatribuição de valor, enquanto const não permite",
        "const é usado para declaração de funções, enquanto let é usado para variáveis",
        "let é usado apenas em loops, enquanto const é usado em declarações de constantes"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a finalidade do operador '&&' em JavaScript?",
      respostas: [
        "Verificar se ambas as expressões são verdadeiras",
        "Verificar se pelo menos uma das expressões é verdadeira",
        "Comparar se duas expressões são diferentes"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'forEach()' faz em JavaScript?",
      respostas: [
        "Executa uma função em cada elemento de um array",
        "Remove o primeiro elemento de um array",
        "Retorna um novo array contendo apenas os elementos que passam em um teste especificado"
      ],
      correta: 0
    },
    {
      pergunta: "O que é um 'closure' em JavaScript?",
      respostas: [
        "Uma função que é definida dentro de outra função e tem acesso ao escopo da função externa",
        "Um objeto que armazena pares de chave-valor",
        "Uma estrutura de dados usada para armazenar múltiplos valores em uma única variável"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador '||' em JavaScript?",
      respostas: [
        "Verificar se pelo menos uma das expressões é verdadeira",
        "Verificar se ambas as expressões são verdadeiras",
        "Comparar se duas expressões são diferentes"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método 'filter()' faz em JavaScript?",
      respostas: [
        "Cria um novo array com todos os elementos que passam no teste implementado pela função fornecida",
        "Ordena os elementos de um array em ordem alfabética",
        "Remove elementos duplicados de um array"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a diferença entre '==' e '===' em JavaScript?",
      respostas: [
        "'==' verifica apenas o valor dos dados, enquanto '===' verifica tanto o valor quanto o tipo de dados",
        "'===' é usado apenas para comparações numéricas, enquanto '==' é usado para comparações de strings",
        "'==' é uma forma abreviada de escrever '==='"
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