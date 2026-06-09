import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.number}>{count}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count > 0 ? count - 1 : 0)}
        >
          <Text style={styles.btnText}>−</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setCount(0)}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  number: { fontSize: 80, fontWeight: "bold" },
  buttons: { flexDirection: "row", gap: 20, marginTop: 30 },
  btn: { backgroundColor: "#000", padding: 20, borderRadius: 12 },
  btnText: { color: "white", fontSize: 30 },
});
