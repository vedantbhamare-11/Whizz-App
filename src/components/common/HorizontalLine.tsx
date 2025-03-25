// components/common/HorizontalLine.tsx
import React from "react";
import { HorizontalLineProps } from "@/types/types";

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  color = "border-gray-200", // Default color: gray
  thickness = "border-t", // Default thickness: thin
  className = "mx-4", // Default margin class
}) => {
  return <hr className={` ${thickness} ${color} ${className}`} />;
};

export default HorizontalLine;
