import { useRef } from "react";
import { useInputAtom } from "./inputAtom";

export const InputContainer = () => {
  const { setInputValue } = useInputAtom();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (data: FormData) => {
    const formData = Object.fromEntries(data.entries());

    setInputValue(formData.title as string);
  };

  return (
    <form className="flex gap-4" action={onSubmit}>
      <input
        name="title"
        type="text"
        ref={inputRef}
        className="p-2 border-2 border-slate-500 rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-slate-700 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};
