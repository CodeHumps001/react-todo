import { Plus, Scroll } from "lucide-react";
export default function Header({ hide, onHide }) {
  return (
    <header className="flex justify-between px-26 py-3 bg-white/30 shadow backdrop-blur-2xl ring-black/5 max-[782px]:px-5 max-[782px]: ">
      <div className="flex  gap-2 justify-center items-center rounded-2xl">
        <span>
          <Scroll size={30} color="green" />
        </span>
        <h1 className="text-3xl max-[782px]:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-green-300 via-green-600 to-green-200  ">
          CreedTask
        </h1>
      </div>

      <button
        className="flex gap-2 px-10 py-3 bg-gray-100 hover:shadow-lg text-black rounded-2xl justify-center items-center 
       font-bold cursor-pointer max-[782px]:px-5 transition-all"
        onClick={() => onHide(!hide)}
      >
        New <Plus color="green" />
      </button>
    </header>
  );
}
