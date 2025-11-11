import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // mostrar ou esconder header
        // título centralizado
        headerTitleAlign: "center", // centraliza o título
        headerStyle: {
          backgroundColor: "#0a0a0aff", // cor de fundo do header
        },
        headerTintColor: "#ffffffff", // cor do texto do título
      }}
    >
      <Stack.Screen
        name="index" // caminho relativo à pasta app
        options={{ headerTitle: "Quiz de Concurso PPMG" }}
      />
    <Stack.Screen
        name="quiz/page/portuguesPage" // caminho relativo à pasta app
        options={{ headerTitle: "Português" }}
      />
      <Stack.Screen
        name="quiz/page/constituicaoPage"
        options={{ headerTitle: "Constituição Federal" }}
      />
      <Stack.Screen
        name="quiz/page/informaticaPage"
        options={{ headerTitle: "Informática" }}
      />
      <Stack.Screen
        name="quiz/page/raciocinioLogicoPage"
        options={{ headerTitle: "Raciocínio Lógico" }}
      />
      <Stack.Screen
        name="quiz/page/nocoesDeDireitoPage"
        options={{ headerTitle: "Noções de Direito" }}
      />

      <Stack.Screen
        name="quiz/page/direitosHumanosPage"
        options={{ headerTitle: "Direitos Humanos" }}
      />
      <Stack.Screen
        name="quiz/page/legislacaoEspecialPage"
        options={{ headerTitle: "Legislação Especial" }}
      />
      <Stack.Screen
        name="quiz/page/redacaoOficialPage"
        options={{ headerTitle: "Redação Oficial" }}
      />
    </Stack>
  );

}
