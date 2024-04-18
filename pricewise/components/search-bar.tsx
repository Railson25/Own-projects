"use client";

export const SearchBar = () => {
  const handleSubmit = () => {};

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter product link"
        className="flex-1 min-w-[200px] w-full p-3 border border-gray-300 rounded-lg shadow-xl text-base text-secondary focus:outline-none"
      />
      <button
        type="submit"
        className="bg-gray-900 border border-gray-900 rounded-lg shadow-xl px-5 py-3 text-white text-base font-semibold hover:opacity-90 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40"
      >
        Search
      </button>
    </form>
  );
};
