// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
    <main>
      <AddTodo />
      <TodoList />
    </main>
  );
}
