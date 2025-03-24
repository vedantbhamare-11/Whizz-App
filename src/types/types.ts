// types.ts (or in a similar file)
export interface Dish {
    name: string;
    price: string;
    image: string;
  }
  
  export interface Restaurant {
    name: string;
    dishes: Dish[];
    rating: number;
    deliveryTime: string;
    distance: string;
  }
  