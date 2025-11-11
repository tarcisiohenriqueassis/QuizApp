import embaralharAlternativas from "../utils/embaralharPerguntas";


export const perguntasDireitoConstitucional = embaralharAlternativas([
  // Direitos e Garantias Fundamentais
  {
    pergunta: "O direito à vida e à liberdade, bem como a igualdade, estão previstos em qual artigo da CF?",
    opcoes: ["Art. 1º", "Art. 5º", "Art. 7º", "Art. 37"],
    correta: 1
  },
  {
    pergunta: "O princípio da dignidade da pessoa humana é considerado um:",
    opcoes: ["Direito social", "Princípio fundamental", "Garantia individual", "Norma infraconstitucional"],
    correta: 1
  },
  {
    pergunta: "O habeas corpus destina-se a proteger qual direito fundamental?",
    opcoes: ["Vida", "Liberdade de locomoção", "Propriedade", "Igualdade"],
    correta: 1
  },
  {
    pergunta: "A liberdade de expressão e de manifestação do pensamento é garantida pela CF, exceto quando:",
    opcoes: [
      "Ofende a honra de terceiros", 
      "Cria opinião crítica", 
      "Divulga ciência", 
      "Permite debate político"
    ],
    correta: 0
  },
  {
    pergunta: "O mandado de segurança é cabível quando:",
    opcoes: [
      "Houver violação de direito líquido e certo", 
      "Ocorre greve de servidores", 
      "Um projeto de lei é vetado", 
      "Houver prisão preventiva"
    ],
    correta: 0
  },
  {
    pergunta: "O direito de reunião pacífica sem armas está garantido pela CF, exceto quando:",
    opcoes: [
      "Ofende a segurança pública", 
      "Cria associação cultural", 
      "Divulga ciência", 
      "Permite debate político"
    ],
    correta: 0
  },
  {
    pergunta: "O direito de greve é garantido a:",
    opcoes: ["Servidores públicos apenas", "Trabalhadores em geral", "Empregadores", "Políticos"],
    correta: 1
  },
  {
    pergunta: "O direito de propriedade pode ser limitado para atender:",
    opcoes: ["Função social", "Desejo do gestor", "Decisão administrativa isolada", "Greve de servidores"],
    correta: 0
  },
  {
    pergunta: "O sigilo de correspondência só pode ser violado mediante:",
    opcoes: ["Ordem judicial", "Decreto presidencial", "Votação no Congresso", "Lei municipal"],
    correta: 0
  },
  {
    pergunta: "O princípio da igualdade está previsto em qual artigo?",
    opcoes: ["Art. 1º", "Art. 5º", "Art. 37", "Art. 144"],
    correta: 1
  },

  // Administração Pública
  {
    pergunta: "O princípio da legalidade administrativa determina que:",
    opcoes: [
      "O administrador só pode fazer o que a lei permite", 
      "O administrador pode agir livremente", 
      "O cidadão deve seguir regras apenas quando conveniente", 
      "Somente atos do Legislativo precisam obedecer à lei"
    ],
    correta: 0
  },
  {
    pergunta: "A moralidade administrativa exige que os atos da administração sejam:",
    opcoes: [
      "Compatíveis com a lei e com padrões éticos", 
      "Efetivos mesmo que ilegais", 
      "Sigilosos e restritos", 
      "Exclusivamente financeiros"
    ],
    correta: 0
  },
  {
    pergunta: "O concurso público é exigido para:",
    opcoes: [
      "Servidores efetivos", 
      "Todos os contratos administrativos", 
      "Funções comissionadas", 
      "Terceirizados"
    ],
    correta: 0
  },
  {
    pergunta: "O princípio da impessoalidade busca:",
    opcoes: [
      "Evitar favorecimentos pessoais", 
      "Garantir autonomia do gestor", 
      "Limitar a publicidade", 
      "Priorizar contratos privados"
    ],
    correta: 0
  },
  {
    pergunta: "O princípio da eficiência implica que a administração deve:",
    opcoes: [
      "Alcançar resultados com boa gestão de recursos", 
      "Priorizar cargos comissionados", 
      "Evitar fiscalização judicial", 
      "Agir somente em caso de emergência"
    ],
    correta: 0
  },
  {
    pergunta: "O princípio da publicidade garante:",
    opcoes: [
      "Transparência dos atos administrativos", 
      "Sigilo absoluto", 
      "Controle judicial exclusivo", 
      "Segredo de Estado"
    ],
    correta: 0
  },
  {
    pergunta: "O controle externo da Administração Pública é exercido por:",
    opcoes: [
      "Tribunal de Contas e Congresso Nacional", 
      "STF exclusivamente", 
      "Prefeito municipal", 
      "Ministério da Justiça"
    ],
    correta: 0
  },
  {
    pergunta: "O princípio da supremacia do interesse público sobre o privado é conhecido como:",
    opcoes: ["Legalidade", "Supremacia do interesse público", "Impessoalidade", "Eficiência"],
    correta: 1
  },
  {
    pergunta: "Um ato administrativo ilegal, mas praticado com boa-fé, ainda viola qual princípio?",
    opcoes: ["Legalidade", "Eficiência", "Publicidade", "Moralidade"],
    correta: 0
  },
  {
    pergunta: "O acesso à informação pública é uma consequência do princípio de:",
    opcoes: ["Publicidade", "Impessoalidade", "Eficiência", "Legalidade"],
    correta: 0
  },

  // Defesa do Estado e Instituições Democráticas
  {
    pergunta: "O estado de defesa e de sítio são previstos em quais artigos da CF?",
    opcoes: ["Art. 37 a 44", "Art. 136 a 141", "Art. 5º a 10", "Art. 144 a 150"],
    correta: 1
  },
  {
    pergunta: "O estado de defesa pode restringir direitos fundamentais, desde que:",
    opcoes: ["Respeitados os limites constitucionais", "Haja decreto presidencial simples", "O Congresso autorize em votação secreta", "Exclua o controle judicial"],
    correta: 0
  },
  {
    pergunta: "O estado de sítio pode ser decretado pelo Presidente da República com autorização do:",
    opcoes: ["Congresso Nacional", "STF", "Senado Federal", "STJ"],
    correta: 0
  },
  {
    pergunta: "Durante o estado de defesa, o presidente pode:",
    opcoes: ["Restringir temporariamente certos direitos", "Suspender todos os direitos fundamentais", "Governar estados estrangeiros", "Exonerar ministros do STF"],
    correta: 0
  },
  {
    pergunta: "O controle judicial do estado de defesa e de sítio compete ao:",
    opcoes: ["STF", "STJ", "Ministério Público", "Congresso Nacional"],
    correta: 0
  },
  {
    pergunta: "O estado de defesa é aplicado em situações de:",
    opcoes: ["Comoção grave de repercussão local ou regional", "Conflitos trabalhistas", "Greve de servidores", "Férias do presidente"],
    correta: 0
  },
  {
    pergunta: "O estado de sítio é aplicável em casos de:",
    opcoes: ["Guerra ou grave perturbação da ordem", "Mudança na Constituição", "Greve de transporte público", "Feriados nacionais prolongados"],
    correta: 0
  },
  {
    pergunta: "O estado de defesa não pode:",
    opcoes: ["Suspender direitos fundamentais indiscriminadamente", "Restaurar a ordem", "Restringir atividades temporariamente", "Ser fiscalizado pelo STF"],
    correta: 0
  },
  {
    pergunta: "O estado de sítio suspende alguns direitos, respeitando:",
    opcoes: ["Limites constitucionais", "Vontade do presidente", "Lei ordinária", "Decreto municipal"],
    correta: 0
  },
  {
    pergunta: "O controle do estado de defesa inclui fiscalização por:",
    opcoes: ["STF e Congresso Nacional", "Somente presidente", "Prefeitos municipais", "STJ"],
    correta: 0
  },

  // Segurança Pública
  {
    pergunta: "A segurança pública é dever do:",
    opcoes: ["Estado e sociedade", "Somente Polícia Federal", "Somente Legislativo", "Poder Judiciário"],
    correta: 0
  },
  {
    pergunta: "A Polícia Federal tem competência para atuar em:",
    opcoes: ["Crimes interestaduais e internacionais", "Crimes municipais", "Somente fiscalização administrativa", "Controle de trânsito urbano"],
    correta: 0
  },
  {
    pergunta: "A Polícia Civil é responsável por:",
    opcoes: ["Investigação criminal e polícia judiciária", "Polícia ostensiva", "Defesa de fronteiras", "Controle de presídios federais"],
    correta: 0
  },
  {
    pergunta: "A Polícia Militar atua como:",
    opcoes: ["Polícia ostensiva e preservação da ordem pública", "Investigação criminal", "Julgamento de crimes", "Controle administrativo"],
    correta: 0
  },
  {
    pergunta: "As guardas municipais têm função de:",
    opcoes: ["Proteção de bens públicos e segurança local", "Substituir Polícia Federal", "Polícia militar estadual", "Investigar crimes federais"],
    correta: 0
  },
  {
    pergunta: "A Polícia Militar e Polícia Civil são órgãos de segurança pública vinculados:",
    opcoes: ["Estados e DF", "União exclusivamente", "Municípios exclusivamente", "Legislativo federal"],
    correta: 0
  },
  {
    pergunta: "A segurança pública deve respeitar:",
    opcoes: ["Direitos e garantias fundamentais", "Somente legislação infraconstitucional", "Decisões municipais isoladas", "A vontade do Executivo"],
    correta: 0
  },
  {
    pergunta: "A Polícia Federal atua sob o controle de:",
    opcoes: ["Ministério da Justiça", "Ministério da Defesa", "STF", "Prefeitura municipal"],
    correta: 0
  },
  {
    pergunta: "As guardas municipais podem colaborar com a segurança pública, mas não podem:",
    opcoes: ["Substituir Polícia Militar ou Civil", "Proteger bens públicos", "Atuar em escolas municipais", "Monitorar trânsito local"],
    correta: 0
  },
  {
    pergunta: "O controle e coordenação da segurança pública é feito pelo:",
    opcoes: ["Poder Executivo", "STF", "STJ", "Congresso Nacional"],
    correta: 0
  },

  // Perguntas situacionais e de interpretação
  {
    pergunta: "Se um servidor age em benefício próprio contrariando a lei, qual princípio está violando?",
    opcoes: ["Legalidade", "Moralidade", "Publicidade", "Eficiência"],
    correta: 1
  },
  {
    pergunta: "A divulgação de atos administrativos busca atender ao princípio da:",
    opcoes: ["Impessoalidade", "Publicidade", "Eficiência", "Moralidade"],
    correta: 1
  },
  {
    pergunta: "Durante greve de servidores públicos, a CF garante:",
    opcoes: ["Direito de greve com manutenção de serviços essenciais", "Greve irrestrita", "Suspensão de direitos fundamentais", "Nenhum direito"],
    correta: 0
  },
  {
    pergunta: "Um ato administrativo sem publicidade viola qual princípio?",
    opcoes: ["Publicidade", "Impessoalidade", "Eficiência", "Legalidade"],
    correta: 0
  },
  {
    pergunta: "Se a polícia militar age fora de sua competência, qual princípio da segurança pública é violado?",
    opcoes: ["Legalidade", "Eficiência", "Impessoalidade", "Publicidade"],
    correta: 0
  },
  {
    pergunta: "Um decreto que restrinja direitos fundamentais sem base constitucional é:",
    opcoes: ["Ilegal", "Legítimo", "Constitucional", "Otimizado"],
    correta: 0
  },
  {
    pergunta: "O princípio da impessoalidade impede que:",
    opcoes: ["A administração favoreça interesses pessoais", "Seja eficiente", "Seja transparente", "Haja concurso público"],
    correta: 0
  },
  {
    pergunta: "A restrição de direitos fundamentais durante o estado de sítio deve ser:",
    opcoes: ["Proporcional e temporária", "Indefinida", "Total", "Decidida pelo gestor isoladamente"],
    correta: 0
  },
  {
    pergunta: "O direito de reunião pode ser restringido apenas em razão de:",
    opcoes: ["Segurança pública", "Desejo do gestor", "Feriados municipais", "Greve de trabalhadores"],
    correta: 0
  },
  {
    pergunta: "A polícia federal pode atuar em crimes cometidos em:",
    opcoes: ["Mais de um estado ou internacionalmente", "Somente municípios", "Somente no DF", "Exclusivamente em rodovias"],
    correta: 0
  },
  // 2.1 Do crime (arts. 13 a 25)
  {
    pergunta: "O que caracteriza um crime doloso?",
    opcoes: [
      "Quando o agente assume o risco de produzir o resultado",
      "Quando o resultado ocorre sem intenção",
      "Quando o crime é culposo",
      "Quando não há resultado"
    ],
    correta: 0
  },
  {
    pergunta: "Crime culposo é aquele em que:",
    opcoes: [
      "O agente não quis o resultado, mas agiu com imprudência, negligência ou imperícia",
      "Houve intenção de cometer o resultado",
      "O crime foi praticado contra funcionário público",
      "Houve concurso de pessoas"
    ],
    correta: 0
  },
  {
    pergunta: "Segundo o Código Penal, a tentativa ocorre quando:",
    opcoes: [
      "O agente inicia a execução do crime, mas não consuma por circunstâncias alheias à vontade",
      "O agente apenas pensa em cometer o crime",
      "O crime é consumado",
      "O crime é culposo"
    ],
    correta: 0
  },
  {
    pergunta: "O concurso de pessoas ocorre quando:",
    opcoes: [
      "Duas ou mais pessoas concorrem para a prática do crime",
      "Uma pessoa comete crime sozinho",
      "O crime é culposo",
      "Há dolo eventual"
    ],
    correta: 0
  },
  {
    pergunta: "O erro de tipo exclui o dolo quando:",
    opcoes: [
      "É inevitável e recai sobre elemento essencial do tipo",
      "É consciente e intencional",
      "O crime é culposo",
      "O crime é contra a Administração"
    ],
    correta: 0
  },

  // 2.2 Da imputabilidade penal (arts. 26 a 28)
  {
    pergunta: "A inimputabilidade penal ocorre quando:",
    opcoes: [
      "O agente não possui capacidade de entender o caráter ilícito do fato ou de determinar-se de acordo com esse entendimento",
      "O agente comete crime doloso",
      "O crime é culposo",
      "O agente é maior de 18 anos e tem plena consciência"
    ],
    correta: 0
  },
  {
    pergunta: "O menor de 18 anos é responsabilizado penalmente pelo:",
    opcoes: [
      "ECA (medidas socioeducativas), e não pelo Código Penal",
      "Código Penal",
      "Constituição Federal",
      "Lei de Execução Penal"
    ],
    correta: 0
  },
  {
    pergunta: "O alcoolismo patológico pode ser causa de:",
    opcoes: [
      "Redução ou exclusão da imputabilidade",
      "Dolo direto",
      "Culpa consciente",
      "Erro de tipo"
    ],
    correta: 0
  },
  {
    pergunta: "A coação moral irresistível exclui:",
    opcoes: [
      "A culpabilidade",
      "O crime consumado",
      "O concurso de pessoas",
      "A tentativa"
    ],
    correta: 0
  },
  {
    pergunta: "O estado de embriaguez voluntária, se completo, resulta em:",
    opcoes: [
      "Imputabilidade mantida, salvo se anormalidade mental",
      "Inimputabilidade absoluta",
      "Erro de tipo",
      "Culpa consciente"
    ],
    correta: 0
  },

  // 2.3 Das Penas (arts. 32 a 52)
  {
    pergunta: "A pena privativa de liberdade consiste em:",
    opcoes: [
      "Reclusão ou detenção", 
      "Multa exclusivamente", 
      "Prestação de serviços à comunidade", 
      "Advertência verbal"
    ],
    correta: 0
  },
  {
    pergunta: "A pena de multa é aplicada:",
    opcoes: [
      "Sozinha ou cumulativamente com outras penas privativas de liberdade", 
      "Somente para menores de idade", 
      "Para crimes culposos apenas", 
      "Exclusivamente em crimes contra a Administração"
    ],
    correta: 0
  },
  {
    pergunta: "O regime inicial da pena é determinado pelo juiz considerando:",
    opcoes: [
      "Natureza do crime, antecedentes e comportamento do réu", 
      "Preferência do réu", 
      "Tipo de defesa utilizada", 
      "Local do crime"
    ],
    correta: 0
  },
  {
    pergunta: "A substituição da pena privativa de liberdade por restritiva de direitos é possível:",
    opcoes: [
      "Para penas não superiores a 4 anos, se cabível", 
      "Para qualquer pena", 
      "Somente em crimes dolosos", 
      "Em crimes contra a Administração"
    ],
    correta: 0
  },
  {
    pergunta: "A reincidência penal influencia:",
    opcoes: [
      "Aumentando a pena", 
      "Diminuindo a pena", 
      "Não interfere na pena", 
      "Somente multa"
    ],
    correta: 0
  },

  // 2.4 Crimes contra a pessoa (arts. 121 a 150)
  {
    pergunta: "O crime de homicídio simples está previsto em qual artigo?",
    opcoes: ["Art. 121", "Art. 122", "Art. 129", "Art. 147"],
    correta: 0
  },
  {
    pergunta: "Homicídio qualificado ocorre quando:",
    opcoes: [
      "Há motivo torpe, fútil ou recurso que dificulte defesa da vítima", 
      "O crime é culposo", 
      "O réu é menor de idade", 
      "Não há dolo"
    ],
    correta: 0
  },
  {
    pergunta: "O crime de lesão corporal grave prevê pena maior que:",
    opcoes: [
      "1 ano", 
      "6 meses", 
      "3 anos", 
      "2 meses"
    ],
    correta: 0
  },
  {
    pergunta: "O crime de ameaça está previsto no artigo:",
    opcoes: ["147", "121", "129", "155"],
    correta: 0
  },
  {
    pergunta: "O infanticídio é punido diferentemente do homicídio comum porque:",
    opcoes: [
      "É cometido pela mãe sob influência do parto", 
      "É doloso simples", 
      "É culposo", 
      "Não é crime"
    ],
    correta: 0
  },

  // 2.5 Crimes contra o patrimônio (arts. 155 a 180)
  {
    pergunta: "O crime de furto está previsto no artigo:",
    opcoes: ["155", "157", "171", "180"],
    correta: 0
  },
  {
    pergunta: "O roubo difere do furto porque:",
    opcoes: [
      "Há violência ou grave ameaça à vítima", 
      "Não há subtração", 
      "O crime é culposo", 
      "Não há intenção"
    ],
    correta: 0
  },
  {
    pergunta: "O estelionato consiste em:",
    opcoes: [
      "Obter vantagem ilícita mediante fraude", 
      "Roubar à mão armada", 
      "Subtração de coisa móvel", 
      "Apropriação de bem público"
    ],
    correta: 0
  },
  {
    pergunta: "O crime de dano ocorre quando:",
    opcoes: [
      "Há destruição ou deterioração de coisa alheia", 
      "O patrimônio é próprio", 
      "Não há dolo", 
      "A vítima consente"
    ],
    correta: 0
  },
  {
    pergunta: "A receptação é crime quando:",
    opcoes: [
      "Alguém adquire, recebe ou oculta coisa proveniente de crime", 
      "O crime é culposo", 
      "Não há conhecimento da origem ilícita", 
      "O bem é público"
    ],
    correta: 0
  },

  // 2.6 Crimes contra os costumes (arts. 213 a 218-C)
  {
    pergunta: "O crime de estupro está previsto no artigo:",
    opcoes: ["213", "214", "217-A", "218"],
    correta: 0
  },
  {
    pergunta: "O assédio sexual é tipificado como crime em:",
    opcoes: ["Art. 216-A", "Art. 213", "Art. 155", "Art. 312"],
    correta: 0
  },
  {
    pergunta: "O crime de corrupção de menores está previsto em qual artigo?",
    opcoes: ["218-B", "218-C", "217-A", "214"],
    correta: 0
  },
  {
    pergunta: "O estupro de vulnerável é um crime que:",
    opcoes: [
      "Não exige violência, apenas vulnerabilidade da vítima", 
      "Exige violência física", 
      "É crime culposo", 
      "Não é previsto no CP"
    ],
    correta: 0
  },
  {
    pergunta: "O crime de atentado ao pudor é punido quando:",
    opcoes: [
      "Há ato libidinoso sem consentimento da vítima", 
      "A vítima consente", 
      "É entre maiores de idade com consentimento", 
      "Não há intenção"
    ],
    correta: 0
  },

  // 2.7 Crimes praticados por funcionário público contra a Administração (arts. 312 a 327)
  {
    pergunta: "O peculato ocorre quando:",
    opcoes: [
      "O funcionário público se apropria de dinheiro ou bens públicos", 
      "Houve furto comum", 
      "É crime culposo", 
      "Não há crime"
    ],
    correta: 0
  },
  {
    pergunta: "O crime de concussão ocorre quando:",
    opcoes: [
      "O funcionário exige vantagem indevida", 
      "Desvia bem público", 
      "Comete crime culposo", 
      "Há erro de tipo"
    ],
    correta: 0
  },
  {
    pergunta: "O crime de prevaricação consiste em:",
    opcoes: [
      "Retardar ou deixar de praticar ato de ofício por interesse pessoal", 
      "Desvio de dinheiro", 
      "Crime culposo", 
      "Corrupção ativa"
    ],
    correta: 0
  },
  {
    pergunta: "O funcionário público que recebe propina comete:",
    opcoes: [
      "Corrupção passiva", 
      "Concorrência desleal", 
      "Peculato culposo", 
      "Prevaricação"
    ],
    correta: 0
  },
  {
    pergunta: "A corrupção ativa ocorre quando:",
    opcoes: [
      "Alguém oferece vantagem indevida a funcionário público", 
      "Há desvio de recursos públicos", 
      "O funcionário se omite", 
      "Há crime culposo"
    ],
    correta: 0
  }
]);
 