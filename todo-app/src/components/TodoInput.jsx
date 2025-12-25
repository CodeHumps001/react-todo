import { Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TodoForm({ item, onChange, hide }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      toast.error(`Task is empty`);
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      task: text,
      completed: false,
    };

    const updatedTodos = [...item, newTodo];
    onChange(updatedTodos);
    localStorage.setItem("task", JSON.stringify(updatedTodos));

    setText("");

    toast.success("Todo Added successfully");
  }

  return (
    <>
      {hide && (
        <form
          className="py-2 px-2 shadow rounded-2xl mb-10 relative  w-10/12 animate-slide-in"
          onSubmit={handleSubmit}
        >
          <div className="relative flex items-center w-full max-w-xl group">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a task..."
              className="w-60 py-3 pl-4 pr-14 border text-gray-100 rounded-2xl focus:outline-none border-green-300 placeholder:text-gray-400 focus:w-full transition-all duration-300 ease-in-out"
            />
            <button className="bg-green-500/10 p-3 rounded-full text-green-400 font-bold hover:bg-green-500 hover:text-white transition-all duration-300 absolute right-2">
              <Send size={18} />
            </button>
          </div>
        </form>
      )}
    </>
  );
}
