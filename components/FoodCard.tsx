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
    <div className="card max-w-xs bg-[#9F2D00] shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{foodName}</h2>
      </div>
      <figure className="relative w-full aspect-square">
        <Image
          src={foodImage}
          alt={`Food_${foodNameIndex}`}
          loading="eager"
          className="object-cover"
          width={282}
          height={395}
        />
      </figure>
    </div>
  );
}
