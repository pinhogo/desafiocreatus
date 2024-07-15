import Card from "./cardinfo";
import { useState, useEffect } from "react";

function Header() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/findall", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "authorization": "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col text-2xl border border-solid border-cinza-2">
        <div className="flex flex-row justify-between items-center pl-60r pr-60r h-4e">
          <div className="text-3xl font-bold">Usuários</div>
          <button
            className="bg-verde-forte 
                             text-white 
                               w-10e h-2e 
                               rounded-3xl
                               hover:scale-101
                              hover:active:scale-100
                              shadow-md
                               "
          >
            Adicionar usuário
          </button>
        </div>
        <div
          className="
                    bg-cinza-2
                    text-cinza 
                    flex flex-row 
                    justify-around 
                    items-center 
                    h-4e w-full
                    text-start
                    "
        >
          <div className="text-start w-full pl-60r">NOME</div>
          <div className="text-start w-full">EMAIL</div>
          <div className="text-start w-full pr-180r">NÍVEL DE ACESSO</div>
          <div></div>
        </div>
      </div>
      {data ? (
        data.map((user: { name: string; email: string; level: number }) => (
          <Card
            nome={user.name}
            email={user.email}
            level={user.level}
          />
        ))
      ) : (
        <p>Carregando...</p>
      )}
      {/* <Card nome="Gabriel" email="pinho@email.com" level={5} /> */}
    </>
  );
}
export default Header;
