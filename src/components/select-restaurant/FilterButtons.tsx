"use client"; // This component is client-side

import { useDispatch, useSelector } from "react-redux";
import { setActiveButton, toggleOption, toggleDropdown } from "../../redux/reducers/filterSlice";
import Dropdown from "../common/Dropdown"; // Assuming Dropdown component is in the common folder

const FilterButtons = () => {
  const dispatch = useDispatch();

  // Fetching filter data from Redux store
  const { activeButton, filterButtons, filterOptions, isDropdownOpen } = useSelector(
    (state: any) => state.filter
  );

  // Handle Option change in dropdown
  const handleOptionChange = (value: string, isChecked: boolean) => {
    dispatch(toggleOption(value)); // Update selected filter option
  };

  // Handle Button Click
  const handleButtonClick = (buttonName: string) => {
    dispatch(setActiveButton(buttonName)); // Update active filter button
  };

  // Toggle Dropdown visibility
  const toggleDropdownVisibility = () => {
    dispatch(toggleDropdown()); // Toggle the dropdown visibility
  };

  return (
    <div className="w-full p-4">
      {/* Horizontal scrollable container for buttons */}
      <div className="flex lg:justify-center space-x-2 overflow-x-auto scrollbar-hidden pb-4">
        {/* Filter Button - Dropdown Toggle */}
        <button
          onClick={toggleDropdownVisibility} // Toggle dropdown visibility on button click
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
        {filterButtons.map((button: { label: string; value: string }) => (
          <button
            key={button.value}
            onClick={() => handleButtonClick(button.value)}
            className={`p-2 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap ${
              activeButton === button.value
                ? "bg-[#3CAE06] text-white"
                : "text-[#1E1E1E]"
            }`}
          >
            <span className="text-sm">{button.label}</span>
          </button>
        ))}
      </div>

      {/* Conditionally Render Dropdown */}
      {isDropdownOpen && (
        <div className="absolute z-10 bg-white shadow-md p-4 rounded-lg">
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
