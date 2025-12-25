import { Box, CircleCheckBig, Delete } from "lucide-react";
import Button from "./Button";
import formatDate from "../helper/DateFormat";

export default function TodoList({ newItem, handleDelete, handleComplete }) {
  return (
    <li className="animate-slide-in flex gap-2 justify-between items-center p-3 shadow border border-gray-200 rounded-sm">
      <div className="flex gap-3 justify-center items-center">
        <span>
          <Box size={10} color="green" strokeWidth={3} />
        </span>

        <div className="flex flex-col ">
          <h1
            className={` text-lg capitalize text-gray-700 ${
              newItem.complete ? "line-through text-gray-600" : ""
            }`}
          >
            {newItem.task}
          </h1>
          <time className="text-sm lowercase text-gray-300">
            {" "}
            added: {formatDate(newItem.date)}
          </time>
        </div>
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
