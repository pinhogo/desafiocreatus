import React, { useState } from "react";
import Fill from "../login/fill";

interface props {
  titulo: string;
  initialNome: string;
  initialEmail: string;
  initialLevel: number;
  onClose: () => void;
} 

function EditUser({
  titulo,
  initialNome,
  initialEmail,
  initialLevel,
  onClose,
}: props) {
  const [name, setNome] = useState(initialNome);
  const [email, setEmail] = useState(initialEmail);
  const [level, setLevel] = useState(initialLevel);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // TESTE NO CONSOLE, REMOVER DEPOIS
    console.log("Informações salvas:", {
      nome: name,
      email,
      level,
      password,
      confirmPassword,
    });
    onClose(); // Fecha o pop-up após salvar as informações
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="button" onClick={onClose}>
            close
        </button>
        <h1>{titulo}</h1>
        <Fill
          description="Nome"
          placeholder="Nome"
          type="text"
          value={name}
          onChange={(event) => setNome(event.target.value)}
        />
        <Fill
          description="Email"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Fill
          description="Nível de Acesso"
          placeholder="0"
          type="number"
          value={level.toString()}
          onChange={(event) => setLevel(Number(event.target.value))}
        />
        <Fill
          description="Senha"
          placeholder="Senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Fill
          description="Confirme a senha"
          placeholder="Confirme a senha"
          type="password"
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
export default EditUser;
