import React from "react";
import Quiz from "../quiz";
import { ImageBackground } from "react-native";
import { perguntasInformatica } from "../informatica";
import Brasao from "@/assets/images/Brasao-PPMG.png";

export default function InformaticaPage() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasInformatica} />
    </ImageBackground>
  );
}