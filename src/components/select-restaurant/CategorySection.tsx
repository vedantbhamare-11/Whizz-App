"use client";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../redux/reducers/categorySlice"; // Import the action
import { Category } from "@/types/types";


const CategorySection = () => {
  const dispatch = useDispatch();

  // Get categories and active category from Redux state
  const { categories, activeCategory } = useSelector((state: any) => state.category);

  // Handle setting active category
  const handleCategoryClick = (category: Category) => {
    dispatch(setActiveCategory(category.name)); // Dispatch the action to set active category
  };

  return (
    <div className="w-full px-4">
      <div className="flex lg:justify-center overflow-x-auto space-x-8 pb-4 scrollbar-hidden">
        {categories.map((category: Category) => (
          <div
            key={category.name}
            onClick={() => handleCategoryClick(category)} // Now 'category' is typed
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
