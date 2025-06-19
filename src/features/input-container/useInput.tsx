import { useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  return { displayText: getDisplayText(inputValue), setInputValue };
};

const getDisplayText = (inputValue: string) => {
  return inputValue ? inputValue.toUpperCase() : "no text";
};

if (import.meta.vitest) {
  describe("getDisplayText", () => {
    it("入力が小文字なら出力が大文字であること", () => {
      expect(getDisplayText("hello")).toBe("HELLO");
    });
    it("空文字の時はno textであること", () => {
      expect(getDisplayText("")).toBe("no text");
    });
  });
}
