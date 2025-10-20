import React from "react";
import { View, Button, StyleSheet,ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import Brasao from "@/assets/images/Brasao-PPMG.png";

export default function Home() {

  const router = useRouter();

  return (
    <ImageBackground source={Brasao} style={styles.background} >
    <View style={styles.container}>
      <Button style={styles.button} title="Constituição Federal" onPress={() => router.push("/(tabs)/quiz/page/constituicaoPage")} />
      <Button style={styles.button} title="Língua Portuguesa" onPress={() => router.push("/(tabs)/quiz/page/portuguesPage")} />
      <Button style={styles.button} title="Informática" onPress={() => router.push("/(tabs)/quiz/page/informaticaPage")} />
      <Button style={styles.button} title="Raciocínio lógico" onPress={() => router.push("/(tabs)/quiz/page/raciocinioLogicoPage")} />
      <Button style={styles.button} title="Direito administrativos" onPress={() => router.push("/(tabs)/quiz/page/direitosAdministrativosPage")} />
      <Button style={styles.button} title="Direito Penal" onPress={() => router.push("/(tabs)/quiz/page/execucaoPenalPage")} />
      <Button style={styles.button} title="Direitos Humanos" onPress={() => router.push("/(tabs)/quiz/page/direitosHumanosPage")} />
      <Button style={styles.button} title="Lei de execução penal" onPress={() => router.push("/(tabs)/quiz/page/execucaoPenalPage")} />
      <Button style={styles.button} title="Legislação Especial" onPress={() => router.push("/(tabs)/quiz/page/legislacaoEspecialPage")} />
      <Button style={styles.button} title="Redação Oficíal" onPress={() => router.push("/(tabs)/quiz/page/redacaoOficialPage")} />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    gap: 22,
  },
  button:{
    paddingBottom:10,
    backgroundColor:'blue',
    borderRadius:5,
  }
});
