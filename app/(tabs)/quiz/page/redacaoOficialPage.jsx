import React from "react";
import Quiz from "../quiz";
import Brasao from "@/assets/images/Brasao-PPMG.png";
import { ImageBackground } from "react-native";
import { perguntasRedacaoOficial } from "../redacaoOficial";

export default function RedacaoOficial() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasRedacaoOficial} />
    </ImageBackground>
  );
}