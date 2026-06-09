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
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now().toString(), text: input, completed: false },
    ]);
    setInput("");
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
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
      {todos.length === 0 && <Text>Aucune tâche</Text>}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text
              style={[
                styles.todoText,
                item.completed && { textDecorationLine: "line-through" },
              ]}
            >
              {item.text}
            </Text>
            <View style={styles.containerBtn}>
              <TouchableOpacity onPress={() => toggleTodo(item.id)}>
                <Text style={styles.checkBtn}>v</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeTodo(item.id)}>
                <Text style={styles.deleteBtn}>✕</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 40, paddingTop: 80 },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
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
  checkBtn: { color: "green", fontSize: 18 },
});
