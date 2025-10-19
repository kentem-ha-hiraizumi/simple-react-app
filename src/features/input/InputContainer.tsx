import { useRef } from "react";
import { useInputAtom } from "./inputAtom";

export const InputContainer = () => {
  const { setInputValue } = useInputAtom();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex gap-4">
      <input
        type="text"
        ref={inputRef}
        className="p-2 border-2 border-slate-500 rounded"
      />
      <button
        type="button"
        className="px-4 py-2 bg-slate-700 text-white rounded"
        onClick={() => {
          setInputValue(inputRef.current?.value ?? "");
        }}
      >
        Submit
      </button>
    </div>
  );
};
