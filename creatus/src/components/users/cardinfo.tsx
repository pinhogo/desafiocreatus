import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { ImPencil } from "react-icons/im";
import EditUser from "./edit";
import React from "react";

interface props {
  nome: string;
  email: string;
  level: number;
}

function Cardinfo({ nome, email, level }: props) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    //clique
    setIsEditing(true); // Mostra o pop-up
  };

  const handleClosePopup = () => {
    setIsEditing(false); // Esconde o pop-up
  };

  return (
    <div className="flex flex-row justify-around items-center h-4e w-full text-2xl border border-solid border-cinza-2">
      <div className="text-start w-full pl-60r">{nome}</div>
      <div className="text-start w-full">{email}</div>
      <div className="text-start w-full">{level}</div>
      <div className="flex gap-1e pr-60r">
        <button onClick={handleEditClick}>
          <ImPencil color="darkgreen" />
        </button>
        <button>
          <FiTrash2 color="red" />
        </button>
      </div>

      {isEditing && ( // Se isEditing for true, mostra o pop-up de edição
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded">
            <EditUser
              titulo="Editar Usuário"
              initialNome={nome}
              initialEmail={email}
              initialLevel={level}
              onClose={handleClosePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cardinfo;
