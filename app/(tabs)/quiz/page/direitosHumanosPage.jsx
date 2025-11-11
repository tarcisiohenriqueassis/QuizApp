import Quiz from "../quiz";
import { perguntasDireitosHumanos } from "../../../../data/direitosHumanos";

export default function DireitosHumanosPage() {
  return (
      <Quiz perguntas={perguntasDireitosHumanos } />
  );
}