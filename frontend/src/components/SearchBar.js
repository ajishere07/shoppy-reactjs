import React from "react";

function SearchBar() {
  return (
    <div className="inline-flex cursor-pointer border-2 border-custom-700 justify-between items-center border-blue-600 rounded-3xl box-border px-2 xl:h-9 md:w-80 w-44 h-8">
      <svg
        className="w-4"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#5198EC"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        className="ml-2 border-none outline-none w-full h-4"
        placeholder="search items"
        type="text"
      />
    </div>
  );
}

export default SearchBar;
