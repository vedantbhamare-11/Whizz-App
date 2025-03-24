// redux/reducers/restaurantSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Dish {
  name: string;
  price: string;
  image: string;
}

interface Restaurant {
  name: string;
  dishes: Dish[];
  rating: number;
  deliveryTime: string;
  distance: string;
}

interface RestaurantState {
  restaurants: Restaurant[];
}

const initialState: RestaurantState = {
  restaurants: [
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
        name: "Veg Delight",
        dishes: [
          { name: "Ved Biriyani", price: "₹200/-", image: "/images/biryani2.jpeg" },
          { name: "Naan", price: "₹50/-", image: "/images/naan.jpeg" },
          { name: "Veg Tandoor Biryani", price: "₹280/-", image: "/images/biryani2.jpeg" },
        ],
        rating: 4.5,
        deliveryTime: "32 mins",
        distance: "2 km",
      },
      {
        name: "Tandoor Nation",
        dishes: [
          { name: "Chicken Biriyani", price: "₹200/-", image: "/images/biryani2.jpeg" },
          { name: "Naan", price: "₹50/-", image: "/images/naan.jpeg" },
          { name: "Veg Biryani", price: "₹180/-", image: "/images/biryani2.jpeg" },
        ],
        rating: 3.8,
        deliveryTime: "32 mins",
        distance: "2 km",
      },
      {
        name: "Mexican Hot",
        dishes: [
          { name: "Chicken Biriyani", price: "₹200/-", image: "/images/biryani2.jpeg" },
          { name: "Naan", price: "₹50/-", image: "/images/naan.jpeg" },
          { name: "Veg Biryani", price: "₹180/-", image: "/images/biryani2.jpeg" },
        ],
        rating: 4.2,
        deliveryTime: "32 mins",
        distance: "2 km",
      },
    // Add more restaurants here...
  ],
};

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (state, action: PayloadAction<Restaurant[]>) => {
      state.restaurants = action.payload;
    },
  },
});

export const { setRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;
