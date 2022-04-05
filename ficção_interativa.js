const prompt = require("prompt-sync")();
const colors = require("colors");
console.clear();

// Função para pressionar enter e mudar de "cenário"
const pressEnter = () => {
  console.log();
  prompt(`pressione ENTER para continuar`);
  console.clear();
  console.log();
};

// DO ... WHILE para a parte do ciclo rodar dentro do jogo, vão rodar 6 dias e só vai ao sétimo dependendo do OVERALL E RESPEITO
do {
  // Método
  var personagem = {
    nome: "Alfredo",
    idade: 20,
    overall: 25,
    respeito: 25,
    time: "Flamengo",

    // Função para diminuir overall
    menosOverall: function (baixa) {
      console.log(`Você perdeu ${baixa} de overall! `);
      this.overall -= baixa;
      return this.overall;
    },
    // Função para adicionar overall
    maisOverall: function (aumento) {
      console.log(`Você ganhou ${aumento} de overall! `);
      this.overall += aumento;
      return this.overall;
    },
    // Função para diminuir respeito
    menosRespeito: function (baixa) {
      console.log(`Você perdeu ${baixa} de respeito! `);
      this.respeito -= baixa;
      return this.respeito;
    },
    // Função para adicionar respeito
    maisRespeito: function (aumento) {
      console.log(`Você ganhou ${aumento} de respeito! `);
      this.respeito += aumento;
      return this.respeito;
    },
    // Função para adicionar tempo
    maisTempo: function (tempo) {
      console.log(`Já são ${tempo} horas,`);
      this.tempo += tempo;
      return tempo;
    },
    // Função para diminuir tempo
    menosTempo: function (tempoMenos) {
      console.log(`Já são ${tempoMenos} horas,`);
      this.tempo -= tempoMenos;
      return tempoMenos;
    },
    // Função para adicionar dias
    passagemDia: function (dia) {
      console.log(`do dia ${dia}.`);
      this.tempo += dia;
      return dia;
    },
  };

  // Dias do meu ciclo
  var dias = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];

  // For para rodar os dias, que são meus ciclos.
  for (var i of dias) {
    // Primeiro ciclo!
    Segunda: console.log(
      `Olá, bem vindo ao Modo Carreira de ${personagem.nome}, ${personagem.idade} anos, jogador do ${personagem.time}! Você terá caminhos na qual poderá chegar ao Overall ideal para ser convocado para a seleção Brasileira.`
    );
    console.log();
    pressEnter();
    console.log(
      `Terá alguns caminhos a percorrer! Alfredo conta contigo para ajudá-lo a chegar lá! `
    );
    console.log();
    pressEnter();
    console.log(
      `Alfredo, começará com nível de Overall e Respeito em 60 e perderá ou ganhará mediante suas escolhas. `
    );

    pressEnter();

    let dia0 = dias[0];
    console.log(`=======${dia0}-Feira=======`.yellow);
    pressEnter();
    personagem.maisTempo(1);
    personagem.passagemDia(1);
    let primeiraPergunda = +prompt(
      `Balada ou dormir? Alfredo amanhã você tem um treino muito importante, mas você é jovem e tem uma balada legal pra ir... Decida! (Dormir - 1 ou Balada - 2):  `
    );
    while (
      primeiraPergunda == 0 ||
      primeiraPergunda > 2 ||
      isNaN(primeiraPergunda)
    ) {
      console.log(`Digite uma resposta válida! `);
      primeiraPergunda = +prompt(
        `Balada ou dormir? Alfredo amanhã você tem um treino muito importante, mas você é jovem e tem uma balada legal pra ir... Decida! (Dormir - 1 ou Balada - 2): `
      );
    }
    if (primeiraPergunda == 1) {
      console.log();
      let treino1 = +prompt(
        `Alfredo, Você chegou no treino! Quer treinar o quê? Finalização, está cansado? Ah, tem uma coletiva de imprensa também. (1 - Finalização // 2 - Estou cansado`
      );
      while (treino1 == 0 || treino1 > 2 || isNaN(treino1)) {
        console.log(`Digite uma resposta válida! `);
        treino1 = +prompt(
          `Alfredo, Você chegou no treino! Quer treinar o quê? Finalização, está cansado? Ah, tem uma coletiva de imprensa também. (1 - Finalizção // 2 - Estou cansado`
        );
      }
      if (treino1 == 1) {
        console.log();
        personagem.maisTempo(7);
        personagem.passagemDia(1);
        personagem.maisOverall(5);
        personagem.maisRespeito(2);
        console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
        console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);

        let finalizacao = +prompt(
          `Estamos no treino de finalização. Escolha onde vai ser seu chute: 1 - Meio // 2 - Esquerda // 3 - Direita`
        );
        while (finalizacao == 0 || finalizacao > 2 || isNaN(finalizacao)) {
          console.log(`Digite uma resposta válida! `);
          finalizacao = +prompt(
            `Estamos no treino de finalização. Escolha onde vai ser seu chute: 1 - Meio // 2 - Esquerda // 3 - Direita`
          );
        }
        if (finalizacao == 1) {
          console.log();
          personagem.maisTempo(7);
          personagem.passagemDia(1);
          console.log(`Goleiro saiu bem na bola. Pegou... `.yellow);
          pressEnter();
        } else if (finalizacao == 2) {
          console.log();
          personagem.maisOverall(3);
          personagem.maisRespeito(3);
          personagem.maisTempo(7);
          personagem.passagemDia(1);
          console.log(
            `Chute forte, no canto! Sem chances para o goleiro. Seu overall agora é ${Number(
              personagem.overall
            )} e respeito é ${Number(personagem.respeito)} `.yellow
          );
          console.log();
        } else if (finalizacao == 3) {
          personagem.menosOverall(1);
          personagem.maisTempo(7);
          personagem.passagemDia(1);
          console.log(
            `Tirou do goleiro e do gol! Chute pra fora! ${Number(
              personagem.overall
            )} `.yellow
          );
          console.log();
        } else {
          console.log(`Digite uma opção válida! `.yellow);
        }
        console.log();
        console.log();

        console.log();
      } else if (treino1 == 2) {
        personagem.menosOverall(2);
        personagem.menosRespeito(2);
        personagem.maisTempo(7);
        personagem.passagemDia(1);
        console.log(
          `Infelizmente você perdeu alguns pontos, que agora são de: ${Number(
            personagem.overall
          )} e respeito ${Number(personagem.respeito)} `.yellow
        );

        console.log("Treinador falando: ");
        console.log();
        let embora = +prompt(
          `Alfredo, você teve chance de treinar e alegou cansaço. Mas você realmente vai para casa ou desviar o caminho? Seja sincero! (1 - Casa // 2 - Desviar o caminho, muita gata na balada) `
        );
        while (embora == 0 || embora > 2 || isNaN(embora)) {
          console.log(`Digite uma resposta válida! `);
          embora = +prompt(
            `Alfredo, você teve chance de treinar e alegou cansaço. Mas você realmente vai para casa ou desviar o caminho? Seja sincero! (1 - Casa // 2 - Desviar o caminho, muita gata na balada) `
          );
        }
        console.log();
        if (embora == 1) {
          personagem.menosRespeito(2);
          personagem.maisTempo(7);
          personagem.passagemDia(1);
          console.log("Treinador falando: ");
          console.log(
            `OK, acreditarei em você! Por isso seu respeito será aumentado! ${Number(
              personagem.respeito
            )}`.yellow
          );

          console.log();
        } else if (embora == 2) {
          console.log();
          personagem.menosRespeito(5);
          personagem.maisTempo(7);
          personagem.passagemDia(1);
          console.log(
            `Obrigado pela sinceridade! Mas infelizmente seu respeito cairá novamente e ficará em: ${Number(
              personagem.respeito
            )} `.yellow
          );

          console.log();
        }
        console.log(
          `OK! A convocatória é amanhã! Vamos ver o que acontece. `.yellow
        );
      } else if (treino1 == 3) {
        console.log();

        let pergunta1 = +prompt(
          `Alfredo, você objetivo em chegar na seleção Brasileira? (Sim - 1 ou Não - 2) `
        );
        while (pergunta1 == 0 || pergunta1 > 2 || isNaN(pergunta1)) {
          console.log(`Digite uma resposta válida! `);
          pergunta1 = +prompt(
            `Alfredo, você objetivo em chegar na seleção Brasileira? (Sim - 1 ou Não - 2) `
          );
        }
        if ((pergunta1 = 1)) {
          console.log();
          personagem.maisRespeito(3);
          console.log(
            `Seu respeito aumento para ${Number(personagem.respeito)}`.yellow
          );
        } else if (pergunta1 == 2) {
          console.log();
          personagem.menosRespeito(3);
          console.log(
            `Seu respeito com o treinador e torcedores agora é ${Number(
              personagem.respeito
            )}`.yellow
          );

          console.log();
        } else {
          console.log(`Digite uma opção válida! `.yellow);
        }
        let pergunta2 = +prompt(
          `Alfredo, você tem se dedicado ao máximo para conseguir seus objetivos no seu clube? (Sim - 1 ou Não - 2) `
        );
        while (pergunta2 == 0 || pergunta2 > 2 || isNaN(pergunta2)) {
          console.log(`Digite uma resposta válida! `);
          pergunta2 = +prompt(
            `Alfredo, você tem se dedicado ao máximo para conseguir seus objetivos no seu clube? (Sim - 1 ou Não - 2) `
          );
        }
        if (pergunta2 == 1) {
          console.log();
          personagem.maisRespeito(2);
          console.log(
            `Dá pra ver que seu comprometimento é grande com o clube, por isso, seu respeito agora é ${Number(
              personagem.respeito
            )}`.yellow
          );
        } else if (pergunta2 == 2) {
          console.log();
          personagem.menosRespeito(2);
          console.log(
            `Péssima resposta, respeito em decadência ${Number(
              personagem.respeito
            )}`.yellow
          );

          console.log();
        } else {
          console.log(`Digite uma opção válida! `.yellow);
        }
        console.log(
          `Coletiva encerrada! Vamos aguardar a convocatória! `.yellow
        );
      } else {
        console.log(`Digite uma opção válida! `.yellow);
      }
    } else if (primeiraPergunda == 2) {
      console.log();
      personagem.menosOverall(2);
      personagem.menosRespeito(2);
      personagem.maisTempo(1);
      personagem.passagemDia(1);
      console.log(
        `Alfredo, você infelizmente perdeu overall! Seu overal agora é: ${Number(
          personagem.overall
        )} e seu respeito caiu para ${Number(personagem.respeito)}`.yellow
      );

      var bebado = +prompt(
        `Alfredo, você chegou meio melado no treino? (1 - Sim ou 2 - Não) `
      );
      if (bebado == 1) {
        console.log();
        personagem.menosOverall(2);
        personagem.menosRespeito(2);
        personagem.maisTempo(3);
        personagem.passagemDia(1);
        console.log(
          `Alfredo, você está vacilando! Quer ser o Romário! Agora sua qualidade diminiu para ${Number(
            personagem.overall
          )} e respeito ${Number(personagem.respeito)}`.yellow
        );

        console.log();
        console.log(`Não sei como será! Vamos aguadar a convocatória! `.yellow);
        console.log();
      } else if (bebado == 2) {
        personagem.maisRespeito(2);
        personagem.maisOverall(2);
        personagem.maisTempo(8);
        personagem.passagemDia(1);
        console.log(
          `Legal! Agora vamos treinar, seu overall subiu ${Number(
            personagem.overall
          )} pela sinceridade! Seu respeito agora: ${Number(
            personagem.respeito
          )}`.yellow
        );

        console.log();
        console.log(`Não sei como será! Vamos aguadar a convocatória! `.yellow);
        var treino2 = +prompt(
          `Você tem uma grande oportunidade de se redimir! Há uma falta e você foi escolhido pra bater. Qual lado? (1 - Direita ou 2 - Esquerda!) `
        );
        while (treino2 == 0 || treino2 > 2 || isNaN(treino2)) {
          console.log(`Digite uma resposta válida! `);
          var treino2 = +prompt(
            `Você tem uma grande oportunidade de se redimir! Há uma falta e você foi escolhido pra bater. Qual lado? (1 - Direita ou 2 - Esquerda!) `
          );
        }
        console.log();
      } else if (treino2 == 1) {
        console.log();
        personagem.maisTempo(8);
        personagem.passagemDia(1);
        console.log(`Você perdeu e nada acontece! Todo mundo perde!`.yellow);

        console.log();
      } else if (treino2 == 2) {
        personagem.maisRespeito(2);
        personagem.maisOverall(2);
        personagem.maisTempo(8);
        personagem.passagemDia(1);
        console.log(
          `Você aproveita suas oportunidades! Agora seu overall é ${Number(
            personagem.overall
          )} e seu respeito com treinador é ${Number(personagem.respeito)}`
            .yellow
        );

        console.log();
      } else {
        console.log(`Digite uma opção válida! `.yellow);
      }
    } else {
      console.log(`Digite uma opção válida!`.yellow);
    }
    break;
  }

  pressEnter();
  // Segundo ciclo
  terça: console.log();
  let dia1 = dias[1];
  console.log(`=======${dia1}-feira=======`.yellow);
  console.log();
  pressEnter();
  personagem.maisTempo(8);
  personagem.passagemDia(2);
  let terceiraPergunta = +prompt(
    `Em mais uma seção de treino, Alfredo chega para treinar aparentemente bêbado! O treinador logo pergunta se ele está bêbado... O que você acha? (1 - Sóbrio, 2 - Bêbado ou 3 - Não responder! ) `
  );
  while (
    terceiraPergunta == 0 ||
    terceiraPergunta > 2 ||
    isNaN(terceiraPergunta)
  ) {
    console.log(`Digite uma resposta válida! `.yellow);
    terceiraPergunta = +prompt(
      `Em mais uma seção de treino, Alfredo chega para treinar aparentemente bêbado! O treinador logo pergunta se ele está bêbado... O que você acha? (1 - Sóbrio, 2 - Bêbado ou 3 - Não responder! ) `
    );
  }
  if (terceiraPergunta == 1) {
    console.log();
    personagem.menosRespeito(5);
    console.log(
      `Treinador viu que era mentira, pois viu fotos dele na rua logo após a balada! Faz o respeito dele cair bastante para ${Number(
        personagem.respeito
      )}`.yellow
    );

    console.log();
    let recuperar = +prompt(
      `Viu que não dava para mentir e foi falar com o treinador depois! O que você faria? (1 - Assumia o erro, 2 - Pergunta ao treinador quem nunca bebeu) `
    );
    while (recuperar == 0 || recuperar > 2 || isNaN(recuperar)) {
      console.log(`Digite uma resposta válida! `);
      recuperar = +prompt(
        `Viu que não dava para mentir e foi falar com o treinador depois! O que você faria? (1 - Assumia o erro, 2 - Pergunta ao treinador quem nunca bebeu) `
      );
    }
    console.log();
    if (recuperar == 1) {
      personagem.maisOverall(2);
      console.log(
        `Treinador dá os parabéns, viu que Alfredo ficou arrependido! Respeito aumentou um pouquinho para ${Number(
          personagem.respeito
        )}`.yellow
      );

      console.log();
    } else if (recuperar == 2) {
      personagem.menosRespeito(3);
      console.log(
        `Treinador viu que Alfre não tem um pingo de arrependimento e assim, decide ainda que Alfredo perderá mais respeito em sua perspectiva. ${Number(
          personagem.respeito
        )}`.yellow
      );
      console.log();
    } else {
      console.log(`Digite uma opção válida! `.yellow);
    }
  } else if (terceiraPergunta == 2) {
    console.log();
    personagem.maisRespeito(2);
    console.log(
      `O treinador do time viu que você errou, mas foi honesto! Então ele decidiu te dá uma chance para melhorar. Seu respeito aumentou um pouco ${Number(
        personagem.respeito
      )}`.yellow
    );
    console.log();
  } else if (terceiraPergunta == 3) {
    personagem.menosRespeito(5);
    console.log(
      `"Sinceramente não sei se posso contar com você!" ${Number(
        personagem.respeito
      )}`.yellow
    );
    console.log();
    pressEnter();
  } else {
    console.log(`Digite uma opção válida! `.yellow);
  }

  pressEnter();
  // Terceiro ciclo
  quarta: console.log();
  let dia2 = dias[2];
  console.log(`=======${dia2}-feira=======`.yellow);
  console.log();
  pressEnter();
  personagem.maisTempo(9);
  personagem.passagemDia(3);
  let treino3 = +prompt(
    `Alfredo, hoje temos mais uma seção de treinamento! Escolha o que quer treinar: (1 - Posicionamento / 2 - Cabeceio) `
  );
  while (treino3 == 0 || treino3 > 2 || isNaN(treino3)) {
    console.log(`Digite uma resposta válida! `.yellow);
    treino3 = +prompt(
      `Alfredo, hoje temos mais uma seção de treinamento! Escolha o que quer treinar: (1 - Posicionamento / 2 - Cabeceio) `
    );
  }

  if (treino3 == 1) {
    console.log();

    personagem.maisRespeito(0);
    personagem.maisOverall(0);
    personagem.maisTempo(10);
    personagem.passagemDia(3);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    let posicionamento = +prompt(
      `Em determinado momento do treino lançaram uma bola nas costas de Alfredo, ele ficou indeciso... (1 - Correr atrás da bola / 2 - Reclamar muito com o companheiro) `
    );
    while (posicionamento == 0 || posicionamento > 2 || isNaN(posicionamento)) {
      console.log(`Digite uma resposta válida! `.yellow);
      posicionamento = +prompt(
        `Em determinado momento do treino lançaram uma bola nas costas de Alfredo, ele ficou indeciso... (1 - Correr atrás da bola / 2 - Reclamar muito com o companheiro) `
      );
    }
    if (posicionamento == 1) {
      console.log();

      personagem.maisRespeito(2);
      personagem.maisOverall(2);
      personagem.maisTempo(10);
      personagem.passagemDia(3);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Parabéns Alfredo, o treinador ficou muito feliz com sua atidude. Seu overall e respeito cresceram. `
      );
    } else if (posicionamento == 2) {
      console.log();

      personagem.menosRespeito(2);
      personagem.menosOverall(2);
      personagem.maisTempo(10);
      personagem.passagemDia(3);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Treinador ficou puto contigo. Por isso teve uma queda no seu respeito e overall. `
          .yellow
      );
    }
  } else if (treino3 == 2) {
    console.log();

    personagem.maisRespeito();
    personagem.maisOverall();
    personagem.maisTempo(10);
    personagem.passagemDia(3);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    let cabeceio = +prompt(
      `Cruzamento veio ruim, a bola passou em suas costas, você tem duas opções: (1 - Correr atrás da bola / 2 - Reclamar muito com o companheiro) `
    );
    while (cabeceio == 0 || cabeceio > 2 || isNaN(cabeceio)) {
      console.log(`Digite uma resposta válida! `.yellow);
      cabeceio = +prompt(
        `Cruzamento veio ruim, a bola passou em suas costas, você tem duas opções: (1 - Correr atrás da bola / 2 - Reclamar muito com o companheiro) `
      );
    }
    if (cabeceio == 1) {
      console.log();

      personagem.maisRespeito(2);
      personagem.maisOverall(2);
      personagem.maisTempo(10);
      personagem.passagemDia(3);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Parabéns Alfredo, o treinador ficou muito feliz com sua atidude. Seu overall e respeito cresceram. `
          .yellow
      );
    } else if (cabeceio == 2) {
      console.log();

      personagem.menosRespeito(2);
      personagem.menosOverall(2);
      personagem.maisTempo(10);
      personagem.passagemDia(3);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Treinador ficou puto contigo. Por isso teve uma queda no seu respeito e overall. `
          .yellow
      );
    }
  } else {
    console.log(`Digite uma opção válida! `.yellow);
  }
  // Quarto ciclo
  quinta: console.log();
  let dia3 = dias[3];
  console.log(`=======${dia3}-feira=======`.yellow);
  console.log();

  personagem.maisTempo(8);
  personagem.passagemDia(4);
  console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
  console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
  let folga = +prompt(
    `Depois de seções de treinos muito duros, Alfredo ganhou um a folga! O que deseja fazer? (1 - Fazer mercado / 2 - Quebrar numa balada matutina) `
  );
  while (folga == 0 || folga > 2 || isNaN(folga)) {
    console.log(`Digite uma resposta válida! `.yellow);
    folga = +prompt(
      `Depois de seções de treinos muito duros, Alfredo ganhou um a folga! O que deseja fazer? (1 - Fazer mercado / 2 - Quebrar numa balada matutina) `
    );
  }
  if (folga == 1) {
    console.log();

    personagem.maisTempo(10);
    personagem.passagemDia(4);
    personagem.maisRespeito(2);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    console.log(
      `Alfredo, treinador soube que na folga você procurou a fazer uma coisa mais tranquila, fazer as compras de casa. Ele sempre está de olho em você, pois é um cara problemático. Por isso você ganhou respeito com ele.  `
        .yellow
    );
    console.log();

    let compras = +prompt(
      `Mas ele quer saber também o que você acabou comprando... (1 - Alimentos que preza pela sua dieta / 2 - Alimentos complicados `
    );
    while (compras == 0 || compras > 2 || isNaN(compras)) {
      console.log(`Digite uma resposta válida! `.yellow);
      compras = +prompt(
        `Mas ele quer saber também o que você acabou comprando... (1 - Alimentos que preza pela sua dieta / 2 - Alimentos complicados `
      );
    }
    if (compras == 1) {
      personagem.maisTempo(15);
      personagem.passagemDia(4);
      personagem.maisRespeito(2);
      personagem.maisOverall(2);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log();
      console.log(
        `Treinador te deu uma moral nos seus atributos... Ele viu que tá focado!  `
          .yellow
      );
      console.log();
    } else if (compras == 2) {
      personagem.maisTempo(15);
      personagem.passagemDia(4);
      personagem.menosOverall(2);
      personagem.menosRespeito(2);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Aí você vacilou muito cara, porque tu num ficou calado? Ratiou!  `
          .yellow
      );
    }
  } else if (folga == 2) {
    personagem.maisTempo(11);
    personagem.passagemDia(4);
    personagem.menosOverall(2);
    personagem.menosRespeito(2);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    console.log(
      `Treinador ficou sabendo, recebeu fotos no celular indicando que você estava numa festa... Com isso seu respeito caiu e overall também.  `
        .yellow
    );
    let festa = +prompt(
      `Cara, você bebeu muito? (1 - Não, me contive / 2 - Amassei muito.)`
    );
    while (festa == 0 || festa > 2 || isNaN(festa)) {
      console.log(`Digite uma resposta válida! `);
      festa = +prompt(
        `Cara, você bebeu muito? (1 - Não, me contive / 2 - Amassei muito.)`
      );
    }
    if (festa == 1) {
      personagem.maisTempo(18);
      personagem.passagemDia(4);
      personagem.maisOverall(2);
      personagem.maisRespeito(2);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Parabéns, mesmo na folga você tem se contido! Parabéns mesmo. Mais Overall e respeito. `
          .yellow
      );
    }
  }
  pressEnter();
  // Quinto ciclo
  sexta: console.log();
  let dia4 = dias[4];
  console.log(`=======${dia4}-feira=======`.yellow);
  console.log("Chegamos no jogo!");
  console.log();
  pressEnter();
  personagem.maisTempo(18);
  personagem.passagemDia(5);
  console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
  console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
  console.log();
  console.log(`Alfredo sabe que está na convocatória! Como titular! `.yellow);
  let jogo2 = +prompt(
    `Alfredo, você vai começar como titular! Essa é sua grande chance! Estão te provocando dentro de campo. Decida o que fazer: 1 - Ativar modo driblador ou 2 - Jogar para o time. `
  );
  while (jogo2 == 0 || jogo2 > 2 || isNaN(jogo2)) {
    console.log(`Digite uma resposta válida! `.yellow);
    jogo2 = +prompt(
      `Alfredo, você vai começar como titular! Essa é sua grande chance! Estão te provocando dentro de campo. Decida o que fazer: 1 - Ativar modo driblador ou 2 - Jogar para o time. `
    );
  }
  if (jogo2 == 1) {
    personagem.maisTempo(20);
    personagem.passagemDia(5);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    console.log();
    console.log(`"Vamos ver o que acontece!"`.yellow);
    console.log();
    let recuperar = +prompt(
      `Em seu modo driblador ativado, Alfredo tem o primeiro dilema: Em jogada que saiu dois contra um, Alfredo pode tocar para o companheiro melhor colocado, ou decidir sozinho! Escolha: 1 - Tocar, 2 - Decidir! `
    );
    while (recuperar == 0 || recuperar > 2 || isNaN(recuperar)) {
      console.log(`Digite uma resposta válida! `.yellow);
      recuperar = +prompt(
        `Em seu modo driblador ativado, Alfredo tem o primeiro dilema: Em jogada que saiu dois contra um, Alfredo pode tocar para o companheiro melhor colocado, ou decidir sozinho! Escolha: 1 - Tocar, 2 - Decidir! `
      );
    }
    if (recuperar == 1) {
      console.log();

      personagem.maisTempo(20);
      personagem.passagemDia(5);
      personagem.menosRespeito(2);
      personagem.menosOverall(2);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Alfredo tentou toque para seu companheiro, o toque saiu fraco! Com isso, diminuiu overall para ${Number(
          personagem.overall
        )} e respeito para ${Number(personagem.respeito)} `.yellow
      );
    } else if (recuperar == 2) {
      console.log();

      personagem.maisTempo(20);
      personagem.passagemDia(5);
      personagem.maisOverall(5);
      personagem.maisRespeito(5);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Alfredo foi pra cima do defensor, passou liso. Saiu de cara para o gol e fez! Foi uma linda jogada que coloca Alfredo no olho do treinador da seleção que vê o jogo! `
          .yellow
      );
    } else {
      console.log(`Digite uma opção válida! `.yellow);
    }
  } else if (jogo2 == 2) {
    console.log();

    personagem.maisTempo(20);
    personagem.passagemDia(5);
    personagem.maisOverall(2);
    personagem.maisRespeito(2);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    console.log(
      `Alfredo claramente é um jogador solidário! ${Number(
        personagem.overall
      )} é seu overall agora e de respeito: ${Number(personagem.respeito)}`
        .yellow
    );

    let recuperar = +prompt(
      `Chega o intervalo o treinador pede para Alfredo jogar mais pela esquerda, puxando contra-ataque! Alfredo não gosta muito da instrução, pois gosta de jogar centralizado. O que fazer? 1 - Questionar ordem do treinador ou 2 - Aceitar, mesmo que jogue mal? `
    );
    while (recuperar == 0 || recuperar > 2 || isNaN(recuperar)) {
      console.log(`Digite uma resposta válida! `.yellow);
      recuperar = +prompt(
        `Chega o intervalo o treinador pede para Alfredo jogar mais pela esquerda, puxando contra-ataque! Alfredo não gosta muito da instrução, pois gosta de jogar centralizado. O que fazer? 1 - Questionar ordem do treinador ou 2 - Aceitar, mesmo que jogue mal? `
      );
    }

    if (recuperar == 1) {
      console.log();

      personagem.maisTempo(20);
      personagem.passagemDia(5);
      personagem.maisRespeito(2);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Treinador não gostou do questionamento, mas mesmo assim, pela coragem você ganhou respeito! Foi para ${personagem.respeito}`
          .yellow
      );
    } else if (recuperar == 2) {
      console.log();
      personagem.maisTempo(20);
      personagem.passagemDia(5);
      personagem.menosOverall(3);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Alfredo aceita, mas vai muito mal! Ele não sabe jogar por aquele lado! Com isso seu overrll para ${personagem.overall}`
          .yellow
      );

      let reclamar = +prompt(
        `Treindor reclama com Alfredo, o que ele faz? 1 - Xingar o treinador ou 2 - Pedir para o treinador te colocar centralizado? `
      );
      while (reclamar == 0 || reclamar > 2 || isNaN(reclamar)) {
        console.log(`Digite uma resposta válida! `.yellow);
        reclamar = +prompt(
          `Treindor reclama com Alfredo, o que ele faz? 1 - Xingar o treinador ou 2 - Pedir para o treinador te colocar centralizado? `
        );
      }
      if (reclamar == 1) {
        console.log();
        personagem.maisTempo(20);
        personagem.passagemDia(5);
        personagem.menosRespeito(3);
        console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
        console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
        console.log(
          `Treinador tira Alfredo do jogo na hora! E perde respeito ${Number(
            personagem.respeito
          )}`.yellow
        );
        console.log();

        break;
      } else if (reclamar == 2) {
        console.log();

        personagem.maisTempo(20);
        personagem.passagemDia(5);
        personagem.maisRespeito(3);
        personagem.maisOverall(3);
        console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
        console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
        console.log(
          `Treinador mudou e Alfredo ganhou respeito ${Number(
            personagem.respeito
          )} e fez um gol, aumentando seu overall para ${Number(
            personagem.overall
          )}`.yellow
        );
      }
    }
  } else {
    console.log(`Digite uma opção válida! `.yellow);
  }

  console.log(`Para saber o resultado do jogo, `.yellow);

  let dificuldade = Math.floor(Math.random() * 100);
  if (dificuldade > personagem.overall) {
    console.log(`Você ganhou o jogo, por 2x0! `);
    personagem.maisOverall(2);
    personagem.maisRespeito(2);
    console.log(`Agora você tem ${Number(personagem.overall)}`);
    console.log(`Agora você tem ${Number(personagem.respeito)}`);
  } else {
    console.log(`Você perdeu o jogo! `);
    personagem.menosOverall(2);
    personagem.menosRespeito(2);
  }
  pressEnter();
  // Sexto ciclo
  sábado: console.log();
  let dia5 = dias[5];
  console.log(`=======${dia5}=======`.yellow);
  pressEnter();
  console.log(
    "Hoje é dia de coletiva pós-jogo! Seu nome tá especulado na seleção... Talvez pinte algo! "
      .yellow
  );
  console.log();
  let sabado = +prompt(
    `Repórter - "Alfredo, você está sendo especulado na seleção... Como você encara isso? (1 - Eu sempre soube que ia ser chamado / 2 - Estou tratando com muita naturalizadade! )" `
  );
  while (sabado == 0 || sabado > 2 || isNaN(sabado)) {
    console.log(`Digite uma resposta válida! `.yellow);
    sabado = +prompt(
      `Repórter - "Alfredo, você está sendo especulado na seleção... Como você encara isso? (1 - Eu sempre soube que ia ser chamado / 2 - Estou tratando com muita naturalizadade! )" `
    );
  }
  if (sabado == 1) {
    console.log();
    personagem.maisTempo(12);
    personagem.passagemDia(6);
    personagem.menosRespeito(3);
    personagem.menosOverall(3);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    console.log(
      `Você foi muito mal na resposta. Treinador da seleção Brasileiro está vendo e caiu um pouco seus atributos. `
        .yellow
    );
    let reporter1 = +prompt(
      `Por essa resposta o ninguém esperava... O treinador pode o que de você? (1 - O meu melhor sempre / 2 - Pode esperar gol ) `
    );
    while (reporter1 == 0 || reporter1 > 2 || isNaN(reporter1)) {
      console.log(`Digite uma resposta válida! `.yellow);
      reporter1 = +prompt(
        `Por essa resposta o ninguém esperava... O treinador pode o que de você? (1 - O meu melhor sempre / 2 - Pode esperar gol ) `
      );
    }
    if (reporter1 == 1) {
      console.log();
      personagem.maisTempo(12);
      personagem.passagemDia(6);
      personagem.menosRespeito(1);
      personagem.menosOverall(1);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Essa resposta foi mais amena, ganhou um pouquinho de atributos. `
          .yellow
      );
    } else if (reporter1 == 2) {
      console.log();
      personagem.maisTempo(12);
      personagem.passagemDia(6);
      personagem.maisRespeito(2);
      personagem.maisOverall(2);
      console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
      console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
      console.log(
        `Essa resposta foi muito boa. Passou confiança e limpou um pouco a imagem da pergunta anterior.  `
          .yellow
      );
    }
  } else if (sabado == 2) {
    console.log();
    personagem.maisTempo(12);
    personagem.passagemDia(6);
    personagem.maisRespeito(1);
    personagem.maisOverall(1);
    console.log(`Agora você tem ${Number(personagem.overall)}`.yellow);
    console.log(`Agora você tem ${Number(personagem.respeito)}`.yellow);
    console.log(`Essa resposta foi bem neutra. Resposta perfeita. `.yellow);
  } else {
    console.log(`Digite uma opção válida! `.yellow);
  }
  pressEnter();
} while (personagem.overall <= 75 && personagem.respeito <= 75);

// Esse é meu sétimo ciclo, mas ele só entra aqui condicionado aos parametros do DO...WHILE de cima, ou seja, precisa atingir 75 de respeito e 75 de overall para entrar aqui.
// Se isso não acontecer, o programa fica rodando até ele atingir e determinar quando ele foi convocado, que é seu grande objetivo.
domingo: do
  while (personagem.overall >= 75 && personagem.respeito >= 75) {
    console.log();
    let dia6 = dias[6];
    console.log(`=======${dia6}=======`.yellow);
    console.log(`=======CONVOCAÇÃO DA SELEÇÃO=======`.yellow);
    pressEnter();
    console.log();
    console.log(
      `Convocação da seleção Brasilera! Alfredo foi convocado por seu desempenho! Houve até coletiva de imprensa. `
        .yellow
    );
    console.log();

    let coletiva = +prompt(
      `Estamos inciando a coletiva. Primeira pergunta para Alfredo! - Alfredo, como você se sente em sua primeira convocação? 1 - Muito feliz ou 2 - Sabia que esse dia ia chegar? `
    );
    while (coletiva == 0 || coletiva > 2 || isNaN(coletiva)) {
      console.log(`Digite uma resposta válida! `.yellow);
      coletiva = +prompt(
        `Estamos inciando a coletiva. Primeira pergunta para Alfredo! - Alfredo, como você se sente em sua primeira convocação? 1 - Muito feliz ou 2 - Sabia que esse dia ia chegar? `
      );
    }
    if (coletiva == 1) {
      console.log();

      personagem.maisTempo(12);
      personagem.passagemDia(7);
      personagem.maisRespeito(10);
      console.log(
        `"Ah, cara! Estou muito feliz! Sempre sonhei por esse momento e não sabia que ia chegar tão cedo!"`
          .yellow
      );
      console.log(
        `Com essa resposta, seu respeito aumentou muito, Alfredo! ${Number(
          personagem.respeito
        )} é seu nível de respeito! `.yellow
      );
    } else if (coletiva == 2) {
      console.log();
      personagem.maisTempo(12);
      personagem.passagemDia(7);
      personagem.menosRespeito(5);
      console.log(
        `"Sempre soube que esse dia ia chegar, um jogador como eu nunca pode ficar de fora da convocatória!" `
          .yellow
      );
      console.log(
        `Com essa mala toda, seu nível de respeito baixou! ${Number(
          personagem.respeito
        )}`.yellow
      );
    }
    console.log();
    personagem.maisTempo(12);
    personagem.passagemDia(7);
    personagem.maisOverall();
    personagem.maisOverall();
    console.log(
      `Alfredo conseguiu o objetivo e foi convocado! THE END! `.yellow
    );
    console.log(
      `Nível de respeito ficou em ${Number(personagem.respeito)}`.yellow
    );
    console.log(
      `Nível de overall ficou em ${Number(personagem.overall)}`.yellow
    );
    break;
  }
while (true);
