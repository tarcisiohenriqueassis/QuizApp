import React from "react";
import Quiz from "../quiz";
import { ImageBackground } from "react-native";
import { perguntasDireitosHumanos } from "../direitosHumanos";
import Brasao from "@/assets/images/Brasao-PPMG.png";

export default function DireitosHumanosPage() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasDireitosHumanos} />
    </ImageBackground>
  );
}