import Butoonl from "./botaologin.tsx";
import Fill from "./fill.tsx";

function Rigthd() {
  return (
    <div className="flex flex-col items-center justify-center w-100% h-100%">
      <h1 className="text-4xl text-black font-inter font-medium pb-20r">
        Bem vindo
      </h1>
      <div id="email" className="pb-15r">
        <Fill description="Email" placeholder="Email" type="text" />
      </div>
      <div id="pass" className="pb-20r">
        <Fill description="Senha" placeholder="Senha" type="password" />
      </div>
      <Butoonl textobt="Login" />
    </div>
  );
}

export default Rigthd;
