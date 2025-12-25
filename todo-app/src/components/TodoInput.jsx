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
      task: text.toLocaleLowerCase(),
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
          className="w-full max-w-2xl px-4 mb-8 animate-slide-in"
          onSubmit={handleSubmit}
        >
          <div className="relative group flex items-center">
            <div className="relative flex items-center w-full bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a new task..."
                className="w-full py-3 pl-5 pr-16 bg-transparent text-gray-100 placeholder:text-gray-500 focus:outline-none text-base md:text-lg"
              />

              <button
                type="submit"
                className="absolute right-2 p-2 bg-green-500 text-slate-900 rounded-full hover:bg-green-400 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-green-500/80"
              >
                <Send size={20} weight="bold" />
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
}
