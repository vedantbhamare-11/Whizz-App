"use client"; 
import Header from "@/components/select-restaurant/Header";
import CategorySection from "@/components/select-restaurant/CategorySection";
import FilterButtons from "@/components/select-restaurant/FilterButtons";
const SelectRestaurantPage = () => {
  return (
    <div>
      <Header />
      <CategorySection />
      <FilterButtons />
    </div>
  );
};

export default SelectRestaurantPage;
