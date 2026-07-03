"use client";
import Image from "next/image";

export default function FoodCard({
  foodName,
  foodImage,
}: {
  foodName: string;
  foodImage: string;
  }) {
  const foodNameIndex = foodName.replace(/\s+/g, " ").toLowerCase();
  
  return (
    <div className="flex items-center card bg-[#c3b091] shadow-sm m-4">
      <div className="badge bg-[#9F2D00] border-[#9F2D00] rounded-md font-semibold my-2">
        <p className="font-bold text-lg text-white">
          {foodName}
        </p>
      </div>
      <Image
        src={foodImage}
        alt={`Food_${foodNameIndex}`}
        width={512}
        height={512}
        loading="eager"
      />
    </div>
  );
}