import React, { useState, useEffect,useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet, BackHandler, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import Toast from "react-native-toast-message";
import { useFocusEffect } from "@react-navigation/native";
import embaralharPerguntasEAlternativas from "../../../utils/embaralharPerguntas"; // ajuste o caminho
import Brasao from "../../../assets/images/Brasao-PPMG.png";

export default function Quiz({ perguntas = [] }) { 
  const router = useRouter();
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [respostasCorretas, setRespostasCorretas] = useState(0);
  const [respostaErrada, setRespostaErrada] = useState(0);
  const [quizConcluido, setQuizConcluido] = useState(false);
  const [perguntasEmbaralhadas, setPerguntasEmbaralhadas] = useState([]);

  // Bloqueia o botão voltar sempre na tela do quiz
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => true
    );
    return () => backHandler.remove();
  }, []);

  // Embaralha perguntas e alternativas ao carregar o componente
  useFocusEffect(
    useCallback(() => {
      const embaralhadas = embaralharPerguntasEAlternativas(perguntas);
      setPerguntasEmbaralhadas(embaralhadas);
      setQuestaoAtual(0);
      setRespostasCorretas(0);
      setRespostaErrada(0);
      setQuizConcluido(false);
    }, [perguntas])
  );

  const mostrarToast = (mensagem, tipo = "success") => {
    Toast.show({
      type: tipo,
      text1: mensagem,
      position: "top",
      visibilityTime: 4000,
      autoHide: true,
      topOffset: 12,
    });
  };

  const handleOpcao = (index) => {
    if (!perguntasEmbaralhadas[questaoAtual]) return;

    setRespostaSelecionada(index);
    const correta = perguntasEmbaralhadas[questaoAtual].correta;

    if (index === correta) {
      setRespostasCorretas(respostasCorretas + 1);
      mostrarToast("✅ Resposta correta!", "success");
    } else {
      mostrarToast(
        `❌ Errado! A correta é: ${perguntasEmbaralhadas[questaoAtual].opcoes[correta]}`,
        "error"
      );
       setRespostaErrada(prev => prev + 1);
    }
  };

  const handleProxima = () => {
    if (!perguntasEmbaralhadas[questaoAtual]) return;

    setRespostaSelecionada(null);

    if (questaoAtual + 1 < perguntasEmbaralhadas.length) {
      setQuestaoAtual(questaoAtual + 1);
    } else {
      setQuizConcluido(true);
    }
  };

  const handleRecomecar = () => {
    const embaralhadas = embaralharPerguntasEAlternativas(perguntas);
    setPerguntasEmbaralhadas(embaralhadas);
    setQuestaoAtual(0);
    setRespostasCorretas(0);
    setRespostaErrada(0);
    setQuizConcluido(false);
  };

  const handleVoltarInicio = () => {
    router.replace("/"); // substitui a rota, impedindo voltar
  };

  if (!perguntasEmbaralhadas.length) {
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
          🎉 Quiz concluído! Você acertou {respostasCorretas} de {perguntasEmbaralhadas.length}
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

  const perguntaAtual = perguntasEmbaralhadas[questaoAtual];

  return (
    <ImageBackground  source={Brasao} style={styles.background}>
    <View style={styles.container}>
      <Toast />
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
      
       <Text>
       {perguntasEmbaralhadas.length > 0 && (
        <Text style={{ marginTop: 20, color: "white", fontWeight: "bold", textAlign: "center" }}>
          Questão {questaoAtual + 1} de {perguntasEmbaralhadas.length}
        </Text>
      )}
      </Text>
      <Text>
      {respostasCorretas >= 0 && (
        <Text style={{ marginTop: 5, color: "green", fontWeight: "bold", textAlign: "center" }}>
          Acertos: {respostasCorretas}
        </Text>
      )}
      </Text>
       <Text>  
      {respostaErrada && (
        <Text style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
          {`Erradas: ${respostaErrada}`}
        </Text>
      )}
      </Text> 
     
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
    marginTop: 10,
    marginBottom: 20,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
