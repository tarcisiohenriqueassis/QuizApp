import embaralharAlternativas from "../utils/embaralharPerguntas";

export const perguntasLegislacaoEspecial = embaralharAlternativas([
  // Conceitos gerais
  {
    pergunta: "A Lei nº 11.343/2006 estabelece normas para:",
    opcoes: ["Prevenção e repressão ao tráfico ilícito de drogas e atenção a usuários", "Apenas repressão a usuários", "Regulação do comércio de bebidas alcoólicas", "Crimes contra o patrimônio"], 
    correta: 0
  },
  {
    pergunta: "A Lei de Drogas define como drogas:",
    opcoes: ["Substâncias entorpecentes, psicoativas ou que causem dependência", "Somente drogas ilícitas sintéticas", "Apenas bebidas alcoólicas", "Produtos farmacêuticos legais"], 
    correta: 0
  },
  {
    pergunta: "A lei prevê medidas para usuários e dependentes químicos, que incluem:",
    opcoes: ["Tratamento, reabilitação e medidas educativas", "Punição criminal obrigatória", "Internação compulsória sem critério", "Apenas advertência verbal"], 
    correta: 0
  },

  // Tráfico de drogas
  {
    pergunta: "O tráfico de drogas, segundo a Lei 11.343/2006, consiste em:",
    opcoes: ["Produzir, vender, transportar ou fornecer drogas ilícitas", "Consumir drogas apenas", "Cultivar plantas legais", "Apenas armazenar medicamentos"], 
    correta: 0
  },
  {
    pergunta: "As penas para tráfico de drogas podem incluir:",
    opcoes: ["Reclusão de 5 a 15 anos e multa", "Detenção de 6 meses apenas", "Advertência verbal", "Suspensão de direitos políticos"], 
    correta: 0
  },
  {
    pergunta: "O tráfico privilegiado, previsto na lei, ocorre quando:",
    opcoes: ["O agente é primário, de bons antecedentes e pequeno envolvimento", "Tráfico internacional somente", "Usuário compartilhando drogas", "Fornecedor de medicamentos legais"], 
    correta: 0
  },
  {
    pergunta: "No tráfico privilegiado, a pena pode ser:",
    opcoes: ["Reduzida de um sexto a dois terços", "Mantida integralmente", "Substituída por multa obrigatória", "Apenas advertência"], 
    correta: 0
  },

  // Posse e uso
  {
    pergunta: "O usuário de drogas para consumo pessoal deve ser punido com:",
    opcoes: ["Advertência, prestação de serviços à comunidade ou medida educativa", "Reclusão de 5 anos", "Multa elevada obrigatória", "Detenção de 3 anos"], 
    correta: 0
  },
  {
    pergunta: "A quantidade de droga para caracterizar uso pessoal é determinada por:",
    opcoes: ["Circunstâncias do caso e legislação estadual", "Peso fixo de 10 gramas apenas", "Tipo de droga sem critério", "Valor econômico da droga"], 
    correta: 0
  },
  {
    pergunta: "O porte de drogas para consumo pessoal não implica necessariamente:",
    opcoes: ["Tráfico de drogas", "Advertência educativa", "Prestação de serviços comunitários", "Medida de prevenção"], 
    correta: 0
  },

  // Medidas preventivas e tratamento
  {
    pergunta: "A lei estabelece medidas de prevenção ao uso de drogas que incluem:",
    opcoes: ["Campanhas educativas, programas escolares e sociais", "Somente punição penal", "Exclusivamente internação compulsória", "Restrição econômica apenas"], 
    correta: 0
  },
  {
    pergunta: "O tratamento e reabilitação do dependente químico podem ser:",
    opcoes: ["Voluntários ou compulsórios, de acordo com avaliação judicial", "Obrigatoriamente internos sem avaliação", "Proibidos pela lei", "Aplicáveis apenas a menores"], 
    correta: 0
  },
  {
    pergunta: "Medidas educativas para usuários incluem:",
    opcoes: ["Cursos, palestras e orientação social", "Reclusão obrigatória", "Multa econômica", "Suspensão de direitos políticos"], 
    correta: 0
  },

  // Organização e fiscalização
  {
    pergunta: "A lei prevê atuação conjunta de:",
    opcoes: ["Autoridades policiais, judiciárias, órgãos de saúde e assistência social", "Apenas polícia civil", "Só Ministério Público", "Somente tribunais federais"], 
    correta: 0
  },
  {
    pergunta: "O Sistema Nacional de Políticas Públicas sobre Drogas (Sisnad) tem como objetivo:",
    opcoes: ["Integrar ações de prevenção, tratamento e reinserção social", "Executar penas de reclusão", "Apenas fiscalização policial", "Regulamentar comércio de drogas lícitas"], 
    correta: 0
  },
  {
    pergunta: "As drogas consideradas ilícitas são definidas por:",
    opcoes: ["Portarias do Ministério da Saúde e legislação complementar", "Convenção internacional apenas", "Legislação municipal isolada", "Código Civil"], 
    correta: 0
  },

  // Crimes conexos
  {
    pergunta: "A lei prevê penas diferenciadas para associação ao tráfico, que consiste em:",
    opcoes: ["Unir-se a outros para praticar tráfico de drogas", "Consumir drogas em grupo", "Organizar campanhas educativas", "Fornecer tratamento a dependentes"], 
    correta: 0
  },
  {
    pergunta: "A associação para o tráfico é punida com:",
    opcoes: ["Reclusão de 3 a 10 anos e multa", "Detenção de 6 meses", "Advertência verbal", "Prestação de serviços comunitários"], 
    correta: 0
  },
  {
    pergunta: "A lei prevê crimes conexos como financiamento ao tráfico, com pena de:",
    opcoes: ["2 a 5 anos de reclusão e multa", "1 mês de detenção", "Advertência educativa", "Suspensão de direitos civis"], 
    correta: 0
  },

  // Legislação complementar
  {
    pergunta: "A Lei 11.343/2006 é conhecida também como:",
    opcoes: ["Lei de Drogas", "Código Penal Antidrogas", "Lei de Entorpecentes", "Estatuto do Usuário"], 
    correta: 0
  },
  {
    pergunta: "A lei estabelece medidas de cooperação internacional para combater:",
    opcoes: ["Tráfico ilícito de drogas", "Apenas crimes patrimoniais", "Questões tributárias", "Direitos humanos individuais"], 
    correta: 0
  },
  {
    pergunta: "O juiz, ao aplicar a lei, deve considerar:",
    opcoes: ["Circunstâncias do caso, antecedentes e grau de participação", "Pena mínima obrigatória sem análise", "Aplicação automática de multa", "Somente relatórios policiais"], 
    correta: 0
  },
  {
    pergunta: "Medidas de reinserção social previstas na lei incluem:",
    opcoes: ["Programas de educação, trabalho e acompanhamento social", "Internação compulsória exclusiva", "Punição sem tratamento", "Sanções econômicas apenas"], 
    correta: 0
  },
  {
    pergunta: "A lei busca equilibrar:",
    opcoes: ["Repressão ao tráfico e atenção ao usuário/dependente", "Pena econômica e liberdade individual", "Comércio de drogas e impostos", "Apenas repressão policial"], 
    correta: 0
  }, // Conceitos gerais
  {
    pergunta: "A Lei nº 8.072/1990 tem como objetivo:",
    opcoes: ["Definir crimes hediondos e estabelecer penas mais severas", "Regulamentar apenas crimes patrimoniais", "Criar políticas de prevenção de tráfico de drogas", "Definir crimes ambientais"], 
    correta: 0
  },
  {
    pergunta: "São considerados crimes hediondos, segundo a lei:",
    opcoes: ["Homicídio qualificado, latrocínio, estupro e sequestro", "Furto simples, difamação, calúnia", "Tráfico de drogas exclusivamente", "Contravenções penais"], 
    correta: 0
  },
  {
    pergunta: "A principal característica dos crimes hediondos é:",
    opcoes: ["Gravidade extrema e repulsa social", "Baixa potencial ofensiva", "Natureza administrativa", "Caráter civil apenas"], 
    correta: 0
  },

  // Pena e progressão
  {
    pergunta: "Para crimes hediondos, a lei estabelece que:",
    opcoes: ["Não há possibilidade de fiança e a progressão de regime é mais rigorosa", "Sempre há fiança", "Progressão de regime é automática", "Pena é apenas pecuniária"], 
    correta: 0
  },
  {
    pergunta: "O cumprimento inicial da pena em regime fechado para crimes hediondos deve ser:",
    opcoes: ["De pelo menos 2/5 do total para réu primário e 3/5 para reincidente", "1/3 do total para todos", "Pena máxima sem progressão", "Detenção mínima de 6 meses apenas"], 
    correta: 0
  },
  {
    pergunta: "A lei prevê que os condenados por crimes hediondos:",
    opcoes: ["Cumpram pena integralmente antes da progressão para regime menos rigoroso", "Podem obter liberdade condicional imediatamente", "Cumpram apenas pena pecuniária", "Sejam tratados como contravenção"], 
    correta: 0
  },

  // Reincidência e agravantes
  {
    pergunta: "A reincidência em crime hediondo implica:",
    opcoes: ["Punição mais rigorosa e dificuldade de progressão de regime", "Redução automática de pena", "Advertência verbal", "Suspensão temporária da pena"], 
    correta: 0
  },
  {
    pergunta: "São agravantes previstos na lei para crimes hediondos:",
    opcoes: ["Motivação torpe, meios cruéis ou recurso que dificulte defesa da vítima", "Motivo econômico apenas", "Circunstâncias administrativas", "Idade do réu exclusivamente"], 
    correta: 0
  },
  {
    pergunta: "A lei dos crimes hediondos prevê penas adicionais para:",
    opcoes: ["Crimes cometidos contra menores ou idosos", "Crimes econômicos", "Infrações de trânsito", "Crimes ambientais apenas"], 
    correta: 0
  },

  // Crimes hediondos específicos
  {
    pergunta: "O estupro é considerado crime hediondo segundo a Lei 8.072/1990:",
    opcoes: ["Sim, devido à gravidade e repulsa social", "Não, é crime comum", "Apenas se praticado contra autoridade", "Somente se houver violência armada"], 
    correta: 0
  },
  {
    pergunta: "O latrocínio é definido como:",
    opcoes: ["Roubo seguido de morte", "Furto simples com violência", "Assalto a estabelecimento comercial sem morte", "Crime contra a honra"], 
    correta: 0
  },
  {
    pergunta: "Sequestro e cárcere privado podem ser classificados como:",
    opcoes: ["Crimes hediondos", "Contravenções penais", "Crimes ambientais", "Infrações civis"], 
    correta: 0
  },
  {
    pergunta: "Homicídio qualificado, segundo a lei, inclui:",
    opcoes: ["Motivação torpe, emprego de meio cruel ou recurso que dificulte defesa", "Qualquer homicídio sem distinção", "Apenas mortes por acidente", "Homicídio culposo sem dolo"], 
    correta: 0
  },

  // Aplicação da lei
  {
    pergunta: "A Lei 8.072/1990 é aplicada conjuntamente com:",
    opcoes: ["Código Penal e Código de Processo Penal", "Somente legislação municipal", "Apenas normas administrativas", "Convenções internacionais de comércio"], 
    correta: 0
  },
  {
    pergunta: "Não se admite fiança para crimes hediondos, exceto quando:",
    opcoes: ["A lei expressamente permitir em casos específicos", "Sempre há fiança", "Em crimes culposos apenas", "Em crimes ambientais apenas"], 
    correta: 0
  },
  {
    pergunta: "A Lei de Crimes Hediondos determina que:",
    opcoes: ["Os condenados devem cumprir pena em regime mais rigoroso inicialmente", "Progressão imediata ao regime aberto", "Aplicação de penas alternativas apenas", "Detenção domiciliar obrigatória"], 
    correta: 0
  },
  {
    pergunta: "A reincidência em crimes hediondos influencia:",
    opcoes: ["Regime inicial de cumprimento da pena e possibilidade de progressão", "Exclusivamente valor da multa", "Apenas publicidade da sentença", "Direitos civis do réu"], 
    correta: 0
  },
  {
    pergunta: "A lei considera hediondos crimes cometidos com:",
    opcoes: ["Violência intensa ou grave ameaça à vida", "Danos materiais pequenos", "Infrações administrativas", "Contravenções menores"], 
    correta: 0
  },
  {
    pergunta: "A Lei 8.072/1990 prevê que, durante a execução da pena, os condenados podem:",
    opcoes: ["Ser avaliados para progressão de regime conforme o tempo cumprido e reincidência", "Obter liberdade imediata", "Somente cumprir pena pecuniária", "Ser transferidos automaticamente para regime aberto"], 
    correta: 0
  },
  {
    pergunta: "A legislação busca principalmente:",
    opcoes: ["Reprimir crimes de extrema gravidade e proteger a sociedade", "Aumentar arrecadação fiscal", "Regulamentar comércio de armas", "Executar políticas econômicas"], 
    correta: 0
  },
  {
    pergunta: "Crimes hediondos têm natureza:",
    opcoes: ["Inafiançável e insuscetível de anistia", "Fiançável e passível de indulto", "Administrativa apenas", "Civil e tributária"], 
    correta: 0
  },
  {
    pergunta: "A lei também considera hediondos homicídios cometidos em:",
    opcoes: ["Contexto de latrocínio ou por motivo torpe", "Acidentes de trânsito", "Brigas domésticas sem intenção", "Infrações administrativas"], 
    correta: 0
  },// Conceitos gerais
  {
    pergunta: "A Lei nº 13.869/2019 tem como objetivo:",
    opcoes: ["Definir crimes de abuso de autoridade e estabelecer sanções para agentes públicos", "Regular somente o processo penal", "Tratar exclusivamente de direito civil", "Estabelecer normas tributárias"], 
    correta: 0
  },
  {
    pergunta: "A lei se aplica a:",
    opcoes: ["Agentes públicos no exercício de suas funções, incluindo policiais e magistrados", "Cidadãos comuns", "Empresas privadas", "Organizações internacionais"], 
    correta: 0
  },
  {
    pergunta: "Abuso de autoridade ocorre quando o agente público:",
    opcoes: ["Excede ou desvia de suas atribuições legais causando prejuízo a outrem", "Cumpre ordens legais corretamente", "Exerce função administrativa sem prejuízo", "Executa políticas públicas"], 
    correta: 0
  },

  // Condutas típicas
  {
    pergunta: "É exemplo de abuso de autoridade:",
    opcoes: ["Prender alguém ilegalmente sem fundamento legal", "Expedir ordens dentro da lei", "Aplicar multa legalmente prevista", "Executar tarefas administrativas regulares"], 
    correta: 0
  },
  {
    pergunta: "Negar ao preso os direitos previstos em lei constitui:",
    opcoes: ["Abuso de autoridade", "Crime contra o patrimônio", "Contravenção penal", "Infraestrutura administrativa"], 
    correta: 0
  },
  {
    pergunta: "Exigir vantagem indevida para praticar ato legal configura:",
    opcoes: ["Abuso de autoridade e corrupção", "Apenas abuso civil", "Direito do agente público", "Atuação regular"], 
    correta: 0
  },
  {
    pergunta: "Divulgar informações sigilosas de forma indevida é considerado:",
    opcoes: ["Abuso de autoridade", "Liberdade de imprensa", "Atuação administrativa regular", "Direito civil privado"], 
    correta: 0
  },

  // Sanções
  {
    pergunta: "As penas para abuso de autoridade podem incluir:",
    opcoes: ["Detenção, multa, perda do cargo ou função pública", "Advertência verbal apenas", "Suspensão temporária sem detenção", "Pena econômica isolada"], 
    correta: 0
  },
  {
    pergunta: "A detenção por abuso de autoridade varia geralmente entre:",
    opcoes: ["3 meses a 4 anos, dependendo da gravidade", "6 meses a 10 anos obrigatoriamente", "1 ano fixo para todos os casos", "Somente advertência"], 
    correta: 0
  },
  {
    pergunta: "A perda do cargo ou função pública é uma sanção prevista para:",
    opcoes: ["Abuso de autoridade grave", "Crimes tributários", "Infrações de trânsito", "Atos civis privados"], 
    correta: 0
  },

  // Procedimentos
  {
    pergunta: "Denúncia por abuso de autoridade deve ser feita a:",
    opcoes: ["Autoridade competente ou Ministério Público", "Empresa privada", "Tribunal internacional apenas", "Polícia militar sem supervisão"], 
    correta: 0
  },
  {
    pergunta: "O procedimento para apuração do abuso de autoridade pode incluir:",
    opcoes: ["Investigação administrativa e processo judicial", "Somente advertência verbal", "Multa tributária", "Execução de política pública"], 
    correta: 0
  },
  {
    pergunta: "O réu por abuso de autoridade tem direito a:",
    opcoes: ["Ampla defesa e contraditório", "Perda automática de direitos", "Execução imediata de pena", "Detenção sem julgamento"], 
    correta: 0
  },

  // Crimes específicos
  {
    pergunta: "Prender alguém por preconceito ou discriminação configura:",
    opcoes: ["Abuso de autoridade", "Tráfico de drogas", "Crime ambiental", "Infração administrativa"], 
    correta: 0
  },
  {
    pergunta: "Exigir prestação de informações ou documentos sem fundamento legal caracteriza:",
    opcoes: ["Abuso de autoridade", "Direito administrativo regular", "Atuação civil privada", "Pena pecuniária apenas"], 
    correta: 0
  },
  {
    pergunta: "Realizar busca ou apreensão fora das hipóteses legais constitui:",
    opcoes: ["Abuso de autoridade", "Direito civil", "Atividade administrativa regular", "Apenas infração disciplinar"], 
    correta: 0
  },
  {
    pergunta: "O constrangimento ilegal de pessoa durante investigação configura:",
    opcoes: ["Abuso de autoridade", "Crime ambiental", "Tráfico de drogas", "Infrações cíveis"], 
    correta: 0
  },

  // Aspectos legais
  {
    pergunta: "A lei 13.869/2019 revogou:",
    opcoes: ["Parte da antiga Lei de Abuso de Autoridade (Lei 4.898/1965)", "Código Penal integral", "Lei de Drogas", "Código Civil"], 
    correta: 0
  },
  {
    pergunta: "A lei estabelece que abuso de autoridade é imprescritível?",
    opcoes: ["Não, sujeita-se aos prazos previstos na lei penal", "Sim, em todos os casos", "Somente para magistrados", "Somente para policiais"], 
    correta: 0
  },
  {
    pergunta: "Agente público que excede suas funções com resultado lesivo a direitos individuais comete:",
    opcoes: ["Crime de abuso de autoridade", "Crime de omissão administrativa", "Contravenção penal leve", "Crime civil"], 
    correta: 0
  },
  {
    pergunta: "O controle e fiscalização da lei podem ser exercidos por:",
    opcoes: ["Ministério Público, tribunais de contas e autoridades competentes", "Somente órgãos municipais", "Empresas privadas", "Organizações internacionais"], 
    correta: 0
  },
  {
    pergunta: "A Lei 13.869/2019 busca principalmente:",
    opcoes: ["Proteger direitos individuais e limitar abusos de agentes públicos", "Estabelecer políticas econômicas", "Regular comércio internacional", "Apenas punir usuários de drogas"], 
    correta: 0
  },
  {
    pergunta: "A lei reforça a responsabilização de agentes públicos em:",
    opcoes: ["Atos ilegais que violem direitos fundamentais", "Apenas atos administrativos regulares", "Atos civis privados", "Questões tributárias"], 
    correta: 0
  },// Conceitos gerais
  {
    pergunta: "O Estatuto do Desarmamento (Lei 10.826/2003) tem como objetivo principal:",
    opcoes: ["Controlar a posse e o porte de armas de fogo no Brasil", "Regular apenas o comércio de explosivos", "Estabelecer crimes de trânsito", "Reprimir o tráfico de drogas exclusivamente"], 
    correta: 0
  },
  {
    pergunta: "A posse de arma de fogo é:",
    opcoes: ["O direito de ter arma em residência ou local de trabalho", "O direito de portar arma na rua livremente", "Proibida em qualquer situação", "Restrita apenas a policiais militares"], 
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo é:",
    opcoes: ["O direito de transportar a arma fora da residência ou local de trabalho", "Permitido a qualquer cidadão sem restrição", "Sinônimo de posse", "Exclusivo a agentes públicos federais"], 
    correta: 0
  },

  // Regras de registro e porte
  {
    pergunta: "Para possuir uma arma legalmente, é necessário:",
    opcoes: ["Registro junto à Polícia Federal, comprovação de capacidade técnica e idoneidade", "Apenas comprar na loja", "Ter arma de fabricação própria", "Autorização do vizinho"], 
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para civis só é concedido mediante:",
    opcoes: ["Autorização judicial específica e comprovada necessidade", "Compra em lojas comerciais sem registro", "Apenas idade mínima de 18 anos", "Treinamento informal"], 
    correta: 0
  },
  {
    pergunta: "O Estatuto prevê que armas de fogo ilegais podem ser:",
    opcoes: ["Apreendidas e destruídas", "Vendidas livremente", "Registradas sem fiscalização", "Distribuídas a cidadãos comuns"], 
    correta: 0
  },
  {
    pergunta: "O cidadão que perder o registro da arma ou transferir sem autorização comete:",
    opcoes: ["Crime previsto no Estatuto do Desarmamento", "Infração administrativa leve", "Crime ambiental", "Contravenção civil"], 
    correta: 0
  },

  // Crimes e penalidades
  {
    pergunta: "Portar arma de fogo sem autorização configura:",
    opcoes: ["Crime sujeito a detenção de 1 a 3 anos, além de multa", "Crime civil apenas", "Contravenção leve", "Infração administrativa"], 
    correta: 0
  },
  {
    pergunta: "Vender, fornecer ou transportar arma de fogo de forma ilegal constitui:",
    opcoes: ["Crime com pena de reclusão de 3 a 6 anos", "Apenas advertência", "Infração administrativa", "Crime ambiental"], 
    correta: 0
  },
  {
    pergunta: "Alterar número de série de arma de fogo é:",
    opcoes: ["Crime, com detenção de 3 a 6 anos", "Apenas contravenção civil", "Infração tributária", "Atividade legal"], 
    correta: 0
  },
  {
    pergunta: "Armas apreendidas em operações policiais devem ser:",
    opcoes: ["Encaminhadas à destruição ou reaproveitamento legal autorizado", "Devolvidas ao proprietário sem restrição", "Vendidas em leilão livre", "Registradas no comércio privado"], 
    correta: 0
  },

  // Procedimentos
  {
    pergunta: "A lei prevê registro e fiscalização de armas por meio de:",
    opcoes: ["Polícia Federal", "Prefeitura municipal", "Polícia Militar apenas", "Ministério da Justiça sem registro"], 
    correta: 0
  },
  {
    pergunta: "O Estatuto do Desarmamento estabelece que a venda de armas deve ser:",
    opcoes: ["Autorizada e registrada, com comprovação de capacidade e idoneidade do comprador", "Livre, sem registro", "Feita apenas em mercados informais", "Apenas por correio"], 
    correta: 0
  },
  {
    pergunta: "O transporte de armas de fogo fora de residência requer:",
    opcoes: ["Autorização legal específica e acondicionamento adequado", "Livre circulação sem documentação", "Registro apenas verbal", "Declaração ao vizinho"], 
    correta: 0
  },

  // Armas e munições
  {
    pergunta: "A lei controla a comercialização de:",
    opcoes: ["Armas de fogo e munições", "Apenas explosivos", "Somente armas brancas", "Apenas produtos químicos"], 
    correta: 0
  },
  {
    pergunta: "Armas e munições adquiridas legalmente devem ser:",
    opcoes: ["Registradas e mantidas sob responsabilidade do proprietário", "Distribuídas livremente", "Transferidas sem registro", "Devolvidas à loja após uso"], 
    correta: 0
  },
  {
    pergunta: "Cidadão com antecedentes criminais graves pode:",
    opcoes: ["Ter negado registro ou porte de arma", "Adquirir livremente armas", "Obter porte apenas judicialmente sem análise", "Registrar arma sem autorização"], 
    correta: 0
  },

  // Desarmamento e segurança
  {
    pergunta: "Campanhas de desarmamento previstas na lei visam:",
    opcoes: ["Reduzir violência e estimular entrega voluntária de armas", "Incentivar comércio de armas", "Distribuir armas a civis", "Registrar armas ilegais"], 
    correta: 0
  },
  {
    pergunta: "O Estatuto estabelece que a venda de armas para estrangeiros:",
    opcoes: ["É proibida, salvo autorização especial", "É permitida livremente", "Não é regulamentada", "Depende apenas do fabricante"], 
    correta: 0
  },
  {
    pergunta: "A lei considera crime a posse ou porte de arma de fogo com objetivo de:",
    opcoes: ["Praticar crimes ou ameaçar terceiros", "Apenas treinamento esportivo", "Decoração ou coleção", "Exibição pública legal"], 
    correta: 0
  },
  {
    pergunta: "A fiscalização e controle do Estatuto são essenciais para:",
    opcoes: ["Garantir segurança pública e prevenir crimes violentos", "Reduzir impostos", "Regular comércio de armas em empresas privadas", "Promover esportes de tiro apenas"], 
    correta: 0
  },
  {
    pergunta: "A lei prevê sanções administrativas, civis e criminais para:",
    opcoes: ["Posse, porte e comércio ilegal de armas", "Exclusivamente porte de armas em concursos esportivos", "Infrações tributárias", "Uso de armas em filmes"], 
    correta: 0
  },
  {
    pergunta: "A aplicação do Estatuto busca principalmente:",
    opcoes: ["Reduzir violência e promover segurança da população", "Aumentar lucro de fabricantes de armas", "Controlar comércio internacional de armas apenas", "Executar políticas econômicas"], 
    correta: 0
  },// Conceitos gerais
  {
    pergunta: "A Lei nº 11.340/2006, conhecida como Lei Maria da Penha, tem como objetivo:",
    opcoes: ["Combater e prevenir a violência doméstica e familiar contra a mulher", "Regular crimes patrimoniais", "Tratar apenas de violência no trabalho", "Estabelecer penas para tráfico de drogas"], 
    correta: 0
  },
  {
    pergunta: "A Lei Maria da Penha é aplicada a:",
    opcoes: ["Mulheres em situação de violência doméstica ou familiar", "Qualquer pessoa sem distinção", "Homens exclusivamente", "Criminosos de rua apenas"], 
    correta: 0
  },
  {
    pergunta: "Violência doméstica, segundo a lei, inclui:",
    opcoes: ["Violência física, psicológica, sexual, patrimonial ou moral", "Apenas violência física", "Somente violência moral", "Violência entre colegas de trabalho"], 
    correta: 0
  },

  // Tipos de violência
  {
    pergunta: "Violência física é definida como:",
    opcoes: ["Qualquer ato que ofenda a integridade ou saúde corporal da mulher", "Ameaça verbal sem contato físico", "Ofensa patrimonial", "Crítica moral"], 
    correta: 0
  },
  {
    pergunta: "Violência psicológica consiste em:",
    opcoes: ["Atos que causem dano emocional ou diminuição da autoestima", "Ofensas patrimoniais", "Agressão física apenas", "Coação de empresas"], 
    correta: 0
  },
  {
    pergunta: "Violência sexual envolve:",
    opcoes: ["Qualquer ação que obrigue a mulher a prática sexual não desejada", "Somente estupro coletivo", "Apenas abuso de poder público", "Exclusivamente importunação no trabalho"], 
    correta: 0
  },
  {
    pergunta: "Violência patrimonial é:",
    opcoes: ["Dano, retenção ou destruição de bens da mulher", "Agressão física", "Ameaça moral", "Difamação online apenas"], 
    correta: 0
  },
  {
    pergunta: "Violência moral consiste em:",
    opcoes: ["Ofensas, humilhações ou constrangimentos à dignidade da mulher", "Roubo de bens", "Agressão física", "Restrição de liberdade condicional"], 
    correta: 0
  },

  // Medidas protetivas
  {
    pergunta: "A lei prevê medidas protetivas de urgência, como:",
    opcoes: ["Afastamento do agressor do lar e proibição de contato com a vítima", "Advertência verbal apenas", "Multa sem afastamento", "Encaminhamento à previdência social"], 
    correta: 0
  },
  {
    pergunta: "Medidas protetivas podem incluir:",
    opcoes: ["Proibição de frequentar determinados lugares, suspensão de porte de armas e afastamento do trabalho", "Apenas detenção imediata sem análise", "Exclusivamente multa pecuniária", "Advertência verbal informal"], 
    correta: 0
  },
  {
    pergunta: "O descumprimento de medida protetiva pode resultar em:",
    opcoes: ["Prisões preventivas e agravamento de pena", "Advertência verbal apenas", "Encaminhamento administrativo leve", "Suspensão de direitos políticos"], 
    correta: 0
  },

  // Procedimentos e justiça
  {
    pergunta: "O inquérito policial em casos da Lei Maria da Penha deve ser instaurado:",
    opcoes: ["Imediatamente após denúncia ou representação da vítima", "Após audiência pública somente", "Com autorização judicial apenas", "Somente se houver advogado presente"], 
    correta: 0
  },
  {
    pergunta: "O Ministério Público atua nos casos da Lei Maria da Penha para:",
    opcoes: ["Fiscalizar e promover ações penais públicas", "Regular comércio de armas", "Emitir multas administrativas apenas", "Controlar bens patrimoniais da vítima"], 
    correta: 0
  },
  {
    pergunta: "As audiências de conciliação podem ocorrer quando:",
    opcoes: ["Houver possibilidade de resolução do conflito sem violência", "Sempre que houver crime hediondo", "Somente para violência patrimonial", "Para tráfico de drogas apenas"], 
    correta: 0
  },
  {
    pergunta: "A vítima pode requerer medidas protetivas diretamente:",
    opcoes: ["Ao juiz competente, por pedido ou representação policial", "Ao vizinho ou liderança comunitária", "Apenas à polícia militar", "A empresas privadas"], 
    correta: 0
  },

  // Ações preventivas e educação
  {
    pergunta: "A lei prevê políticas públicas de prevenção à violência doméstica, como:",
    opcoes: ["Campanhas educativas, capacitação de profissionais e acolhimento às vítimas", "Somente punição penal", "Redução de impostos", "Controle de tráfego urbano"], 
    correta: 0
  },
  {
    pergunta: "A lei estimula a integração entre:",
    opcoes: ["Polícia, assistência social, saúde e órgãos judiciais", "Empresas privadas e escolas", "Prefeitura apenas", "Organizações internacionais"], 
    correta: 0
  },

  // Penalidades e responsabilização
  {
    pergunta: "O agressor pode ser responsabilizado civil, penal e administrativamente quando:",
    opcoes: ["Praticar violência doméstica ou familiar", "Cometer apenas infrações administrativas leves", "Danos patrimoniais isolados", "Desrespeito a normas de trânsito"], 
    correta: 0
  },
  {
    pergunta: "As penas podem incluir:",
    opcoes: ["Detenção, prestação de serviços à comunidade e medidas educativas", "Advertência verbal apenas", "Multa tributária", "Encaminhamento administrativo"], 
    correta: 0
  },
  {
    pergunta: "A lei também prevê proteção a mulheres em situação de violência:",
    opcoes: ["Independentemente da situação econômica ou social", "Somente economicamente vulneráveis", "Exclusivamente idosas", "Apenas moradoras de grandes cidades"], 
    correta: 0
  },
  {
    pergunta: "O descumprimento das medidas protetivas por parte do agressor pode acarretar:",
    opcoes: ["Prisão preventiva e agravamento de pena", "Advertência verbal informal", "Suspensão de direitos civis apenas", "Encaminhamento administrativo sem sanção"], 
    correta: 0
  },
  {
    pergunta: "A Lei Maria da Penha busca principalmente:",
    opcoes: ["Garantir proteção integral à mulher e prevenir novas agressões", "Regular comércio e trânsito de armas", "Aplicar multa a todos os cidadãos", "Reprimir crimes patrimoniais isolados"], 
    correta: 0
  },
  {
    pergunta: "A lei define violência doméstica como aquela que ocorre:",
    opcoes: ["No âmbito familiar ou em relações íntimas de afeto, independentemente de coabitação", "Apenas entre marido e mulher legalmente casados", "Exclusivamente em locais públicos", "Somente em relações de trabalho"], 
    correta: 0
  },// Conceitos gerais
  {
    pergunta: "A Lei nº 9.455/1997 tem como objetivo:",
    opcoes: ["Definir os crimes de tortura e estabelecer sanções penais", "Regular apenas contravenções penais", "Tratar exclusivamente de crimes ambientais", "Estabelecer normas de trânsito"], 
    correta: 0
  },
  {
    pergunta: "A tortura, segundo a lei, consiste em:",
    opcoes: ["Infligir dor física ou sofrimento mental para obter informação, punição ou discriminação", "Somente causar dor física", "Atos administrativos ilegais", "Exposição a perigo sem dolo"], 
    correta: 0
  },
  {
    pergunta: "A lei se aplica a:",
    opcoes: ["Qualquer agente público ou particular que pratique atos de tortura", "Exclusivamente militares", "Apenas agentes civis", "Somente servidores públicos federais"], 
    correta: 0
  },

  // Tipos e formas
  {
    pergunta: "A tortura pode ocorrer para:",
    opcoes: ["Obter confissão, informação, punição ou discriminar alguém", "Roubo de bens patrimoniais", "Infração administrativa leve", "Exclusivamente cobrança de dívidas"], 
    correta: 0
  },
  {
    pergunta: "A dor ou sofrimento causado pode ser:",
    opcoes: ["Físico ou mental", "Apenas físico", "Exclusivamente mental", "Somente moral"], 
    correta: 0
  },
  {
    pergunta: "O crime de tortura é considerado:",
    opcoes: ["Hediondo, sujeito a regime mais rigoroso de cumprimento de pena", "Contravenção penal", "Infração administrativa leve", "Crime ambiental"], 
    correta: 0
  },
  {
    pergunta: "A tortura praticada contra criança, adolescente ou idoso:",
    opcoes: ["É considerada crime hediondo com pena aumentada", "É contravenção civil", "Não é tipificada", "É apenas infração administrativa"], 
    correta: 0
  },

  // Penas e agravantes
  {
    pergunta: "As penas para crimes de tortura variam geralmente entre:",
    opcoes: ["2 a 8 anos de reclusão, podendo ser aumentadas em casos graves", "6 meses a 1 ano de detenção", "Advertência e multa", "Infrações civis"], 
    correta: 0
  },
  {
    pergunta: "Se o crime resulta em lesão corporal grave ou morte, a pena será:",
    opcoes: ["Aumentada significativamente, podendo chegar a mais de 12 anos", "Mantida sem alteração", "Reduzida automaticamente", "Substituída por multa"], 
    correta: 0
  },
  {
    pergunta: "A tortura cometida por agente público no exercício da função implica:",
    opcoes: ["Responsabilidade penal e agravantes na pena", "Isenção de pena", "Multa administrativa leve", "Advertência verbal"], 
    correta: 0
  },

  // Procedimentos
  {
    pergunta: "A vítima de tortura pode denunciar ao:",
    opcoes: ["Ministério Público, polícia ou autoridades competentes", "Vizinho ou líder comunitário", "Empresas privadas", "Prefeitura sem avaliação jurídica"], 
    correta: 0
  },
  {
    pergunta: "O processo para apuração do crime pode incluir:",
    opcoes: ["Investigação policial, processo judicial e perícias", "Advertência verbal apenas", "Encaminhamento administrativo sem sanção", "Apenas multa pecuniária"], 
    correta: 0
  },
  {
    pergunta: "A lei prevê a imprescritibilidade do crime de tortura quando:",
    opcoes: ["Praticado por agente público, dependendo da gravidade", "Sempre que houver violência física", "Exclusivamente em crimes ambientais", "Em infrações civis leves"], 
    correta: 0
  },

  // Proteção à vítima
  {
    pergunta: "A lei estabelece proteção à vítima por meio de:",
    opcoes: ["Medidas de urgência, acompanhamento psicológico e assistência jurídica", "Advertência verbal ao agressor", "Multa administrativa", "Encaminhamento para serviço social apenas"], 
    correta: 0
  },
  {
    pergunta: "O crime de tortura busca principalmente:",
    opcoes: ["Prevenir abuso de poder e proteger direitos fundamentais", "Reprimir infrações tributárias", "Aplicar multas civis", "Executar políticas econômicas"], 
    correta: 0
  },
  {
    pergunta: "A lei classifica como tortura atos cometidos para:",
    opcoes: ["Obter informação, confissão, punição ou discriminação", "Roubo ou furto simples", "Agressão ambiental", "Infrações administrativas"], 
    correta: 0
  },

  // Crimes conexos
  {
    pergunta: "A tentativa de tortura é punida:",
    opcoes: ["Com pena reduzida proporcionalmente ao resultado não alcançado", "Sem penalidade", "Como contravenção leve", "Apenas com multa"], 
    correta: 0
  },
  {
    pergunta: "A tortura praticada em grupo constitui:",
    opcoes: ["Crime mais grave, com penas cumulativas", "Infração administrativa apenas", "Crime ambiental", "Contravenção penal"], 
    correta: 0
  },
  {
    pergunta: "A lei estabelece que o crime de tortura é hediondo:",
    opcoes: ["Sim, quando praticado por agente público ou contra vulneráveis", "Não, nunca", "Apenas para crimes patrimoniais", "Somente para contravenções"], 
    correta: 0
  },

  // Aspectos legais
  {
    pergunta: "O agente que comete tortura responde:",
    opcoes: ["Civil, penal e administrativamente", "Apenas penalmente", "Apenas administrativamente", "Não responde legalmente"], 
    correta: 0
  },
  {
    pergunta: "A lei 9.455/1997 busca coibir principalmente:",
    opcoes: ["Abusos de poder e práticas que violem a dignidade humana", "Infrações tributárias", "Desacatos administrativos", "Atos civis privados"], 
    correta: 0
  },
  {
    pergunta: "A lei prevê colaboração com órgãos internacionais quando:",
    opcoes: ["Existirem violações graves de direitos humanos", "Para qualquer crime comum", "Exclusivamente para contravenções civis", "Para questões de trânsito"], 
    correta: 0
  },
  {
    pergunta: "A proteção dos direitos humanos, segundo a lei, é:",
    opcoes: ["Obrigatória e garantida a todos, especialmente vulneráveis", "Opcional para autoridades", "Exclusiva para agentes públicos", "Restrita a crimes patrimoniais"], 
    correta: 0
  },
  {
    pergunta: "A lei reforça a responsabilização de agentes públicos em:",
    opcoes: ["Atos de tortura que violem direitos fundamentais", "Somente infrações administrativas", "Exclusivamente crimes patrimoniais", "Questões tributárias"], 
    correta: 0
  }, {
    pergunta: "O Decreto nº 11.615/2023 regulamenta a Lei nº 10.826/2003, também conhecida como:",
    opcoes: ["Estatuto do Desarmamento", "Lei de Crimes Hediondos", "Lei de Tortura", "Lei de Drogas"],
    correta: 0
  },
  {
    pergunta: "O objetivo principal do Decreto nº 11.615/2023 é:",
    opcoes: ["Estabelecer regras e procedimentos relativos à aquisição, posse, porte, registro e comercialização de armas de fogo, munições e acessórios", "Criar novas infrações penais", "Estabelecer normas para a venda de armas no exterior", "Regular o uso de armas por forças armadas estrangeiras"],
    correta: 0
  },
  {
    pergunta: "O Sistema Nacional de Armas (Sinarm) é:",
    opcoes: ["O sistema informatizado que centraliza o controle de armas de fogo no Brasil", "Uma organização internacional de controle de armas", "Um órgão militar responsável pela fabricação de armamentos", "Uma empresa privada de segurança armada"],
    correta: 0
  },
  {
    pergunta: "O prazo de validade do Certificado de Registro de Arma de Fogo (CRAF) concedido a colecionador, atirador desportivo ou caçador excepcional é de:",
    opcoes: ["Três anos", "Cinco anos", "Dez anos", "Indeterminado"],
    correta: 0
  },
  {
    pergunta: "O CRAF concedido para fins de posse de arma de fogo ou de caça de subsistência tem validade de:",
    opcoes: ["Cinco anos", "Três anos", "Dez anos", "Indeterminado"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para atirador desportivo é condicionado à comprovação de:",
    opcoes: ["Atuação efetiva em entidade de tiro desportivo", "Idade superior a 30 anos", "Residência em área rural", "Participação em curso de primeiros socorros"],
    correta: 0
  },
  {
    pergunta: "A aquisição de armas de uso restrito é permitida em caráter excepcional para:",
    opcoes: ["Atiradores desportivos, caçadores e colecionadores", "Cidadãos comuns sem restrições", "Somente para forças armadas estrangeiras", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para defesa pessoal é concedido a:",
    opcoes: ["Pessoas que comprovem efetiva necessidade", "Qualquer cidadão maior de idade", "Somente a militares", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para servidores do Poder Judiciário e do Ministério Público que efetivamente estejam no exercício de funções de segurança será regulamentado por:",
    opcoes: ["O Conselho Nacional de Justiça e o Conselho Nacional do Ministério Público", "O Ministério da Defesa", "A Polícia Federal", "O Ministério da Justiça e Segurança Pública"],
    correta: 0
  },
  {
    pergunta: "A Polícia Federal é responsável por:",
    opcoes: ["Conceder porte de arma de fogo às guardas municipais", "Fabricar armas de fogo", "Regular o comércio internacional de armas", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "As entidades de tiro desportivo devem ser:",
    opcoes: ["Credenciadas pela Polícia Federal", "Autorizadas pelo Ministério da Saúde", "Registradas no Ministério da Educação", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O transporte de armas de fogo por atirador desportivo é permitido com:",
    opcoes: ["Guia de tráfego", "Licença temporária", "Autorização verbal", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "A caça de subsistência é permitida para:",
    opcoes: ["Proprietários rurais que comprovem necessidade alimentar", "Qualquer cidadão", "Somente para estrangeiros", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para defesa pessoal é vedado para:",
    opcoes: ["Integrantes de órgãos, instituições e corporações não autorizados a portar arma de fogo fora de serviço", "Atiradores desportivos", "Caçadores excepcionais", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para defesa pessoal é concedido exclusivamente para:",
    opcoes: ["Defesa pessoal", "Atividades profissionais", "Eventos esportivos", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para defesa pessoal é vedado aos titulares:",
    opcoes: ["O porte ostensivo da arma de fogo", "O uso de armas de fogo fora de serviço", "O transporte de armas de fogo", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "A Polícia Federal estabelece o currículo da disciplina de armamento e tiro dos cursos de formação das guardas municipais em convênio com:",
    opcoes: ["Os órgãos de segurança pública dos Estados, do Distrito Federal e dos Municípios", "O Ministério da Defesa", "A Polícia Militar", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "Os profissionais das guardas municipais com porte de arma de fogo devem ser submetidos a estágio de qualificação profissional de, no mínimo:",
    opcoes: ["Oitenta horas anuais", "Cem horas anuais", "Cinquenta horas anuais", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "Os órgãos, as instituições e as corporações que estabelecem normas próprias para a utilização das armas de fogo de sua propriedade devem encaminhar à Polícia Federal:",
    opcoes: ["A relação das pessoas autorizadas a portar arma de fogo", "A lista de armamentos adquiridos", "Relatórios de atividades", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para defesa pessoal é vedado aos titulares:",
    opcoes: ["O porte ostensivo da arma de fogo", "O uso de armas de fogo fora de serviço", "O transporte de armas de fogo", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "A autorização para o porte de arma de fogo previsto em legislação própria fica condicionada ao atendimento dos requisitos previstos no caput e no inciso III do art. 4º da Lei nº 10.826, de 2003, e:",
    opcoes: ["À comprovação de efetiva necessidade", "À idade mínima de 25 anos", "À residência em área rural", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "O porte de arma de fogo para defesa pessoal é vedado aos titulares:",
    opcoes: ["O porte ostensivo da arma de fogo", "O uso de armas de fogo fora de serviço", "O transporte de armas de fogo", "Nenhuma das alternativas anteriores"],
    correta: 0
  },
  {
    pergunta: "A autorização para o porte de arma de fogo previsto em legislação própria, na forma prevista no caput do art. 6º da Lei nº 10.826, de 2003, fica condicionada ao atendimento dos requisitos previstos no caput e no inciso III do art. 4º da referida Lei.",
    opcoes: ["Verdadeiro", "Falso", "Depende da situação", "Nenhuma das alternativas anteriores"],
    correta: 0
  }, // Conceitos gerais
  {
    pergunta: "A Lei nº 7.210/1984 é conhecida como:",
    opcoes: ["Lei de Execução Penal", "Código Penal", "Lei Maria da Penha", "Estatuto do Desarmamento"],
    correta: 0
  },
  {
    pergunta: "O principal objetivo da Lei de Execução Penal é:",
    opcoes: ["Garantir a execução das penas de forma humanizada, visando a ressocialização do condenado", "Definir crimes e penas", "Regular a posse de armas", "Estabelecer medidas de proteção à mulher"],
    correta: 0
  },
  {
    pergunta: "O cumprimento da pena deve observar:",
    opcoes: ["A dignidade da pessoa humana e os direitos fundamentais do preso", "A imposição de sofrimento físico", "Somente a segurança da sociedade", "Regras locais do presídio sem supervisão judicial"],
    correta: 0
  },

  // Aplicação da lei
  {
    pergunta: "A Lei de Execução Penal se aplica a:",
    opcoes: ["Pessoas condenadas à pena privativa de liberdade e medidas de segurança", "Apenas detentos provisórios", "A qualquer cidadão", "Somente a presos políticos"],
    correta: 0
  },
  {
    pergunta: "A pena de multa é executada:",
    opcoes: ["Conforme regras estabelecidas na própria Lei de Execução Penal", "Por iniciativa do Ministério Público exclusivamente", "Somente após prisão preventiva", "Não é regulamentada pela lei"],
    correta: 0
  },
  {
    pergunta: "O preso tem direito a trabalho, segundo a Lei nº 7.210/1984:",
    opcoes: ["Sim, como forma de ressocialização e reintegração social", "Não, o trabalho é facultativo", "Somente se houver autorização do diretor do presídio", "Apenas em regime aberto"],
    correta: 0
  },
  {
    pergunta: "A assistência educacional ao preso é:",
    opcoes: ["Obrigatória, conforme previsão legal", "Opcional, de acordo com a penitenciária", "Somente para menores de 21 anos", "Não prevista na lei"],
    correta: 0
  },

  // Direitos e garantias
  {
    pergunta: "O preso tem direito a assistência à saúde:",
    opcoes: ["Sim, integralmente, durante a execução da pena", "Apenas em casos graves", "Somente mediante pagamento", "Não há previsão legal"],
    correta: 0
  },
  {
    pergunta: "O preso deve ter direito a visitas e correspondência:",
    opcoes: ["Sim, respeitando normas de segurança e disciplina", "Somente familiares diretos", "Apenas por telefone", "Não há previsão legal"],
    correta: 0
  },
  {
    pergunta: "O regime de cumprimento da pena (fechado, semiaberto ou aberto) é definido:",
    opcoes: ["Pelo juiz, considerando a gravidade do crime e o perfil do condenado", "Pela direção do presídio", "Pelo Ministério Público exclusivamente", "Por sorteio judicial"],
    correta: 0
  },
  {
    pergunta: "O condenado à pena de prisão pode ter progressão de regime quando:",
    opcoes: ["Cumprir parte da pena e apresentar bom comportamento", "Solicitar arbitrariamente", "Após pagar multa", "Mediante aprovação do Ministério Público apenas"],
    correta: 0
  },

  // Assistência ao preso
  {
    pergunta: "A assistência religiosa ao preso é:",
    opcoes: ["Garantida, respeitando a liberdade de crença", "Obrigatória apenas para maiorias religiosas", "Não prevista na lei", "Restrita ao período noturno"],
    correta: 0
  },
  {
    pergunta: "A assistência social prevista na Lei de Execução Penal tem como objetivo:",
    opcoes: ["Promover a reintegração do preso à sociedade", "Punir o condenado", "Garantir apenas alimentação adequada", "Fornecer transporte ao presídio"],
    correta: 0
  },
  {
    pergunta: "A assistência jurídica ao preso é:",
    opcoes: ["Garantida para defesa de seus direitos e recursos cabíveis", "Opcional, se o preso desejar", "Fornecida apenas em casos de crimes graves", "Restrita a advogados particulares"],
    correta: 0
  },

  // Procedimentos disciplinares
  {
    pergunta: "O preso deve obedecer às normas de disciplina estabelecidas pela administração penitenciária:",
    opcoes: ["Sim, sob pena de sanções disciplinares", "Não, a disciplina é facultativa", "Somente se houver autorização judicial", "Apenas em regime fechado"],
    correta: 0
  },
  {
    pergunta: "As sanções disciplinares aplicadas ao preso devem ser:",
    opcoes: ["Razoáveis, proporcionais e legalmente previstas", "Arbitrárias, conforme necessidade da administração", "Sempre isolamento solitário", "Aplicadas sem direito a defesa"],
    correta: 0
  },

  // Benefícios
  {
    pergunta: "A remição da pena ocorre por:",
    opcoes: ["Trabalho ou estudo do preso, reduzindo o tempo a cumprir", "Pagamento de multa", "Acordo judicial com familiares", "Participação em campanhas educativas"],
    correta: 0
  },
  {
    pergunta: "A saída temporária do preso é um benefício que pode ser concedido para:",
    opcoes: ["Manter vínculos familiares, participar de estudo ou trabalho", "Visitar amigos em qualquer situação", "Realizar turismo educacional", "Apenas para presos provisórios"],
    correta: 0
  },
  {
    pergunta: "A Lei de Execução Penal estabelece que a fiscalização das condições dos estabelecimentos prisionais é responsabilidade de:",
    opcoes: ["Autoridades administrativas, Ministério Público e Conselho Penitenciário", "Apenas do juiz da execução", "Polícia Militar exclusivamente", "Ministério da Defesa"],
    correta: 0
  },
  {
    pergunta: "O Conselho Penitenciário tem como função:",
    opcoes: ["Fiscalizar, orientar e supervisionar a execução penal", "Aplicar penas alternativas", "Administrar presídios privados", "Registrar armas de fogo no sistema prisional"],
    correta: 0
  },

  // Direitos do condenado
  {
    pergunta: "O preso não perde seus direitos políticos e civis, exceto:",
    opcoes: ["Quando houver suspensão específica prevista em lei", "Nunca perde direitos", "Automaticamente enquanto preso", "Exclusivamente se condenado por crime hediondo"],
    correta: 0
  },
  {
    pergunta: "O cumprimento da pena deve ser individualizado, respeitando:",
    opcoes: ["A natureza do crime, personalidade do condenado e objetivos da pena", "Somente a natureza do crime", "Somente a idade do condenado", "Nenhuma regra específica"],
    correta: 0
  },
  {
    pergunta: "A Lei de Execução Penal busca, essencialmente:",
    opcoes: ["Ressocializar o condenado e proteger a sociedade", "Apenas punir com rigor", "Reduzir custos do sistema prisional", "Garantir indenizações a vítimas apenas"],
    correta: 0
  },
  {
    pergunta: "A execução penal deve respeitar os princípios da legalidade, humanidade, individualização da pena e:",
    opcoes: ["Ressocialização", "Severidade máxima", "Isolamento integral", "Multa proporcional"],
    correta: 0
  },{
    pergunta: "A Lei Estadual nº 11.404/1994 de Minas Gerais trata de:",
    opcoes: ["Normas de execução penal no estado", "Crimes de tráfico de drogas", "Controle de armas de fogo", "Direitos humanos internacionais"],
    correta: 0
  },
  {
    pergunta: "O principal objetivo da Lei Estadual nº 11.404/1994 é:",
    opcoes: ["Regulamentar a execução das penas de forma organizada e humanizada em Minas Gerais", "Definir crimes e penas", "Estabelecer regras de trânsito", "Regular comércio de armas"],
    correta: 0
  },
  {
    pergunta: "A lei estadual se aplica a:",
    opcoes: ["Presos condenados a penas privativas de liberdade no estado de Minas Gerais", "Todos os cidadãos do Brasil", "Exclusivamente menores de idade", "Somente detentos federais"],
    correta: 0
  },
  {
    pergunta: "O cumprimento da pena deve observar:",
    opcoes: ["A dignidade da pessoa humana e direitos fundamentais do preso", "Somente a segurança do presídio", "A disciplina militar", "Regras municipais de urbanismo"],
    correta: 0
  },
  {
    pergunta: "O regime de cumprimento da pena em Minas Gerais é definido:",
    opcoes: ["Pelo juiz da execução penal, conforme gravidade do crime e perfil do condenado", "Pela diretoria do presídio", "Pelo Ministério Público apenas", "Por sorteio"],
    correta: 0
  },
  {
    pergunta: "A lei estadual garante ao preso:",
    opcoes: ["Trabalho, educação, assistência à saúde e religiosa", "Somente trabalho", "Apenas alimentação", "Somente assistência jurídica"],
    correta: 0
  },
  {
    pergunta: "O preso tem direito a visitas e correspondência, desde que:",
    opcoes: ["Respeitadas normas de segurança e disciplina", "Somente familiares diretos", "Somente uma vez por mês", "Não há previsão legal"],
    correta: 0
  },
  {
    pergunta: "A lei prevê que o trabalho do preso deve ter caráter:",
    opcoes: ["Ressocializador, educativo e remunerado", "Punitivo apenas", "Opcional e não remunerado", "Somente interno no presídio"],
    correta: 0
  },
  {
    pergunta: "O Conselho Penitenciário em Minas Gerais tem a função de:",
    opcoes: ["Fiscalizar, orientar e supervisionar a execução penal", "Aplicar penas alternativas", "Administrar presídios privados", "Registrar armas de fogo"],
    correta: 0
  },
  {
    pergunta: "A remição da pena ocorre em Minas Gerais por:",
    opcoes: ["Trabalho ou estudo do preso", "Pagamento de multa", "Acordo judicial com familiares", "Participação em eventos culturais"],
    correta: 0
  },
  {
    pergunta: "A saída temporária do preso é concedida para:",
    opcoes: ["Manter vínculos familiares e participar de estudo ou trabalho", "Visitar amigos em qualquer situação", "Realizar turismo educacional", "Apenas presos provisórios"],
    correta: 0
  },
  {
    pergunta: "As sanções disciplinares aplicadas ao preso devem ser:",
    opcoes: ["Razoáveis, proporcionais e legalmente previstas", "Arbitrárias conforme necessidade da administração", "Sempre isolamento solitário", "Sem direito a defesa"],
    correta: 0
  },
  {
    pergunta: "O preso tem direito a assistência jurídica para:",
    opcoes: ["Defender seus direitos e recursos cabíveis", "Receber apenas informações administrativas", "Somente em crimes graves", "Exclusivamente para habeas corpus"],
    correta: 0
  },
  {
    pergunta: "A assistência religiosa ao preso em Minas Gerais é:",
    opcoes: ["Garantida, respeitando a liberdade de crença", "Obrigatória apenas para religiões majoritárias", "Não prevista", "Restrita ao período noturno"],
    correta: 0
  },
  {
    pergunta: "A assistência à saúde do preso deve ser:",
    opcoes: ["Integral, durante a execução da pena", "Apenas em emergências", "Mediante pagamento", "Não prevista pela lei"],
    correta: 0
  },
  {
    pergunta: "O preso deve obedecer às normas de disciplina estabelecidas:",
    opcoes: ["Pela administração penitenciária", "Somente pelo juiz", "Por decisão do Ministério Público", "De forma opcional"],
    correta: 0
  },
  {
    pergunta: "O cumprimento da pena deve ser individualizado, considerando:",
    opcoes: ["Natureza do crime, personalidade do condenado e objetivos da pena", "Somente idade do condenado", "Somente gravidade do crime", "Nenhuma regra específica"],
    correta: 0
  },
  {
    pergunta: "O Conselho Penitenciário em Minas Gerais também atua na:",
    opcoes: ["Fiscalização das condições dos estabelecimentos prisionais", "Aplicação de penas civis", "Gestão de recursos financeiros estaduais", "Regulação de empresas privadas"],
    correta: 0
  },
  {
    pergunta: "O preso não perde seus direitos políticos e civis, exceto:",
    opcoes: ["Quando houver suspensão legal específica", "Sempre enquanto estiver preso", "Nunca perde direitos", "Exclusivamente em crimes de grande repercussão"],
    correta: 0
  },
  {
    pergunta: "O benefício da progressão de regime pode ocorrer quando:",
    opcoes: ["O preso cumprir parte da pena e apresentar bom comportamento", "Solicitar arbitrariamente", "Apenas após pagamento de multa", "Mediante autorização do Ministério Público apenas"],
    correta: 0
  },
  {
    pergunta: "A execução penal deve respeitar os princípios de:",
    opcoes: ["Legalidade, humanidade, individualização da pena e ressocialização", "Severidade máxima e isolamento total", "Multa proporcional e punição pública", "Discriminação conforme antecedentes"],
    correta: 0
  },
  {
    pergunta: "A lei estadual busca, essencialmente:",
    opcoes: ["Ressocializar o condenado e proteger a sociedade", "Apenas punir o condenado", "Reduzir custos do sistema prisional", "Garantir indenizações às vítimas apenas"],
    correta: 0
  },
  {
    pergunta: "O trabalho realizado pelo preso deve ser remunerado conforme:",
    opcoes: ["Legislação estadual e normas de execução penal", "Decisão do diretor do presídio sem regulamentação", "Valor simbólico definido pelo Conselho Municipal", "Não há previsão de remuneração"],
    correta: 0
  },
  {
    pergunta: "O cumprimento da pena deve observar a dignidade do preso e:",
    opcoes: ["Garantir direitos fundamentais durante a execução da pena", "Priorizar apenas segurança do presídio", "Aplicar regras administrativas locais", "Punir de forma exemplar sem assistência"],
    correta: 0
  },{
    pergunta: "Qual é o objetivo principal do Regulamento e Normas de Procedimentos do Sistema Prisional de Minas Gerais (ReNP)?",
    opcoes: [
      "Padronizar as atividades de rotina das áreas de segurança e atendimento das unidades prisionais",
      "Estabelecer penas alternativas para os condenados",
      "Definir a estrutura organizacional do sistema judiciário estadual",
      "Regular o comércio de produtos dentro das unidades prisionais"
    ],
    correta: 0
  },
  {
    pergunta: "A quem compete a implementação das normas estabelecidas pelo ReNP?",
    opcoes: [
      "À Subsecretaria de Administração Prisional (SUAPI)",
      "Ao Tribunal de Justiça de Minas Gerais",
      "À Assembleia Legislativa de Minas Gerais",
      "Ao Ministério Público Estadual"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP estabelece normas para:",
    opcoes: [
      "As atividades de rotina das áreas de segurança e atendimento das unidades prisionais",
      "A criação de novas unidades prisionais",
      "A nomeação de juízes para as varas de execução penal",
      "A distribuição de recursos financeiros para o sistema prisional"
    ],
    correta: 0
  },
  {
    pergunta: "De acordo com o ReNP, a segurança nas unidades prisionais deve ser:",
    opcoes: [
      "Garantida por meio de procedimentos operacionais padronizados",
      "Responsabilidade exclusiva dos agentes penitenciários",
      "Delegada a empresas terceirizadas",
      "Gerida pelo poder judiciário estadual"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é aplicável a:",
    opcoes: [
      "Todas as unidades prisionais subordinadas à SUAPI",
      "Somente às unidades prisionais federais",
      "Apenas às unidades prisionais destinadas a mulheres",
      "Somente às unidades prisionais situadas na capital"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP busca:",
    opcoes: [
      "Padronizar procedimentos para assegurar a ordem e a disciplina nas unidades prisionais",
      "Criar novas leis estaduais sobre execução penal",
      "Estabelecer penas mais severas para os condenados",
      "Regular a atuação de advogados nas unidades prisionais"
    ],
    correta: 0
  },
  {
    pergunta: "A quem cabe a responsabilidade de revisar e atualizar o ReNP?",
    opcoes: [
      "Comissão de Revisão e Atualização dos Regulamentos e Normas do Sistema Prisional de Minas Gerais",
      "Tribunal de Justiça de Minas Gerais",
      "Secretaria de Estado de Justiça e Segurança Pública",
      "Assembleia Legislativa de Minas Gerais"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é uma ferramenta importante para:",
    opcoes: [
      "Garantir a uniformidade e a eficiência na gestão do sistema prisional",
      "Estabelecer políticas públicas de segurança pública",
      "Regular o sistema de justiça eleitoral",
      "Definir as competências dos órgãos de fiscalização ambiental"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP foi instituído por meio de qual resolução?",
    opcoes: [
      "Resolução SEAP nº 1618, de 07 de julho de 2016",
      "Resolução SEJUSP nº 490, de 08 de maio de 2023",
      "Resolução SEAP nº 127, de 13 de julho de 2018",
      "Resolução SEJUSP nº 902, de 18 de abril de 2023"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é aplicável a unidades prisionais situadas em qual estado brasileiro?",
    opcoes: [
      "Minas Gerais",
      "São Paulo",
      "Rio de Janeiro",
      "Bahia"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP estabelece procedimentos para:",
    opcoes: [
      "A rotina diária das unidades prisionais, incluindo segurança e atendimento ao preso",
      "A criação de novas unidades prisionais",
      "A nomeação de juízes para as varas de execução penal",
      "A distribuição de recursos financeiros para o sistema prisional"
    ],
    correta: 0
  },
  {
    pergunta: "A quem compete a fiscalização do cumprimento das normas estabelecidas pelo ReNP?",
    opcoes: [
      "À Subsecretaria de Administração Prisional (SUAPI)",
      "Ao Tribunal de Justiça de Minas Gerais",
      "À Assembleia Legislativa de Minas Gerais",
      "Ao Ministério Público Estadual"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é uma ferramenta importante para:",
    opcoes: [
      "Assegurar a ordem, a disciplina e a segurança nas unidades prisionais",
      "Criar novas leis estaduais sobre execução penal",
      "Estabelecer penas mais severas para os condenados",
      "Regular a atuação de advogados nas unidades prisionais"
    ],
    correta: 0
  },{
    pergunta: "A Lei Estadual nº 14.695/2003 institui em Minas Gerais:",
    opcoes: [
      "A Superintendência de Coordenação da Guarda Penitenciária e a carreira de Policial Penal",
      "A Polícia Militar e o Corpo de Bombeiros",
      "A Secretaria de Segurança Pública e a Polícia Civil",
      "A Corregedoria do Sistema Prisional"
    ],
    correta: 0
  },
  {
    pergunta: "A Superintendência de Coordenação da Guarda Penitenciária é responsável por:",
    opcoes: [
      "Planejar, coordenar e supervisionar as atividades de segurança e custódia dos presos",
      "Julgar processos criminais de execução penal",
      "Gerir o sistema de justiça criminal do estado",
      "Fiscalizar o Ministério Público"
    ],
    correta: 0
  },
  {
    pergunta: "A Diretoria de Inteligência Penitenciária tem como principal função:",
    opcoes: [
      "Coletar, analisar e difundir informações estratégicas sobre o sistema prisional",
      "Realizar o transporte de presos entre unidades",
      "Administrar o pagamento de servidores do sistema prisional",
      "Gerir contratos administrativos"
    ],
    correta: 0
  },
  {
    pergunta: "A Lei nº 14.695/2003 cria qual carreira específica dentro do sistema prisional mineiro?",
    opcoes: [
      "Policial Penal",
      "Agente Investigador",
      "Agente de Segurança Pública",
      "Fiscal Correcional"
    ],
    correta: 0
  },
  {
    pergunta: "De acordo com a Lei nº 14.695/2003, a carreira de Policial Penal é vinculada a qual órgão?",
    opcoes: [
      "Secretaria de Estado de Justiça e Segurança Pública (SEJUSP)",
      "Ministério Público de Minas Gerais",
      "Tribunal de Justiça de Minas Gerais",
      "Defensoria Pública Estadual"
    ],
    correta: 0
  },
  {
    pergunta: "Entre as atribuições do Policial Penal, está:",
    opcoes: [
      "Garantir a segurança interna e externa dos estabelecimentos prisionais",
      "Julgar os crimes cometidos pelos detentos",
      "Acompanhar audiências judiciais como representante da defesa",
      "Conceder benefícios de progressão de regime"
    ],
    correta: 0
  },
  {
    pergunta: "A criação da carreira de Policial Penal visa principalmente:",
    opcoes: [
      "Profissionalizar e fortalecer a segurança no sistema prisional",
      "Substituir as funções da Polícia Civil",
      "Transferir a custódia de presos para o Exército",
      "Desvincular o sistema prisional do Estado"
    ],
    correta: 0
  },
  {
    pergunta: "A Superintendência de Coordenação da Guarda Penitenciária é responsável por:",
    opcoes: [
      "Uniformizar e supervisionar as atividades de vigilância e escolta de presos",
      "Controlar o orçamento das unidades prisionais",
      "Aplicar penas disciplinares aos servidores",
      "Fiscalizar o trabalho do Judiciário"
    ],
    correta: 0
  },
  {
    pergunta: "A Diretoria de Inteligência Penitenciária atua de forma integrada com:",
    opcoes: [
      "Órgãos de segurança pública e de inteligência do Estado e da União",
      "Somente o Ministério Público Estadual",
      "Apenas a Polícia Militar",
      "Entidades privadas de segurança"
    ],
    correta: 0
  },
  {
    pergunta: "O ingresso na carreira de Policial Penal se dá por:",
    opcoes: [
      "Concurso público de provas ou de provas e títulos",
      "Indicação política",
      "Processo seletivo interno",
      "Nomeação direta pela SEJUSP"
    ],
    correta: 0
  },
  {
    pergunta: "O Policial Penal exerce funções de natureza:",
    opcoes: [
      "Policial, de segurança e administrativa no sistema prisional",
      "Judiciária, de investigação e advocacia",
      "Técnica, de ensino e pesquisa",
      "Ambiental e patrimonial"
    ],
    correta: 0
  },
  {
    pergunta: "A Lei nº 14.695/2003 estabelece que a Guarda Penitenciária tem por finalidade:",
    opcoes: [
      "Manter a disciplina e a segurança dos estabelecimentos prisionais",
      "Julgar e sentenciar crimes praticados por internos",
      "Gerir recursos orçamentários do sistema prisional",
      "Administrar os contratos de alimentação das unidades"
    ],
    correta: 0
  },
  {
    pergunta: "A criação da carreira de Policial Penal tem fundamento na necessidade de:",
    opcoes: [
      "Garantir a execução da pena com segurança e respeito aos direitos humanos",
      "Reduzir o número de servidores públicos",
      "Privatizar o sistema prisional",
      "Substituir o Poder Judiciário na execução penal"
    ],
    correta: 0
  },
  {
    pergunta: "De acordo com a Lei nº 14.695/2003, a Superintendência da Guarda Penitenciária é subordinada:",
    opcoes: [
      "À Secretaria de Estado de Justiça e Segurança Pública",
      "Ao Tribunal de Justiça de Minas Gerais",
      "Ao Ministério Público Estadual",
      "À Polícia Militar"
    ],
    correta: 0
  },
  {
    pergunta: "Uma das funções da Diretoria de Inteligência Penitenciária é:",
    opcoes: [
      "Detectar e prevenir ações criminosas dentro e fora das unidades prisionais",
      "Fiscalizar o orçamento do Estado",
      "Emitir pareceres jurídicos",
      "Controlar as atividades de ressocialização"
    ],
    correta: 0
  },
  {
    pergunta: "O cargo de Policial Penal é essencial para:",
    opcoes: [
      "Garantir a custódia e o transporte seguro de presos",
      "Elaborar políticas econômicas estaduais",
      "Atuar na defesa jurídica de detentos",
      "Fiscalizar atividades comerciais nas unidades"
    ],
    correta: 0
  },
  {
    pergunta: "A Lei nº 14.695/2003 também prevê a criação de:",
    opcoes: [
      "Diretoria de Inteligência Penitenciária",
      "Polícia Civil Estadual",
      "Escola de Formação da Polícia Militar",
      "Conselho Estadual de Justiça"
    ],
    correta: 0
  },
  {
    pergunta: "A estrutura da carreira de Policial Penal é composta por:",
    opcoes: [
      "Cargos efetivos organizados em classes e níveis",
      "Funções temporárias de livre nomeação",
      "Mandatos eletivos",
      "Serviços terceirizados"
    ],
    correta: 0
  },
  {
    pergunta: "Entre os deveres do Policial Penal está:",
    opcoes: [
      "Cumprir e fazer cumprir as normas disciplinares do sistema prisional",
      "Executar sentenças judiciais",
      "Fiscalizar obras públicas",
      "Acompanhar perícias judiciais"
    ],
    correta: 0
  },
  {
    pergunta: "A Lei nº 14.695/2003 busca garantir maior eficiência em:",
    opcoes: [
      "Segurança, disciplina e gestão penitenciária",
      "Controle ambiental",
      "Educação pública",
      "Saúde preventiva"
    ],
    correta: 0
  },
  {
    pergunta: "O Policial Penal tem competência para:",
    opcoes: [
      "Prevenir e reprimir distúrbios e fugas em unidades prisionais",
      "Aplicar penas judiciais",
      "Expedir mandados de prisão",
      "Defender réus em processo penal"
    ],
    correta: 0
  },
  {
    pergunta: "A Diretoria de Inteligência Penitenciária contribui para:",
    opcoes: [
      "A prevenção de organizações criminosas no sistema prisional",
      "A formação de magistrados",
      "A execução orçamentária estadual",
      "A regulação de contratos públicos"
    ],
    correta: 0
  },
  {
    pergunta: "A Lei nº 14.695/2003 foi criada com o objetivo de:",
    opcoes: [
      "Fortalecer a estrutura de segurança e inteligência no sistema prisional mineiro",
      "Extinguir o cargo de agente penitenciário",
      "Criar novas unidades prisionais privadas",
      "Instituir o serviço militar obrigatório"
    ],
    correta: 0
  },
  {
    pergunta: "O Policial Penal atua sob a direção de:",
    opcoes: [
      "Autoridade administrativa da unidade prisional e da SEJUSP",
      "Poder Judiciário",
      "Polícia Federal",
      "Ministério Público"
    ],
    correta: 0
  },
  {
    pergunta: "As atribuições do Policial Penal incluem:",
    opcoes: [
      "Custódia, escolta e vigilância de presos em regime fechado ou provisório",
      "Fiscalização tributária",
      "Investigação de crimes eleitorais",
      "Execução de sentenças cíveis"
    ],
    correta: 0
  },
  {
    pergunta: "A Diretoria de Inteligência Penitenciária deve atuar de forma:",
    opcoes: [
      "Integrada com outros órgãos de segurança pública e inteligência",
      "Isolada das demais instituições estatais",
      "Subordinada ao Ministério Público",
      "Independente de controle administrativo"
    ],
    correta: 0
  },
  {
    pergunta: "A carreira de Policial Penal é considerada:",
    opcoes: [
      "De natureza policial e essencial à segurança pública",
      "Temporária e de livre nomeação",
      "Exclusiva da Polícia Militar",
      "Vinculada ao Poder Judiciário"
    ],
    correta: 0
  },
  {
    pergunta: "A Superintendência de Coordenação da Guarda Penitenciária deve:",
    opcoes: [
      "Padronizar e coordenar as ações de segurança nas unidades prisionais",
      "Emitir sentenças judiciais",
      "Fiscalizar o orçamento estadual",
      "Controlar licitações públicas"
    ],
    correta: 0
  },
  {
    pergunta: "A criação da Diretoria de Inteligência Penitenciária busca:",
    opcoes: [
      "Aperfeiçoar o controle e a prevenção de incidentes no sistema prisional",
      "Gerar relatórios financeiros sobre o sistema prisional",
      "Atuar no processo legislativo estadual",
      "Substituir o Ministério Público em investigações"
    ],
    correta: 0
  },
  {
    pergunta: "De acordo com a Lei nº 14.695/2003, os cargos criados têm por finalidade:",
    opcoes: [
      "Aumentar a segurança e eficiência administrativa do sistema prisional mineiro",
      "Reduzir os gastos com pessoal",
      "Privatizar as unidades prisionais",
      "Eliminar carreiras já existentes"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP estabelece normas para:",
    opcoes: [
      "As atividades de rotina das áreas de segurança e atendimento das unidades prisionais",
      "A criação de novas unidades prisionais",
      "A nomeação de juízes para as varas de execução penal",
      "A distribuição de recursos financeiros para o sistema prisional"
    ],
    correta: 0
  },
  {
    pergunta: "De acordo com o ReNP, a segurança nas unidades prisionais deve ser:",
    opcoes: [
      "Garantida por meio de procedimentos operacionais padronizados",
      "Responsabilidade exclusiva dos agentes penitenciários",
      "Delegada a empresas terceirizadas",
      "Gerida pelo poder judiciário estadual"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é aplicável a:",
    opcoes: [
      "Todas as unidades prisionais subordinadas à SUAPI",
      "Somente às unidades prisionais federais",
      "Apenas às unidades prisionais destinadas a mulheres",
      "Somente às unidades prisionais situadas na capital"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP busca:",
    opcoes: [
      "Padronizar procedimentos para assegurar a ordem e a disciplina nas unidades prisionais",
      "Criar novas leis estaduais sobre execução penal",
      "Estabelecer penas mais severas para os condenados",
      "Regular a atuação de advogados nas unidades prisionais"
    ],
    correta: 0
  },
  {
    pergunta: "A quem cabe a responsabilidade de revisar e atualizar o ReNP?",
    opcoes: [
      "Comissão de Revisão e Atualização dos Regulamentos e Normas do Sistema Prisional de Minas Gerais",
      "Tribunal de Justiça de Minas Gerais",
      "Secretaria de Estado de Justiça e Segurança Pública",
      "Assembleia Legislativa de Minas Gerais"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é uma ferramenta importante para:",
    opcoes: [
      "Garantir a uniformidade e a eficiência na gestão do sistema prisional",
      "Estabelecer políticas públicas de segurança pública",
      "Regular o sistema de justiça eleitoral",
      "Definir as competências dos órgãos de fiscalização ambiental"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP foi instituído por meio de qual resolução?",
    opcoes: [
      "Resolução SEAP nº 1618, de 07 de julho de 2016",
      "Resolução SEJUSP nº 490, de 08 de maio de 2023",
      "Resolução SEAP nº 127, de 13 de julho de 2018",
      "Resolução SEJUSP nº 902, de 18 de abril de 2023"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é aplicável a unidades prisionais situadas em qual estado brasileiro?",
    opcoes: [
      "Minas Gerais",
      "São Paulo",
      "Rio de Janeiro",
      "Bahia"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP estabelece procedimentos para:",
    opcoes: [
      "A rotina diária das unidades prisionais, incluindo segurança e atendimento ao preso",
      "A criação de novas unidades prisionais",
      "A nomeação de juízes para as varas de execução penal",
      "A distribuição de recursos financeiros para o sistema prisional"
    ],
    correta: 0
  },
  {
    pergunta: "A quem compete a fiscalização do cumprimento das normas estabelecidas pelo ReNP?",
    opcoes: [
      "À Subsecretaria de Administração Prisional (SUAPI)",
      "Ao Tribunal de Justiça de Minas Gerais",
      "À Assembleia Legislativa de Minas Gerais",
      "Ao Ministério Público Estadual"
    ],
    correta: 0
  },
  {
    pergunta: "O ReNP é uma ferramenta importante para:",
    opcoes: [
      "Assegurar a ordem, a disciplina e a segurança nas unidades prisionais",
      "Criar novas leis estaduais sobre execução penal",
      "Estabelecer penas mais severas para os condenados",
      "Regular a atuação de advogados nas unidades prisionais"
    ],
    correta: 0
  }
]);
