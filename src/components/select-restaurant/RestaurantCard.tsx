// components/select-restaurant/RestaurantCard.tsx
import { useEffect, useState } from "react";
import { Restaurant } from "@/types/types"; // Assuming the types file is in the root
import Link from "next/link"; // Importing Link from Next.js

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % restaurant.dishes.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [restaurant.dishes.length]);

  // Function to handle clicking on carousel indicator
  const handleIndicatorClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    // Wrap the whole card inside the Link component
    <Link href={`/restaurant-menu/${restaurant.name}`} passHref>
      <div className="relative lg:max-w-[350px] my-2 mx-auto bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer">
        {/* Image Carousel */}
        <div className="relative w-full h-48 overflow-hidden">
          {/* Images Container */}
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`, // Slides images based on current index
            }}
          >
            {restaurant.dishes.map((dish, index) => (
              <img
                key={index}
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            ))}
          </div>

          {/* Dish Name and Price */}
          <div className="absolute flex gap-2 top-4 left-4 bg-black/50 text-white p-1 rounded-lg">
            <span className="font-bold text-sm">
              {restaurant.dishes[currentImageIndex].name}
            </span>
            <span className="text-sm">{restaurant.dishes[currentImageIndex].price}</span>
          </div>
        </div>
        <div className="bg-white p-2 flex items-center justify-center rounded-tr-lg space-x-1 absolute w-auto h-8 bottom-15 left-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#3CAE06]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <span className="text-sm font-semibold text-gray-600">{restaurant.deliveryTime}</span>
          <span className="text-sm font-semibold text-gray-600">•</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 text-[#3CAE06]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>

          <span className="text-sm font-semibold text-gray-600">{restaurant.distance}</span>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-18 right-4 flex space-x-2">
          {restaurant.dishes.map((_, index) => (
            <div
              key={index}
              onClick={() => handleIndicatorClick(index)} // Handle click to change image
              className={`cursor-pointer transition-all duration-300 ${
                currentImageIndex === index
                  ? "bg-white w-4 h-2 rounded-full" // Active (ellipse-shaped)
                  : "bg-white/50 w-2 h-2 rounded-full" // Inactive (circular with transparent white color)
              }`}
            ></div>
          ))}
        </div>

        {/* Restaurant Details */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">{restaurant.name}</span>

            {/* Rating Badge */}
            <div className="flex items-center justify-center bg-[#3CAE06] rounded-full px-2">
              <span className="text-sm text-white">{restaurant.rating}</span>
              <span className="text-white ml-1">⭐</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
