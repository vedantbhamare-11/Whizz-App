// components/select-restaurant/WhizzclusiveCard.tsx
const WhizzclusiveCard = () => {
    return (
      <div className="relative p-2 w-full max-w-xs mx-auto bg-white shadow-lgoverflow-hidden">
        {/* Image */}
        <img
          src="/images/whizzclusive.png"
          alt="Whizzclusive"
          className="w-full object-cover"
        />
  
        {/* Button */}
        <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-green-600 py-2 px-6 rounded-lg border border-green-600 hover:bg-green-600 hover:text-white transition-all duration-300">
          Explore Menu
        </button>
      </div>
    );
  };
  
  export default WhizzclusiveCard;
  