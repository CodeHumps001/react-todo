export default function Button({ children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`p-2 border border-gray-200 rounded-full hover ${
        type === "del" ? "bg-red-100" : type === "com" ? "bg-green-100" : ""
      }  hover:shadow-lg cursor-pointer justify-center items-center font-bold ${
        type === "del" ? "text-red-800" : type === "com" ? "text-green-800" : ""
      }  `}
    >
      {children}
    </button>
  );
}
