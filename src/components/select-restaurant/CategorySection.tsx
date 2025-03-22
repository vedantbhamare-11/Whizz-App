// components/select-restaurant/CategorySection.tsx
import { useState } from "react";

const categories = [
  { name: "All", image: "/images/biryani.png" },
  { name: "Meals", image: "/images/biryani.png" },
  { name: "Rice", image: "/images/biryani.png" },
  { name: "Starters", image: "/images/biryani.png" },
  { name: "Curries", image: "/images/biryani.png" },
  { name: "Desserts", image: "/images/biryani.png" },
];

const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="w-full px-4">
      <div className="flex justify-center overflow-x-auto space-x-8 pb-4 scrollbar-hidden">
        {categories.map((category) => (
          <div
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`cursor-pointer flex flex-col items-center ${
              activeCategory === category.name
                ? "text-[#3CAE06]"
                : "text-gray-700"
            }`}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-12"
            />
            <p className="w-16 text-center">{category.name}</p>
            {/* Underline active category */}
            <div
              className={`w-full h-1 mt-2 rounded-tl-lg rounded-tr-lg transition-all duration-300 ${
                activeCategory === category.name
                  ? "bg-[#3CAE06]"
                  : "bg-transparent"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Full-width line */}
      <div className="w-full h-[1.5px] mt-[-17px] bg-gray-300"></div>
    </div>
  );
};

export default CategorySection;
