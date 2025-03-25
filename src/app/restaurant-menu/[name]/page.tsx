// app/restaurant-menu/[name]/page.tsx

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import from next/navigation
import SearchInput from "@/components/common/SearchInput"; // Assuming SearchInput is a shared component
import FoodCategoryButtons from "@/components/restaurant-menu/FoodCategoryButtons";
import HorizontalLine from "@/components/common/HorizontalLine";
import RestaurantMenu from "@/components/restaurant-menu/RestaurantMenu";
const RestaurantMenuPage = () => {
  const { name } = useParams(); // This will give you access to the [name] route parameter

  const [restaurantDetails, setRestaurantDetails] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (name) {
      // Fetch restaurant data based on the name (for example from an API or static data)
      const restaurantData = {
        name: name,
        openingTime: "10:00 AM",
        closingTime: "11:00 PM",
        dishes: [
          { name: "Chicken Biriyani", price: "₹200/-" },
          { name: "Naan", price: "₹50/-" },
          { name: "Veg Biryani", price: "₹180/-" },
        ],
      };
      setRestaurantDetails(restaurantData); // Update the restaurant details
    }
  }, [name]);


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="lg:max-w-[1200px] mx-auto">
      {/* Restaurant Name */}
      <h1 className="text-3xl text-[#3CAE06] font-semibold text-center mt-4">{restaurantDetails.name}</h1>

      {/* Open and Closing Times */}
      <div className="text-center text-sm mt-2">
        <span>Open: {restaurantDetails.openingTime} | Close: {restaurantDetails.closingTime}</span>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <SearchInput placeholder="Search..." searchQuery={""} setSearchQuery={function (query: string): void {
          throw new Error("Function not implemented.");
        } }  /> 
      </div>
      <FoodCategoryButtons />
      <HorizontalLine  />
      <RestaurantMenu />
    </div>
  );
};

export default RestaurantMenuPage;
