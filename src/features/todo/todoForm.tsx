export const TodoForm = () => {
  return (
    <div className="p-4 bg-slate-100 w-120 max-w-[90%] rounded">
      <label>
        ToDo Title*
        <input
          type="text"
          className="p-2 border-2 border-slate-300 rounded w-full"
          placeholder="ToDo名を入力"
        />
      </label>
      <label>
        ToDo EndAt
        <input
          type="date"
          className="p-2 border-2 border-slate-300 rounded w-full"
        />
      </label>
      <button
        type="button"
        className="mt-4 px-4 py-2 w-full cursor-pointer bg-teal-600 text-white rounded hover:bg-teal-700"
      >
        Add ToDo
      </button>
    </div>
  );
};
