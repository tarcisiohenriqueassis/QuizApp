import Quiz from "../quiz";
import { perguntasInformatica } from "../../../../data/informatica";

export default function InformaticaPage() {
  return (
      <Quiz perguntas={perguntasInformatica} />
  );
}