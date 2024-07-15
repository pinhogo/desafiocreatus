import { FiTrash2 } from "react-icons/fi";
import { ImPencil } from "react-icons/im";

interface props {
  nome: string;
  email: string;
  level: number;
}

function cardinfo({ nome, email, level }: props) {
  return (
    <div className="flex flex-row justify-around items-center h-4e w-full text-2xl border border-solid border-cinza-2">
      <div className="text-start w-full pl-60r">{nome}</div> 
      <div className="text-start w-full">{email}</div>
      <div className="text-start w-full">{level}</div>
      <div className="flex gap-1e pr-60r">
        <button>
          <ImPencil color="darkgreen" />
        </button>
        <button>
          <FiTrash2 color="red" />
        </button>
      </div>
    </div>
  );
}

export default cardinfo;
