"use client";
import Header from "@/components/select-restaurant/Header";
import CategorySection from "@/components/select-restaurant/CategorySection";
import FilterButtons from "@/components/select-restaurant/FilterButtons";
import WhizzclusiveCard from "@/components/select-restaurant/WhizzclusiveCard";
import RestaurantCard from "@/components/select-restaurant/RestaurantCard";

const restaurants = [
  {
    name: "Zaitoon",
    dishes: [
      { name: "Chicken Biriyani", price: "₹200/-", image: "/images/biryani2.jpeg" },
      { name: "Naan", price: "₹50/-", image: "/images/naan.jpeg" },
      { name: "Veg Biryani", price: "₹180/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.0,
    deliveryTime: "32 mins",
    distance: "2 km",
  },
  {
    name: "Biryani House",
    dishes: [
      { name: "Mutton Biryani", price: "₹250/-", image: "/images/biryani2.jpeg" },
      { name: "Butter Naan", price: "₹60/-", image: "/images/naan.jpeg" },
      { name: "Paneer Biryani", price: "₹220/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.5,
    deliveryTime: "40 mins",
    distance: "3 km",
  },
  {
    name: "Spicy Paradise",
    dishes: [
      { name: "Kebab Platter", price: "₹300/-", image: "/images/biryani2.jpeg" },
      { name: "Masala Dosa", price: "₹120/-", image: "/images/naan.jpeg" },
      { name: "Hyderabadi Biryani", price: "₹250/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.2,
    deliveryTime: "35 mins",
    distance: "4 km",
  },
  {
    name: "Tandoor Palace",
    dishes: [
      { name: "Paneer Tikka", price: "₹150/-", image: "/images/biryani2.jpeg" },
      { name: "Chicken Tikka", price: "₹200/-", image: "/images/naan.jpeg" },
      { name: "Tandoori Roti", price: "₹40/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.3,
    deliveryTime: "30 mins",
    distance: "1.5 km",
  },
  {
    name: "The Curry House",
    dishes: [
      { name: "Butter Chicken", price: "₹270/-", image: "/images/biryani2.jpeg" },
      { name: "Dal Makhani", price: "₹150/-", image: "/images/naan.jpeg" },
      { name: "Garlic Naan", price: "₹50/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.7,
    deliveryTime: "45 mins",
    distance: "5 km",
  },
  {
    name: "Saffron Grill",
    dishes: [
      { name: "Grilled Fish", price: "₹350/-", image: "/images/biryani2.jpeg" },
      { name: "Prawn Biryani", price: "₹300/-", image: "/images/naan.jpeg" },
      { name: "Mushroom Masala", price: "₹180/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.6,
    deliveryTime: "50 mins",
    distance: "6 km",
  },
  {
    name: "Veggie Delight",
    dishes: [
      { name: "Veg Biryani", price: "₹200/-", image: "/images/biryani2.jpeg" },
      { name: "Paneer Butter Masala", price: "₹220/-", image: "/images/naan.jpeg" },
      { name: "Aloo Gobi", price: "₹140/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.4,
    deliveryTime: "28 mins",
    distance: "2.5 km",
  },
  {
    name: "The Royal Feast",
    dishes: [
      { name: "Lamb Shank", price: "₹400/-", image: "/images/biryani2.jpeg" },
      { name: "Mutton Seekh Kebab", price: "₹250/-", image: "/images/naan.jpeg" },
      { name: "Naan", price: "₹50/-", image: "/images/biryani2.jpeg" },
    ],
    rating: 4.8,
    deliveryTime: "60 mins",
    distance: "7 km",
  },
];

const SelectRestaurantPage = () => {
  return (
    <div className="lg:max-w-[1200px] mx-auto">
      <Header />
      <CategorySection />
      <FilterButtons />
      <WhizzclusiveCard />
      
      {/* Restaurant Cards */}
      <div className="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {restaurants.map((restaurant, index) => (
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
