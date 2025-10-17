import { useRef } from "react";
import { useInput } from "./useInput";

export const InputContainer = () => {
  const { displayText, setInputValue } = useInput();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2 className="text-xl text-orange-700 font-bold">{displayText}</h2>
      <div className="flex gap-4">
        <input type="text" ref={inputRef} className="border-2 border-slate-500 rounded" />
        <button
          type="button"
          className="bg-slate-700 text-white px-4 py-2 rounded"
          onClick={() => {
            setInputValue(inputRef.current?.value ?? "");
          }}
        >
          Submit
        </button>
      </div>
    </>
  );
};
