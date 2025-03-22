"use client"; 
import Header from "@/components/select-restaurant/Header";
import CategorySection from "@/components/select-restaurant/CategorySection";
import FilterButtons from "@/components/select-restaurant/FilterButtons";
import WhizzclusiveCard from "@/components/select-restaurant/WhizzclusiveCard";
const SelectRestaurantPage = () => {
  return (
    <div>
      <Header />
      <CategorySection />
      <FilterButtons />
      <WhizzclusiveCard />
    </div>
  );
};

export default SelectRestaurantPage;
