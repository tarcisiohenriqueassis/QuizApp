import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, BackHandler } from "react-native";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";

export default function Quiz({ perguntas = [] }) { // default vazio
  const router = useRouter();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [quizConcluido, setQuizConcluido] = useState(false);

  // Bloqueia o botão voltar sempre na tela do quiz
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true // bloqueia o botão voltar
    );
    return () => backHandler.remove();
  }, []);

  const mostrarToast = (mensagem, tipo = "success") => {
    Toast.show({
      type: tipo,
      text1: mensagem,
      position: "top",
      visibilityTime: 2700,
      autoHide: true,
      topOffset: 60,
    });
  };

  const handleOpcao = (index) => {
    if (!perguntas[questaoAtual]) return;

    setRespostaSelecionada(index);
    const correta = perguntas[questaoAtual].correta;

    if (index === correta) {
      setRespostasCorretas(respostasCorretas + 1);
      mostrarToast("✅ Resposta correta!", "success");
    } else {
      mostrarToast(
        `❌ Errado! A correta é: ${perguntas[questaoAtual].opcoes[correta]}`,
        "error"
      );
    }
  };

  const handleProxima = () => {
    if (!perguntas[questaoAtual]) return;

    setRespostaSelecionada(null);

    if (questaoAtual + 1 < perguntas.length) {
      setQuestaoAtual(questaoAtual + 1);
    } else {
      setQuizConcluido(true);
    }
  };

  const handleRecomecar = () => {
    setQuestaoAtual(0);
    setRespostasCorretas(0);
    setQuizConcluido(false);
  };

  const handleVoltarInicio = () => {
    router.replace("/"); // substitui a rota, impedindo voltar
  };

  if (!perguntas.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.pergunta}>Nenhuma pergunta disponível.</Text>
      </View>
    );
  }

  if (quizConcluido) {
    return (
      <View style={styles.container}>
        <Text style={styles.pergunta}>
          🎉 Quiz concluído! Você acertou {respostasCorretas} de {perguntas.length}
        </Text>

        <TouchableOpacity style={styles.botaoProxima} onPress={handleRecomecar}>
          <Text style={styles.textoBotao}>Recomeçar Quiz</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoProxima} onPress={handleVoltarInicio}>
          <Text style={styles.textoBotao}>Voltar à Tela Inicial</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const perguntaAtual = perguntas[questaoAtual];

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{perguntaAtual.pergunta}</Text>

      {perguntaAtual.opcoes.map((opcao, index) => {
        let bgColor = "#eee";
        if (respostaSelecionada !== null) {
          if (index === perguntaAtual.correta) bgColor = "green";
          else if (index === respostaSelecionada) bgColor = "red";
        }

        return (
          <TouchableOpacity
            key={index}
            style={[styles.opcao, { backgroundColor: bgColor }]}
            onPress={() => handleOpcao(index)}
            disabled={respostaSelecionada !== null}
          >
            <Text style={styles.textoOpcao}>{opcao}</Text>
          </TouchableOpacity>
        );
      })}

      {respostaSelecionada !== null && (
        <TouchableOpacity style={styles.botaoProxima} onPress={handleProxima}>
          <Text style={styles.textoBotao}>Próxima</Text>
        </TouchableOpacity>
      )}

      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 28,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  pergunta: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  opcao: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
  },
  textoOpcao: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#000",
  },
  botaoProxima: {
    backgroundColor: "#007bffff",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
