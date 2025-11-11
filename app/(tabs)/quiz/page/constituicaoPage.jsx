import Quiz from "../quiz";
import  {perguntasDireitoConstitucional}  from "../../../../data/constituicao";

export default function ConstituicaoPage() {
  return (
      <Quiz perguntas={perguntasDireitoConstitucional} />
  );
}
