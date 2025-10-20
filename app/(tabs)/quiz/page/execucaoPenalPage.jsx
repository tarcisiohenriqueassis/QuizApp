import React from "react";
import Quiz from "../quiz";
import { ImageBackground } from "react-native";
import  {perguntasLeiExecucaoPenal} from "../execucaoPenal";
import Brasao from "@/assets/images/Brasao-PPMG.png";

export default function execucaoPenalPage() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasLeiExecucaoPenal} />
    </ImageBackground>
  );
}