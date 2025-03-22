import { useState } from "react";
import Dropdown from "../common/Dropdown"; // Assuming Dropdown component is in the common folder

const FilterButtons = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("");

  const filterOptions = [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "non-vegetarian" },
    { label: "Vegan", value: "vegan" },
    { label: "Spicy", value: "spicy" },
    { label: "Low Calorie", value: "low-calorie" },
  ];

  const handleOptionChange = (value: string, isChecked: boolean) => {
    console.log(`${value} is ${isChecked ? "checked" : "unchecked"}`);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="w-full p-4">
      {/* Horizontal scrollable container for buttons */}
      <div className="flex lg:justify-center space-x-2 overflow-x-auto scrollbar-hidden pb-4">
        {/* Filter Button - Dropdown Toggle */}
        <button
          onClick={toggleDropdown}
          className="flex h-8 items-center justify-between p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-300 active:scale-95 active:bg-gray-200 whitespace-nowrap"
        >
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
        <button
          onClick={() => handleButtonClick("underRs200")}
          className={`p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap ${
            activeButton === "underRs200" ? "bg-[#3CAE06] text-white" : "text-[#1E1E1E]"
          }`}
        >
          <span className="text-sm">Under Rs 200</span>
        </button>

        <button
          onClick={() => handleButtonClick("greatOffers")}
          className={`p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap ${
            activeButton === "greatOffers" ? "bg-[#3CAE06] text-white" : "text-[#1E1E1E]"
          }`}
        >
          <span className="text-sm">Great Offers</span>
        </button>

        <button
          onClick={() => handleButtonClick("quick")}
          className={`p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap ${
            activeButton === "quick" ? "bg-[#3CAE06] text-white" : "text-[#1E1E1E]"
          }`}
        >
          <span className="text-sm">Quick</span>
        </button>

        <button
          onClick={() => handleButtonClick("rating4")}
          className={`p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap ${
            activeButton === "rating4" ? "bg-[#3CAE06] text-white" : "text-[#1E1E1E]"
          }`}
        >
          <span className="text-sm">Rating 4.0+</span>
        </button>

        <button
          onClick={() => handleButtonClick("gourmet")}
          className={`p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap ${
            activeButton === "gourmet" ? "bg-[#3CAE06] text-white" : "text-[#1E1E1E]"
          }`}
        >
          <span className="text-sm">Gourmet</span>
        </button>
      </div>

      {/* Conditionally Render Dropdown */}
      {isDropdownOpen && (
        <div className="absolute lg:left-100 z-10 bg-white shadow-md p-4 rounded-lg ">
          <Dropdown
            title="Select Filters"
            options={filterOptions}
            onOptionChange={handleOptionChange}
          />
        </div>
      )}
    </div>
  );
};

export default FilterButtons;
