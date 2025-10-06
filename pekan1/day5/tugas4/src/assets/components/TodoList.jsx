import { useState } from "react";

export default function Todolist() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Belajar React Hooks", completed: false },
    { id: 2, text: "Membangun Aplikasi Todo", completed: false },
  ]);

  const [newTodoText, setNewTodoText] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodoText.trim() === "") return;
    const newTodo = {
      id: todos.length + 1,
      text: newTodoText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNewTodoText("");
  };

  const toggleTodo = (id) =>
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // 🎨 Style integral (langsung di komponen)
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "40px auto",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9fafb",
      textAlign: "center",
      fontFamily: "Poppins, sans-serif",
    },
    title: {
      color: "#111827",
      fontSize: "1.6rem",
      marginBottom: "20px",
    },
    form: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #d1d5db",
      fontSize: "1rem",
      outline: "none",
    },
    buttonAdd: {
      padding: "10px 16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#3b82f6",
      color: "white",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.2s",
    },
    todoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "10px 15px",
      marginBottom: "10px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
    },
    text: (completed) => ({
      textDecoration: completed ? "line-through" : "none",
      color: completed ? "#9ca3af" : "#111827",
      cursor: "pointer",
      flex: 1,
      textAlign: "left",
    }),
    deleteButton: {
      backgroundColor: "#ef4444",
      color: "white",
      border: "none",
      borderRadius: "6px",
      padding: "6px 10px",
      cursor: "pointer",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📝 Daftar Tugas</h2>

      <form onSubmit={addTodo} style={styles.form}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="Tambah tugas baru..."
          style={styles.input}
        />
        <button type="submit" style={styles.buttonAdd}>
          Tambah
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.todoItem}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={styles.text(todo.completed)}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={styles.deleteButton}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
