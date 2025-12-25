import styled from "styled-components";
import Header from "../components/HeaderComponent";
import TodoForm from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Row = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function AppLayout() {
  const [item, setItem] = useState(() => {
    const savedTasks = localStorage.getItem("task");

    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [hide, setHide] = useState(false);

  useEffect(() => {
    toast.success("Welcome back, Genius");
    localStorage.setItem("task", JSON.stringify(item));
  }, [item]);

  function handleDelete(id) {
    setItem((prevItems) => prevItems.filter((item) => item.id !== id));

    toast.success(`Task with ID ${id} is deleted successfully`);
  }
  function handleComplete(id) {
    setItem((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );

    toast.success(`Task Updated successfully`);
  }
  return (
    <Row>
      <Header hide={hide} onHide={setHide} />

      <main className="flex flex-col justify-start items-center h-8/12 w-6/12 bg-white/10   m-auto border rounded-2xl border-gray-200 p-10 max-[762px]:w-12/12 max-[762px]:border-gray-50 max-[762px]:p-2">
        <TodoForm item={item} onChange={setItem} hide={hide} />

        <TodoItem
          item={item}
          onChange={setItem}
          handleDelete={handleDelete}
          handleComplete={handleComplete}
        />
      </main>
    </Row>
  );
}
