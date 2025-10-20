import React from "react";
import Quiz from "../quiz";
import Brasao from "@/assets/images/Brasao-PPMG.png";
import { ImageBackground } from "react-native";
import { perguntasPortugues } from "../portugues";


export default function PortuguesPage() {

  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasPortugues} />
    </ImageBackground>
  );
}
export const screenOptions = {
  headerTitle: "Português",
  headerTitleAlign: "center",
};