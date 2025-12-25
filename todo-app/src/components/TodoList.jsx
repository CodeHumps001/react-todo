import {
  ArrowDownRight,
  ArrowUpLeft,
  Badge,
  Box,
  CircleCheckBig,
  Delete,
} from "lucide-react";
import Button from "./Button";
import formatDate from "../helper/DateFormat";

export default function TodoList({ newItem, handleDelete, handleComplete }) {
  return (
    <li
      className={`animate-slide-in flex gap-3 justify-between items-center p-3 shadow bg-white/5 rounded-sm  ${
        !newItem.complete
          ? "border-l-2 border-green-500"
          : "border-l-2 border-red-500"
      }`}
    >
      <div className="flex gap-3 justify-center items-center">
        <span>
          {!newItem.complete ? (
            <ArrowDownRight size={10} color="green" strokeWidth={3} />
          ) : (
            <ArrowUpLeft size={10} color="red" strokeWidth={3} />
          )}
        </span>

        <div className="flex flex-col ">
          <h1
            className={` text-lg capitalize ${
              newItem.complete ? "line-through text-gray-170 " : " text-white"
            }`}
          >
            {newItem.task}
          </h1>
          <time className="text-sm lowercase text-red-500">
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
