// components/select-restaurant/FilterButtons.tsx
const FilterButtons = () => {
    return (
      <div className="w-full p-4">
        {/* Horizontal scrollable container for buttons */}
        <div className="flex space-x-2 overflow-x-auto scrollbar-hidden pb-4">
          {/* First Button with Slider Icon and Down Arrow */}
          <button className="flex h-8 items-center justify-between p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-300 active:scale-95 active:bg-gray-200 whitespace-nowrap">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
              <span className="text-sm text-[#1E1E1E]">Filter</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
  
          {/* Other Buttons */}
          <button className="p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap">
            <span className="text-sm text-[#1E1E1E]">Under Rs 200</span>
          </button>
          <button className="p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap">
            <span className="text-sm text-[#1E1E1E]">Great Offers</span>
          </button>
          <button className="p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap">
            <span className="text-sm text-[#1E1E1E]">Quick</span>
          </button>
          <button className="p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap">
            <span className="text-sm text-[#1E1E1E]">Rating 4.0+</span>
          </button>
          <button className="p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap">
            <span className="text-sm text-[#1E1E1E]">Gourmet</span>
          </button>
        </div>
      </div>
    );
  };
  
  export default FilterButtons;
  