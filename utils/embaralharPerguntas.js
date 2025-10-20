/**
 * Embaralha tanto as perguntas quanto as alternativas de cada pergunta.
 * Retorna um novo array sem alterar o original.
 *
 * Exemplo de uso:
 * const perguntasEmbaralhadas = embaralharPerguntasEAlternativas(perguntas);
 */
export default function embaralharPerguntasEAlternativas(perguntas = []) {
  // Copia e embaralha o array de perguntas
  const perguntasEmbaralhadas = [...perguntas].sort(() => Math.random() - 0.5);

  return perguntasEmbaralhadas.map(pergunta => {
    // Se o item estiver inválido, retorna como está
    if (!pergunta || !Array.isArray(pergunta.opcoes)) return pergunta;

    // Copia e embaralha as alternativas
    const opcoes = [...pergunta.opcoes];
    for (let i = opcoes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opcoes[i], opcoes[j]] = [opcoes[j], opcoes[i]];
    }

    // Atualiza o índice da resposta correta
    const corretaTexto = pergunta.opcoes[pergunta.correta];
    const novaCorreta = opcoes.indexOf(corretaTexto);

    return {
      ...pergunta,
      opcoes,
      correta: novaCorreta
    };
  });
}
