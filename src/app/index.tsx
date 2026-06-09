import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Todo = {
  id: string;
  text: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now().toString(), text: input }]);
    setInput("");
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>

      {/* Input + bouton ajouter */}
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Ajouter une tâche..."
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.addBtn} onPress={addTodo}>
          <Text style={styles.addBtnText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Liste */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.text}</Text>
            <TouchableOpacity onPress={() => removeTodo(item.id)}>
              <Text style={styles.deleteBtn}>✕</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, paddingTop: 80 },
  title: { fontSize: 32, fontWeight: "bold", marginBottom: 20 },
  row: { flexDirection: "row", gap: 10, marginBottom: 20 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  addBtn: {
    backgroundColor: "#6366f1",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
  },
  addBtnText: { color: "white", fontSize: 24 },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#f3f4f6",
    borderRadius: 10,
    marginBottom: 10,
  },
  todoText: { fontSize: 16 },
  deleteBtn: { color: "red", fontSize: 18 },
});
