import { HTMLInputTypeAttribute } from "react";

interface Props {
  description: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Fill({ placeholder, description, type, onChange }: Props) {
  return (
    <>
      <div>
        <div className="text-base text-black p-05e flex">{description}</div>
        <div
          className="flex w-28.7e h-3e 
                        rounded-lg 
                        border border-solid border-cinzinha
                        self-stretch items-center">
          <input
            className="text-xl pl-1e flex bg-transparent w-full h-full border-none outline-none"
            type={type}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
}

export default Fill;
