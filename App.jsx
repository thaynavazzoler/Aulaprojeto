import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";

export default function App() {
const [task, setTaks] = useState("");
	return (
		<View style={styles.container} >
  <View>
    <TextInput
      value={task}
      placeholder="Digite uma nova tarefa"
      style={styles.input}
    />
    <TouchableOpacity
      style={styles.button}
      onPress={() => setTaks("")}
    >
      <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  <StatusBar style="auto" />
</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form:{
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
    padding: 5,
  },
  button:{
    backgroundColor: "#008000",
    padding: 10,
    borderRadius: 5,
  },
  buttonText:{
    color: "#fff",
  },
  list:{
    marginTop: 20,
  },
  item:{
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
  },
});