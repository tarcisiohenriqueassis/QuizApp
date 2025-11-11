import Quiz from "../quiz";
import { perguntasPortugues } from "../../../../data/portugues";


export default function PortuguesPage() {

  return (
      <Quiz perguntas={perguntasPortugues} />
  );
}
