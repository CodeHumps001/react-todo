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
    toast.success("fetching...");
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
    <Row className="bg-slate-900 overflow-hidden">
      <Header hide={hide} onHide={setHide} />

      <main className="flex flex-col h-screen w-full max-w-2xl m-auto p-5 overflow-hidden">
        {/* Scrollable Container for Tasks */}
        <div className="flex-1 overflow-y-auto min-h-0 mb-4 pr-2 custom-scrollbar">
          <TodoItem
            item={item}
            onChange={setItem}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        </div>

        {/* Fixed Input at Bottom */}
        <div className="shrink">
          <TodoForm item={item} onChange={setItem} hide={hide} />
        </div>
      </main>
    </Row>
  );
}
