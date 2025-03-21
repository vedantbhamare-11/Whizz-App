// components/common/SearchInput.tsx
import { FC } from "react";

interface SearchInputProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder='Search "Shawarma"'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="p-6 pl-10 border border-gray-300 rounded-xl h-12 mt-2 w-full"
      />
      {/* Search icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="#3CAE06"
        className="size-6 absolute mt-1 left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};

export default SearchInput;
