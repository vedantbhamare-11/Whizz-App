// components/select-restaurant/MenuItem.tsx
import { FC } from "react";
import { MenuItemProps } from "@/types/types";

const MenuItem: FC<MenuItemProps> = ({ dishName, dishImage, price }) => {
  return (
    <div className="w-full bg-white p-4 rounded-lg flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img
          src={dishImage}
          alt={dishName}
          className="w-16 h-16 object-cover rounded-lg"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{dishName}</span>
          <span className="text-gray-600 text-sm">₹ {price}</span>
          <span className="text-sm text-gray-500">GST Included</span>
        </div>
      </div>
      <button className="bg-[#3CAE06] flex gap-1 items-center text-white py-1 px-4 rounded-full hover:bg-green-600 transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add
      </button>
    </div>
  );
};

export default MenuItem;
