// components/common/Toggle.tsx
import { FC } from "react";
import { ToggleProps } from "@/types/types";

const Toggle: FC<ToggleProps> = ({ isVegOnly, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`w-8 h-4 flex items-center p-1 rounded-full cursor-pointer ${
        isVegOnly ? "bg-[#3CAE06]" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-all duration-300 ${
          isVegOnly ? "translate-x-[10px]" : "translate-x-[-10px]"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
