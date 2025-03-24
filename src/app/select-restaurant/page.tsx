// components/select-restaurant/SelectRestaurantPage.tsx
"use client";
import { useSelector } from "react-redux";
import Header from "@/components/select-restaurant/Header";
import CategorySection from "@/components/select-restaurant/CategorySection";
import FilterButtons from "@/components/select-restaurant/FilterButtons";
import WhizzclusiveCard from "@/components/select-restaurant/WhizzclusiveCard";
import RestaurantCard from "@/components/select-restaurant/RestaurantCard";
import { Restaurant } from "@/types/types"; // Assuming the types file is in the root

const SelectRestaurantPage = () => {
  const { restaurants } = useSelector((state: any) => state.restaurant);

  return (
    <div className="lg:max-w-[1200px] mx-auto">
      <Header />
      <CategorySection />
      <FilterButtons />
      <WhizzclusiveCard />

      {/* Restaurant Cards */}
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {restaurants.map((restaurant: Restaurant, index: number) => (
          <RestaurantCard
            key={index}
            restaurant={restaurant} // Passing restaurant data as prop
          />
        ))}
      </div>
    </div>
  );
};

export default SelectRestaurantPage;
