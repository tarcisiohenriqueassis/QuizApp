import React from "react";
import Quiz from "../quiz";
import { ImageBackground } from "react-native";
import { perguntasDireitoAdministrativo } from "../direitoAdministrativo";
import Brasao from "@/assets/images/Brasao-PPMG.png";

export default function DireitosAdministrativosPage() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasDireitoAdministrativo} />
    </ImageBackground>
  );
}