import Quiz from "../quiz";
import { perguntasRaciocinioLogico } from "../../../../data/raciocinioLogico";

export default function RaciocinioLogicoPage() {
  return (
      <Quiz perguntas={perguntasRaciocinioLogico} />
  );
}