import React from "react";
import Quiz from "../quiz";
import { ImageBackground } from "react-native";
import  {perguntasDireitoConstitucional}  from "../constituicao";
import Brasao from "@/assets/images/Brasao-PPMG.png";

export default function ConstituicaoPage() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasDireitoConstitucional} />
    </ImageBackground>
  );
}
