"use client"; // Mark this as a client component

import { useDispatch, useSelector } from "react-redux";
import { setImagePath } from "../../redux/reducers/whizzclusiveSlice"; // Import the action

const WhizzclusiveCard = () => {
  const dispatch = useDispatch();

  // Fetching the imagePath from Redux store
  const { imagePath } = useSelector((state: any) => state.whizzclusive);

  // You can dispatch an action to change the image path if needed
  const changeImage = (newImagePath: string) => {
    dispatch(setImagePath(newImagePath));
  };

  return (
    <div className="relative shadow-lg rounded-3xl w-full max-w-xs mx-auto overflow-hidden">
      {/* Image */}
      <img
        src={imagePath}
        alt="Whizzclusive"
        className="w-full object-cover"
      />

      {/* Button */}
      <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-green-600 py-2 px-6 rounded-lg border border-green-600 hover:bg-green-600 hover:text-white active:bg-green-700 active:text-white transition-all duration-300 z-10">
        Explore Menu
      </button>
    </div>
  );
};

export default WhizzclusiveCard;
