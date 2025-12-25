import { Send } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function TodoForm({ item, onChange, hide }) {
  const [text, setText] = useState(""); // Rename for clarity

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      toast.error(`Task is empty`);
      return;
    }

    // 1. Create the new object with a unique ID
    const newTodo = {
      id: crypto.randomUUID(), // Standard unique ID in 2025
      task: text,
      completed: false,
    };

    // 2. Add the object to the existing array
    onChange([...item, newTodo]);

    setText("");

    toast.success("Todo Added successfully");
  }

  return (
    <>
      {hide && (
        <form
          className="py-2 px-6 shadow rounded-2xl mb-10"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-center items-center gap-3">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a task..."
              className="w-60 py-3 px-2 border rounded-2xl outline-green-400 border-green-300"
            />
            <button className="bg-green-50 p-3 rounded-full text-green-600 font-bold hover:bg-green-100 transition-colors">
              <Send />
            </button>
          </div>
        </form>
      )}
    </>
  );
}
