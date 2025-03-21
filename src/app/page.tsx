// app/page.tsx
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-semibold mb-4">Welcome to Whizz</h1>
      <Image
        src="/images/whizzlogo.svg" // Add your logo image here
        alt="WhizzApp Logo"
        width={200}
        height={200}
        className="mb-6"
      />
      <p className="text-xl mb-8">Hyper Local AI Delivery Service.</p>

      <div className="flex gap-4">
        <Link
          href="/select-restaurant"
          className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition"
        >
          Browse App
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
