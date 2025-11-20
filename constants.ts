import { EbookData } from './types';

export const EBOOK_CONTENT: EbookData = {
  title: "Manual do Atendimento de Alta Performance",
  subtitle: "Transforme conversas em clientes todos os dias no WhatsApp",
  intro: {
    id: 'intro',
    title: "Introdução: A Nova Era das Vendas",
    subtitle: "Vender nunca foi sobre empurrar ofertas. Sempre foi sobre conversar do jeito certo.",
    content: [
      { type: 'paragraph', text: "Hoje, o WhatsApp é mais do que um aplicativo de mensagens. É onde dúvidas são resolvidas, decisões acontecem, confiança é construída — e vendas nascem. Todos os dias. Para qualquer negócio. Em qualquer nicho." },
      { type: 'paragraph', text: "Mas existe um problema silencioso que trava milhares de vendas: A falta de condução. Não é falta de cliente. Não é falta de interesse. Não é falta de orçamento. Não é 'o mercado'." },
      { type: 'highlight', title: "O Problema Real", variant: 'red', icon: 'warning', text: "A maioria dos atendimentos no WhatsApp são: frios, genéricos, robóticos, sem intenção, sem estrutura e sem ritmo." },
      { type: 'paragraph', text: "E quando a conversa não tem direção, o cliente até chega… Mas não avança. O que falta não é 'saber vender'. É saber conduzir." },
      { type: 'heading', text: "Por que este manual existe", level: 2 },
      { type: 'paragraph', text: "Este manual foi criado para te entregar algo que ninguém ensina: Um processo claro e simples para transformar conversas em clientes." },
      { type: 'list', style: 'check', items: [
        "Sem pressão.",
        "Sem frases prontas que soam artificiais.",
        "Sem técnicas agressivas.",
        "Sem atalhos mágicos."
      ]},
      { type: 'paragraph', text: "A ideia aqui é outra: Vender de forma humana, estratégica e natural. Com intenção. Com presença. Com direção. Com profissionalismo. Com segurança." },
      { type: 'heading', text: "O que você vai aprender aqui", level: 2 },
      { type: 'list', style: 'bullet', items: [
        "Responder com presença (não com pressa)",
        "Personalizar mensagens sem forçar intimidade",
        "Fazer perguntas que revelam o que o cliente realmente precisa",
        "Entender o momento certo de enviar preços",
        "Usar autoridade de forma leve e acolhedora",
        "Aplicar provas sociais que dissolvem inseguranças",
        "Criar urgência sem pressão",
        "Enviar links com clareza e segurança",
        "Fazer follow-up sem parecer insistente",
        "Fechar conversas mantendo as portas abertas para futuras vendas"
      ]},
      { type: 'quote', text: "Venda é consequência de duas coisas: Conexão + Clareza. E quando o atendimento entrega isso, o cliente sente: 'Estou sendo bem cuidado'.", author: "Manual UP! Company" },
      { type: 'highlight', variant: 'gold', icon: 'star', title: "O Convite", text: "Ao abrir este manual, você está escolhendo elevar seu padrão de atendimento. Vender deixa de ser esforço. E se torna consequência." }
    ]
  },
  chapters: [
    {
      id: 'cap1',
      title: "Capítulo 1: Velocidade Fecha Vendas",
      subtitle: "A rapidez que acolhe, conduz e transforma intenção em decisão",
      content: [
        { type: 'paragraph', text: "Existe uma regra simples — e quase sempre ignorada — sobre vendas pelo WhatsApp:" },
        { type: 'quote', text: "Quanto mais quente o cliente chega, mais rápido ele esfria." },
        { type: 'paragraph', text: "O cliente que te chama no WhatsApp não está 'pesquisando com calma'. Ele está no momento de decisão, e esse é o momento mais valioso da jornada dele. Quando você demora, o que ele entende não é 'estou ocupado'. É: 'Não é tão importante assim', 'Talvez não tenham organização', 'Não sei se posso confiar'." },
        { type: 'heading', text: "Velocidade não é pressa. Velocidade é presença.", level: 2 },
        { type: 'paragraph', text: "Quando falamos em responder rápido, não estamos dizendo 'responda correndo'. Estamos dizendo: Responda com intenção. Responda mostrando que o cliente importa. Uma boa resposta rápida comunica: 'Estou aqui por você'." },
        { type: 'highlight', variant: 'red', title: "O que destrói vendas", icon: 'warning', text: "Atraso sem aviso. Cliente: 'Olá, queria saber sobre o clareamento.' Você (depois de 1h27): 'Oi, diga.' -> Perdeu. A intenção esfriou." },
        { type: 'highlight', variant: 'green', title: "O que mantém o cliente", icon: 'check', text: "Cliente: 'Oi, vi o anúncio...' Você (em até 5 minutos): 'Olá! Acabei de ver sua mensagem aqui. Posso te ajudar agora — o que te trouxe até a limpeza?' -> Acolhe, mostra presença e reabre a porta." },
        { type: 'heading', text: "O Que Fazer (Modo Profissional)", level: 2 },
        { type: 'list', style: 'number', items: [
          "Responder em até 3–5 minutos: Não precisa resolver tudo, basta segurar o cliente.",
          "Sempre responda com direção: Em vez de 'oi', use 'Olá! Vi sua mensagem. Me conta rapidinho: o que você gostaria de entender primeiro?'",
          "Se estiver com outro atendimento, avise: 'Estou finalizando um atendimento aqui, mas já te respondo em poucos minutinhos, tá?'",
          "Use uma mensagem automática bem feita: Nada frio. Nada mecânico."
        ]},
        { type: 'quote', text: "Você não fecha vendas rápido. Você fecha vendas quando responde rápido. Velocidade não é correria: É intenção.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap2',
      title: "Capítulo 2: Personalização Inteligente",
      subtitle: "A arte de fazer o cliente sentir que a mensagem foi escrita só para ele",
      content: [
        { type: 'paragraph', text: "No WhatsApp, o que transforma uma conversa comum em uma venda não é uma frase bonita. Nem um script decorado. É personalização. O cliente só continua conversando quando sente que você está falando com ele, não para qualquer pessoa." },
        { type: 'heading', text: "O que NÃO é personalização", level: 3 },
        { type: 'list', style: 'cross', items: [
          "Puxa-saquismo",
          "Intimidade forçada",
          "Falar 'querida/querido' sem conhecer",
          "Copiar e colar frase padrão com o nome no início"
        ]},
        { type: 'heading', text: "Os 5 Elementos da Personalização Perfeita", level: 2 },
        { type: 'list', style: 'number', items: [
          "Nome (quando disponível): Se aparece, use. Se não, pergunte com naturalidade.",
          "Origem da conversa: 'Vi que você veio pelo nosso anúncio...'",
          "Contexto: O cliente precisa sentir que você leu a mensagem dele. 'Entendi que você quer saber sobre horários.'",
          "Direção: Toda boa resposta termina com uma pergunta inteligente.",
          "Ritmo humano: Responda no ritmo do cliente."
        ]},
        { type: 'highlight', variant: 'dark', title: "Exemplos Prontos", icon: 'star', text: "Exemplo 1: 'Oi, Rafael! Tudo bem? Vi que você veio pelo nosso anúncio de consultoria. Me conta o que você está buscando resolver agora.'\n\nExemplo 2: 'Perfeito, Ana. Só pra te direcionar certinho: seu foco agora é entender valores, horários ou qual opção combina melhor com você?'" },
        { type: 'quote', text: "O cliente só continua quando sente que você está falando com ELE. A personalização não é detalhe. É porta de entrada.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap3',
      title: "Capítulo 3: Perguntas que Vendem",
      subtitle: "Quem faz as perguntas certas controla a direção da conversa",
      content: [
        { type: 'paragraph', text: "A maioria dos atendimentos tenta explicar demais, justificar demais. Mas vender pelo WhatsApp não é sobre 'falar'. É sobre guiar. E quem guia é quem pergunta." },
        { type: 'heading', text: "As 3 Perguntas Mais Importantes da Venda", level: 2 },
        { type: 'highlight', variant: 'gold', title: "1. A Pergunta de Direção", icon: 'star', text: "'Perfeito! Para eu te ajudar da melhor forma, o que você quer entender primeiro — valores, horários ou a melhor opção para o seu caso?' -> Elimina ruído e organiza a conversa." },
        { type: 'highlight', variant: 'gold', title: "2. A Pergunta de Profundidade", icon: 'star', text: "'Entendi! E qual foi o motivo principal que te fez buscar isso agora?' -> Revela a dor e o desejo real." },
        { type: 'highlight', variant: 'gold', title: "3. A Pergunta de Confirmação", icon: 'star', text: "'Ótimo! Só pra confirmar, então: seu objetivo é ______, certo?' -> Prepara o terreno para o preço." },
        { type: 'heading', text: "Perguntas Proibidas (Nunca Use)", level: 3 },
        { type: 'list', style: 'cross', items: [
          "Vai querer ou não?",
          "Pode ser?",
          "Me diz seu orçamento.",
          "Quer marcar?",
          "Vai pensar?"
        ]},
        { type: 'quote', text: "Não convença o cliente. Deixe o cliente se convencer através das respostas que ele mesmo te dá.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap4',
      title: "Capítulo 4: Nunca Envie Preço Antes",
      subtitle: "Preço não vende. Contexto vende. Direção vende.",
      content: [
        { type: 'paragraph', text: "Existe um erro que derruba vendas todos os dias: Enviar o preço cedo demais. Quando a mente recebe um número sem entender o valor, ela interpreta esse número como risco." },
        { type: 'paragraph', text: "Quando você manda preço cedo demais, o cliente apenas diz: 'Valeu, vou ver.' E nunca mais volta." },
        { type: 'heading', text: "O Momento Correto de Enviar o Preço", level: 2 },
        { type: 'paragraph', text: "O preço só deve aparecer quando 3 coisas já aconteceram:" },
        { type: 'list', style: 'number', items: [
          "Você entendeu a necessidade do cliente.",
          "O cliente percebeu que você realmente está ali por ele.",
          "Você confirmou o objetivo dele."
        ]},
        { type: 'highlight', variant: 'dark', title: "A Sequência Perfeita", icon: 'fire', text: "Passo 1: 'Perfeito, Ana. Entendi que seu objetivo é melhorar a textura...'\nPasso 2: 'Com base no que você me contou, tenho duas opções que funcionam muito bem...'\nPasso 3: 'Essas opções são as mais procuradas...'\nPasso 4: 'A primeira opção fica em R$ ___. A segunda em R$ ___. Se quiser, te explico a diferença.'" },
        { type: 'quote', text: "O preço é a última parte da conversa. Antes do preço vem contexto. Antes do contexto vem conexão. Antes da conexão vem direção.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap5',
      title: "Capítulo 5: Autoridade e Confiança",
      subtitle: "O cliente só compra quando sente que está em boas mãos",
      content: [
        { type: 'paragraph', text: "O cliente não compra o que você vende. Ele compra a sensação de segurança que você entrega. A pergunta oculta é: 'Posso confiar?'" },
        { type: 'heading', text: "Os 3 Pilares da Autoridade Natural", level: 2 },
        { type: 'list', style: 'bullet', items: [
          "Competência aparente: Demonstre domínio sem dizer que é especialista. 'Esse tipo de caso é mais comum do que imaginam...'",
          "Provas visíveis: A mente acredita no que ela pode ver (depoimentos, resultados).",
          "Direcionamento seguro: O cliente confia em quem sabe guiá-lo. 'Pelo que você me descreveu, a solução mais indicada para você é essa aqui.'"
        ]},
        { type: 'highlight', variant: 'green', title: "Como demonstrar autoridade com leveza", icon: 'check', text: "1. Reconheça o que o cliente quer.\n2. Mostre experiência, sem exagero ('Esse tipo de caso é bem comum por aqui').\n3. Explique a lógica da recomendação.\n4. Mostre que está do lado dele." },
        { type: 'quote', text: "O cliente não precisa que você impressione. Ele precisa sentir que está em boas mãos.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap6',
      title: "Capítulo 6: Provas Sociais",
      subtitle: "Amoleça qualquer objeção com provas",
      content: [
        { type: 'paragraph', text: "Antes que o cliente confie em você, ele confia no que outras pessoas dizem sobre você. A prova social dá licença emocional para ele avançar." },
        { type: 'heading', text: "Tipos de Prova Social para WhatsApp", level: 2 },
        { type: 'list', style: 'check', items: [
          "Depoimentos curtos e naturais ('Gostei muito, vi resultado na primeira semana!')",
          "Prints de conversas reais (com nomes apagados)",
          "Número de atendimentos ('Mais de 340 pessoas passaram pelo mesmo protocolo')",
          "Resultados repetidos ('Geralmente quem chega com a mesma necessidade que você se adapta muito bem')"
        ]},
        { type: 'highlight', variant: 'dark', title: "Como Inserir na Conversa", icon: 'star', text: "'Esse protocolo é bem procurado por pessoas que chegam com a mesma necessidade que você. Inclusive, olha o que a Camila me mandou semana passada...'" },
        { type: 'quote', text: "O cliente precisa ver que outras pessoas confiaram antes para conseguir confiar agora.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap7',
      title: "Capítulo 7: Criar Urgência",
      subtitle: "Urgência não é pressão. É ajudar o cliente a não adiar.",
      content: [
        { type: 'paragraph', text: "O ser humano tem um comportamento natural: a tendência de adiar decisões. Urgência não é correr atrás do cliente. É tirar o cliente da indecisão." },
        { type: 'heading', text: "O que NÃO é urgência", level: 3 },
        { type: 'list', style: 'cross', items: [
          "Última chance!!!",
          "Só hoje!!!",
          "Vai perder hein?",
          "Promoção acaba em 5 minutos"
        ]},
        { type: 'heading', text: "Formas Elegantes de Criar Urgência", level: 2 },
        { type: 'list', style: 'bullet', items: [
          "Urgência de agenda: 'Consigo esse horário ainda hoje ou amanhã.'",
          "Urgência de demanda real: 'Esse procedimento está com bastante procura essa semana.'",
          "Urgência baseada no objetivo dele: 'Como você quer o resultado ainda em março, o ideal é iniciarmos essa semana.'",
          "Urgência emocional leve: 'Se já faz sentido pra você, melhor não deixar passar.'"
        ]},
        { type: 'quote', text: "Urgência é lembrar o cliente da importância daquilo que ele já quer. Não é forçar. É apoiar.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap8',
      title: "Capítulo 8: Enviar o Link",
      subtitle: "Como enviar o link sem quebrar a conversa",
      content: [
        { type: 'paragraph', text: "Existe um erro quase universal: Enviar o link cedo demais ou de forma abrupta. O link não é um ato técnico, é um ato emocional. É onde o cliente decide ou trava." },
        { type: 'highlight', variant: 'green', title: "A Sequência Perfeita para o Link", icon: 'check', text: "1. Confirme a decisão: 'Perfeito! Então vamos seguir com essa opção, tá?'\n2. Prepare o cliente: 'Vou te enviar o link certinho por aqui.'\n3. Envie com acolhimento: 'Aqui está o link pra você finalizar com segurança: (link)'\n4. Explique o que ele vai ver: 'Quando abrir, vai ver o nome da opção...'\n5. Reforce presença: 'Qualquer coisa, estou aqui.'" },
        { type: 'quote', text: "Não é o link que fecha a venda. É a maneira como você entrega o link.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap9',
      title: "Capítulo 9: Follow-up Elegante",
      subtitle: "Follow-up não é insistência. É cuidado.",
      content: [
        { type: 'paragraph', text: "Se o cliente não respondeu, não significa que ele não quer. Significa que ele se distraiu. Follow-up é recuperar a oportunidade que a vida tirou." },
        { type: 'heading', text: "Modelos de Follow-up Prontos", level: 2 },
        { type: 'highlight', variant: 'gold', title: "Follow-up Suave (Universal)", icon: 'star', text: "'Oi! Só passei pra ver se conseguiu ver a mensagem que te enviei mais cedo 😊 Se precisar de ajuda, estou aqui!'" },
        { type: 'highlight', variant: 'gold', title: "Follow-up Pós-Link", icon: 'star', text: "'Te mandei o link mais cedo! Se quiser, posso ficar aqui com você enquanto finaliza, tá?'" },
        { type: 'highlight', variant: 'gold', title: "Follow-up Consultivo", icon: 'star', text: "'Queria só te ajudar a não perder o momento certo de iniciar, já que seu objetivo é _______. Se quiser, te explico rapidinho.'" },
        { type: 'quote', text: "Follow-up não é insistir. É lembrar o cliente daquilo que ele já queria.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap10',
      title: "Capítulo 10: Fechamento Elegante",
      subtitle: "Como encerrar sem fechar portas",
      content: [
        { type: 'paragraph', text: "Fechar não é empurrar. O cliente não compra no encerramento, ele compra no relacionamento. Se você fecha com elegância, ele volta depois." },
        { type: 'heading', text: "A Sequência Perfeita de Fechamento", level: 2 },
        { type: 'list', style: 'number', items: [
          "Reforce a escolha: 'Ótimo! Essa opção faz total sentido pra você.'",
          "Oriente o passo: 'Vou te enviar o link e te explico...'",
          "Entregue com leveza.",
          "Encerramento com portas abertas: 'E se não conseguir finalizar agora, sem problema — é só me chamar depois que seguimos juntos.'"
        ]},
        { type: 'paragraph', text: "Essa última frase é ouro. Ela tira a pressão, deixa espaço e garante o retorno." },
        { type: 'quote', text: "Encerrar com elegância não fecha portas. Encerrar com elegância cria retorno.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap11',
      title: "Capítulo 11: Mensagens Proibidas",
      subtitle: "O que jamais enviar no WhatsApp",
      content: [
        { type: 'paragraph', text: "Existem mensagens que queimam autoridade, travam o cliente e passam insegurança. Evite a todo custo." },
        { type: 'heading', text: "As Proibidas e suas Correções", level: 2 },
        { type: 'list', style: 'cross', items: [
          "Vai querer? -> Troque por: 'Se fizer sentido pra você, posso te ajudar a organizar tudo agora.'",
          "Você sumiu -> Troque por: 'Só voltei pra ver se conseguiu ver minha última mensagem.'",
          "Me avisa quando decidir -> Troque por: 'Fique à vontade pra ver com calma. Quando quiser seguir, estou por aqui.'",
          "Qual seu orçamento? -> Troque por: 'O que é prioridade pra você: resultado rápido, economia ou equilíbrio?'",
          "Quer marcar? -> Troque por: 'Prefere agendar para hoje ou amanhã?'"
        ]},
        { type: 'quote', text: "A mensagem errada destrói confiança. A mensagem certa constrói decisão.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap12',
      title: "Capítulo 12: Conexão sem Intimidade",
      subtitle: "Mostre presença sem invadir",
      content: [
        { type: 'paragraph', text: "O cliente não procura amizade. Ele procura segurança. Conexão vende. Intimidade forçada afasta." },
        { type: 'heading', text: "Como evitar intimidade excessiva", level: 2 },
        { type: 'list', style: 'cross', items: [
          "Não use apelidos (amor, flor, anjo)",
          "Não mande áudio longo demais",
          "Não use emojis em excesso",
          "Não compartilhe vida pessoal"
        ]},
        { type: 'paragraph', text: "Conexão perfeita = humano + profissional + acolhedor + firme. Exemplo: 'Ana, entendi totalmente o que você precisa. Vamos fazer assim...'" },
        { type: 'quote', text: "O cliente não precisa que você seja íntimo. Ele precisa sentir que você está com ele.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap13',
      title: "Capítulo 13: Lidando com Objeções",
      subtitle: "Objeção é um pedido de segurança",
      content: [
        { type: 'paragraph', text: "Objeção não significa 'não'. Significa 'Preciso de mais segurança'. O cliente só tem objeção quando está interessado." },
        { type: 'heading', text: "A Fórmula da Resposta Elegante", level: 2 },
        { type: 'list', style: 'number', items: [
          "Acolher: 'Claro, é super comum essa dúvida.'",
          "Clarear: Explique o ponto com leveza.",
          "Direcionar: 'Se quiser, posso te orientar no melhor jeito de começar.'"
        ]},
        { type: 'highlight', variant: 'green', title: "Respondendo 'Está caro'", icon: 'check', text: "'Entendo totalmente. E é justamente por isso que te indiquei essa opção — ela entrega exatamente o que você está buscando. Se quiser, te explico como funciona pra você avaliar com calma.'" },
        { type: 'quote', text: "Objeção não é problema. Quando você aprende a acolher, clarear e direcionar, as objeções se tornam portas de entrada.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap14',
      title: "Capítulo 14: Tom de Voz",
      subtitle: "O cliente compra o jeito como você diz",
      content: [
        { type: 'paragraph', text: "Tom de voz é a combinação de ritmo, energia e educação. O cliente sente o tom antes de ler o conteúdo." },
        { type: 'heading', text: "A Estrutura da Mensagem Perfeita", level: 2 },
        { type: 'list', style: 'check', items: [
          "Acolhimento: 'Perfeito!', 'Entendi!'",
          "Clareza: 'O procedimento funciona assim...'",
          "Direção: 'Se quiser, te explico os próximos passos.'"
        ]},
        { type: 'paragraph', text: "Use ritmo. Frases curtas. Uma ideia por linha. Leitura fácil vira decisão fácil." },
        { type: 'quote', text: "O cliente compra o tom antes de comprar a solução.", author: "Regra de Ouro" }
      ]
    },
    {
      id: 'cap15',
      title: "Capítulo 15: Estrutura Completa",
      subtitle: "Do início ao fechamento",
      content: [
        { type: 'paragraph', text: "A conversa perfeita não acontece por acaso. Ela segue um caminho." },
        { type: 'heading', text: "O Checklist do Atendimento Perfeito", level: 2 },
        { type: 'list', style: 'number', items: [
          "Responder rápido (3-5 min)",
          "Personalizar (Nome + Contexto)",
          "Perguntar o que importa (Direção + Profundidade)",
          "Confirmar o objetivo",
          "Indicar a solução certa (Autoridade)",
          "Inserir prova social curta",
          "Apresentar valor na hora certa",
          "Enviar link com clareza",
          "Fazer follow-up elegante",
          "Encerrar com portas abertas"
        ]},
        { type: 'quote', text: "Quem segue uma estrutura, vende mais. Quem improvisa, perde venda sem perceber.", author: "Regra de Ouro" }
      ]
    }
  ],
  conclusion: {
    id: 'conclusao',
    title: "Conclusão: Transformação Diária",
    subtitle: "Como transformar atendimento em crescimento diário",
    content: [
      { type: 'paragraph', text: "Se você chegou até aqui, significa uma coisa: Você está escolhendo evoluir. Você tem agora um mapa completo." },
      { type: 'highlight', variant: 'gold', title: "A Verdade", icon: 'star', text: "A maioria dos negócios acha que precisa de mais leads. Mas na realidade, precisam de melhor atendimento. Tráfego sem atendimento = dinheiro jogado fora." },
      { type: 'heading', text: "Aplique apenas 3 coisas hoje", level: 2 },
      { type: 'list', style: 'check', items: [
        "Responder rápido",
        "Conduzir com perguntas inteligentes",
        "Enviar o link com segurança e orientação"
      ]},
      { type: 'paragraph', text: "Você não precisa ser 'bom de vendas'. Você precisa de presença, estrutura e intenção. A venda deixa de ser esforço e passa a ser consequência." },
      { type: 'quote', text: "Vender é conversar. Atender é cuidar. Conduzir é guiar. E decisão é o resultado de segurança.", author: "Manual UP! Company" },
      { type: 'paragraph', text: "Pegue esse material. Leia de novo. Pratique. Aplique. Quem domina atendimento... DOMINA VENDAS." }
    ]
  }
};