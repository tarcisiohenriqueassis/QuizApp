import React from "react";
import Quiz from "../quiz";
import Brasao from "@/assets/images/Brasao-PPMG.png";
import { ImageBackground } from "react-native";
import { perguntasRaciocinioLogico } from "../raciocinioLogico";

export default function RaciocinioLogicoPage() {
  return (
    <ImageBackground source={Brasao} style={{ flex: 1 }}>
      <Quiz perguntas={perguntasRaciocinioLogico} />
    </ImageBackground>
  );
}