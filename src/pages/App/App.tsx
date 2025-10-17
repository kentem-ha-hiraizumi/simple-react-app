import { InputContainer } from "../../features/input-container/InputContainer";

export const App = () => {
  return (
    <main className="p-4 flex flex-col gap-4 items-center">
      <h1 className=" text-4xl text-teal-700 text-center">Simple React App</h1>
      <InputContainer />
    </main>
  );
};
