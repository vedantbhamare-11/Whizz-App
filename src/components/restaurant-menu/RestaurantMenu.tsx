// components/select-restaurant/RestaurantMenu.tsx
import { useState } from "react";
import MenuItem from "./MenuItem"; // Import MenuItem component

const RestaurantMenu = () => {
  // Hardcoded categories and menu items for demonstration
  const menuCategories = [
    {
      category: "Starters",
      items: [
        {
          name: "Chicken Wings",
          image: "/images/biryani2.jpeg",
          price: "250",
        },
        {
          name: "Garlic Bread",
          image: "/images/biryani2.jpeg",
          price: "120",
        },
      ],
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Butter Chicken",
          image: "/images/biryani2.jpeg",
          price: "300",
        },
        {
          name: "Paneer Tikka",
          image: "/images/biryani2.jpeg",
          price: "250",
        },
      ],
    },
    {
      category: "Desserts",
      items: [
        {
          name: "Gulab Jamun",
          image: "/images/biryani2.jpeg",
          price: "80",
        },
        {
          name: "Ice Cream",
          image: "/images/biryani2.jpeg",
          price: "100",
        },
      ],
    },
  ];

  // State to manage the active category dropdown
  const [activeCategories, setActiveCategories] = useState<string[]>(
    menuCategories.map((category) => category.category) // Set all categories as active initially
  );

  const toggleCategory = (category: string) => {
    setActiveCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category) // Remove category if it's already active
        : [...prev, category] // Add category if it's not active
    );
  };

  return (
    <div className="w-full p-4">
      {menuCategories.map((category) => (
        <div key={category.category} >
          <button
            onClick={() => toggleCategory(category.category)}
            className="w-full h-12 flex items-center bg-gray-50 p-4 rounded-lg text-md text-left"
          >
            <span className="flex-1">{category.category}</span>
            {/* Chevron icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className={`w-5 h-5 transform transition-transform duration-500 ${
                activeCategories.includes(category.category) ? "rotate-180" : "rotate-0"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Category dropdown with smooth transition */}
          <div
            className={`mt-4 space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
              activeCategories.includes(category.category) ? "max-h-screen" : "max-h-0"
            }`}
          >
            {category.items.map((item, index) => (
              <MenuItem
                key={index}
                dishName={item.name}
                dishImage={item.image}
                price={item.price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
