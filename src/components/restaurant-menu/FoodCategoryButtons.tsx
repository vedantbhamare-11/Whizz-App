import { useState } from "react";

const FoodCategoryButtons = () => {
  // Default active button is "all"
  const [activeButton, setActiveButton] = useState<string>("all");

  // Hardcoded food categories
  const foodCategories = [
    { label: "All", value: "all" },
    { label: "Meals", value: "meals" },
    { label: "Rice", value: "rice" },
    { label: "Starters", value: "starters" },
    { label: "Curries", value: "curries" },
    { label: "Desserts", value: "desserts" },
  ];

  // Handle Button Click
  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName); // Update active food category button
  };

  return (
    <div className="w-full px-4">
      {/* Horizontal scrollable container for food category buttons */}
      <div className="flex lg:justify-center space-x-1 overflow-x-auto scrollbar-hidden pb-4">
        {foodCategories.map((button) => (
          <button
            key={button.value}
            onClick={() => handleButtonClick(button.value)}
            className={`px-4 flex items-center justify-between h-8 border border-gray-200 rounded-full hover:bg-gray-100 transition-all duration-200 active:scale-95 active:bg-gray-200 whitespace-nowrap ${
              activeButton === button.value
                ? "bg-[#3CAE06] text-white"
                : "text-[#1E1E1E]"
            }`}
          >
            <span className="text-sm">{button.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FoodCategoryButtons;
