import { Text, View, StyleSheet, TextInput, TouchableOpacity, } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";

export default function App() {
const [task, setTask] = useState("");
const [tasks, setTasks] = useState([]);
	
	const addTask = () => {
	  if (task.trim().length > 0) {
	    setTasks([...tasks, { id: Math.random().toString(), value: task }]);
	    setTask("");
	  }
	};

  const removeTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  
	return (
		<View style={styles.container} >
  <View style={styles.form}>
    <TextInput
      placeholder="Digite uma nova tarefa"
      style={styles.input}
      onChangeText={setTask}
      value={task}
    />
    <TouchableOpacity
    onPress={addTask}
      style={styles.button}
    >
      <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.list}>
  {tasks.length === 0 ? (
    <Text style={styles.emplyList}>Nenhuma Tarefa Cadastrada</Text>
  ) : tasks.map((task) => (
    <View
      key={task.id}
      style={styles.item}
    >
      <Text style={styles.itemText}>{task.value}</Text>
      <TouchableOpacity
        onPress={() => removeTask(task.id)}
        style={styles.removeButton}
      >
        <Text style={styles.removeButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
    ))}
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
    width: "75%",
    padding: 5,
  },
  button:{
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText:{
    color: "#fff",
  },
  emplyList:{
    fontSize: 18,
    color: "#ff0000",
  },
  list:{
    marginTop: 20,
  },
  item:{

    borderBottomColor: "#000",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 5,
  },
  itemText:{
    fontSize: 18,
    width: "75%",
  },
  removeButton:{
    backgroundColor: "#ff0000",
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText:{
    color: "#fff",
  },
});