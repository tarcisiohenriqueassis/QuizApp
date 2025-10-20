import React from "react";
import Quiz from "../quiz";
import { ImageBackground } from "react-native";
import { perguntasLegislacaoEspecial } from "../legislacaoEspecial";
import Brasao from "@/assets/images/Brasao-PPMG.png";

export default function LegislacaoEspecialPage() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasLegislacaoEspecial} />
    </ImageBackground>
  );
}