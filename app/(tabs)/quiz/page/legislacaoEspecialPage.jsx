import Quiz from "../quiz";
import { perguntasLegislacaoEspecial } from "../../../../data/legislacaoEspecial";

export default function LegislacaoEspecialPage() {
  return (
      <Quiz perguntas={perguntasLegislacaoEspecial} />
  );
}