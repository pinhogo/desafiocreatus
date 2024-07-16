import React from "react";

interface Props {
  textobt: string;
}

function Butoonl({ textobt }: Props) {
  return (
    <div>
      <button
        className="bg-verde-forte 
                   text-white
                   font-weight-500
                    w-28.7e h-3e rounded-lg 
                    hover:scale-101
                    hover:active:scale-100
                    "
      >
        {textobt}
      </button>
    </div>
  );
}

export default Butoonl;
