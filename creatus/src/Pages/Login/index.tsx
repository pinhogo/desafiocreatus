import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Butoonl from "../../components/login/botaologin.js";
import Fill from "../../components/login/fill.tsx";
import bg from "../../assets/img/bg.svg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [log, setLogin] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError(null);
    setLogin(null);

    const data = { email, password };
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      const { token, user } = await response.json();
      
      setLogin("Login bem-sucedido!");
      console.log("Login bem-sucedido!", log);
      console.log("Token:", token);
      console.log("User:", user);
      navigate("/list");
    } else {
      const { msg } = await response.json();
      console.log(msg);
      error;
      setError(msg);
      console.error("Erro no login:", error);
    }
  };

  return (
    <div className="flex flex-row">
      <div
        className="bg-cover 
                  bg-left 
                  w-full 
                  h-screen 
                  flex justify-end"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      <div
        className="flex flex-col 
                      items-center 
                      justify-center 
                      w-full h-100h bg-white 
                      box-border rounded-3xl
                      "
      >
        <h1 className="text-4xl text-black font-inter font-medium pb-20r">
          Bem vindo
        </h1>
        {error && <div className="text-red">{error}</div>}
        {log && <div className="text-green">{log}</div>}
        <form onSubmit={handleSubmit}>
          <div id="email" className="pb-15r">
            <Fill
              description="Email"
              placeholder="Email"
              type="text"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </div>
          <div id="pass" className="pb-20r">
            <Fill
              description="Senha"
              placeholder="Senha"
              type="password"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
          </div>
          <Butoonl textobt="Login" />
        </form>
      </div>
    </div>
  );
}
export default Login;
