import { useRef } from "react";
import { useInput } from "./useInput";

export const InputContainer = () => {
  const { displayText, setInputValue } = useInput();
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <h2>{displayText}</h2>
      <div className="input-container">
        <input type="text" ref={inputRef} />
        <button
          type="button"
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
