import { useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return { displayText: getDisplayText(inputValue), setInputValue };
};

const getDisplayText = (inputValue: string) => {
  return inputValue ? inputValue.toUpperCase() : "no text";
};
