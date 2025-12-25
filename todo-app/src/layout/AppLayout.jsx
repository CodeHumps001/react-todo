import styled from "styled-components";
import Header from "../components/HeaderComponent";
import TodoForm from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    <div className="bg-slate-900 overflow-auto h-svh flex flex-col  ">
      <Header hide={hide} onHide={setHide} />

      <main className="flex flex-col  w-full max-w-2xl m-auto p-5 overflow-hidden">
        {/* Scrollable Container for Tasks */}
        <div className="flex-1 overflow-y-auto min-h-0 mb-4 pr-2 custom-scrollbar">
          <TodoItem
            item={item}
            onChange={setItem}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        </div>

        <div className="shrink">
          <TodoForm item={item} onChange={setItem} hide={hide} />
        </div>
      </main>
    </div>
  );
}
