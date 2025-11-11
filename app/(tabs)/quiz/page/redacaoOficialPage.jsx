import Quiz from "../quiz";
import { perguntasRedacaoOficial } from "../../../../data/redacaoOficial";

export default function RedacaoOficial() {
  return (
      <Quiz perguntas={perguntasRedacaoOficial} />
  );
}