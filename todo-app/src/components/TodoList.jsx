import { Box, CircleCheckBig, Delete } from "lucide-react";
import Button from "./Button";

export default function TodoList({ newItem, handleDelete, handleComplete }) {
  return (
    <li className="animate-slide-in flex gap-2 justify-between items-center p-3 shadow border border-gray-200 rounded-sm">
      <div className="flex gap-2 justify-center items-center">
        <span>
          <Box size={15} color="green" strokeWidth={3} />
        </span>
        <span
          className={`text-xl font-medium text-gray-500 capitalize ${
            newItem.complete ? "line-through text-orange-500" : ""
          }`}
        >
          {newItem.task}
        </span>
      </div>{" "}
      <div className="flex justify-center items-center gap-2">
        <Button type="del" onClick={() => handleDelete(newItem.id)}>
          <Delete />
        </Button>
        {!newItem.complete && (
          <Button type="com" onClick={() => handleComplete(newItem.id)}>
            <CircleCheckBig />
          </Button>
        )}
      </div>
    </li>
  );
}
