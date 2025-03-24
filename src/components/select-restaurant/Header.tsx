// components/select-restaurant/SelectRestaurantPage.tsx
"use client"; // This line ensures that the component will run in the client-side, as we'll be using state

import { useState } from "react";
import SearchInput from "../common/SearchInput"; // Importing the SearchInput component
import Toggle from "../common/Toggle"; // Importing the Toggle component

const Header = () => {
  const [isVegOnly, setIsVegOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle for "Veg Only" filter
  const handleVegToggle = () => {
    setIsVegOnly((prev) => !prev);
  };

  return (
    <div className="px-4 pt-4 flex flex-row gap-4">
      {/* Left side: Search bar */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex flex-col gap-2 mb-4">
          <SearchInput placeholder='"Shawarma"' searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
      </div>

      {/* Right side: Veg Mode and Toggle */}
      <div className="flex flex-col items-center justify-start">
        <div className="text-right text-[#393939]">
          <h2 className="text-md font-bold">VEG</h2>
          <h3 className="text-xs font-semibold">MODE</h3>
        </div>
        {/* Veg Only Toggle */}
        <div className="mt-1">
        <Toggle isVegOnly={isVegOnly} onToggle={handleVegToggle} />
        </div>
      </div>
    </div>
  );
};

export default Header;
