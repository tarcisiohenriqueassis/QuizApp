import Quiz from "../quiz";
import { perguntasDireitoConstitucional } from "../../../../data/nocoesDeDireito";

export default function NocoesDeDireitoPage() {
  return (
      <Quiz perguntas={perguntasDireitoConstitucional} />
    
  );
}
   