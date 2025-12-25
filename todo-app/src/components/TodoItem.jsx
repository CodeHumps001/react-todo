import TodoList from "./TodoList";

export default function TodoItem({
  item,
  onChange,
  handleDelete,
  handleComplete,
}) {
  return (
    <ul className=" p-3 w-full h-12/12 bg-transparent overflow-y-auto rounded-sm   flex  flex-col gap-5 max-[762px]:p-1 ">
      {item.length > 0 ? (
        item.map((b) => (
          <TodoList
            newItem={b}
            isCompleted={b.completed}
            key={b.id}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))
      ) : (
        <p className="text-gray-500 w-full text-center">
          Got something on your mind? Get it on the list!
        </p>
      )}
    </ul>
  );
}
