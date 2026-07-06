import FoodCard from "@/components/FoodCard";

const categories = [
  {
    id: "soup",
    title: "Leves",
    foods: [
      {
        name: "Francia hagyma leves",
        image: "/soup1.jpg",
      },
    ],
  },
  {
    id: "lunch",
    title: "Főétel",
    foods: [
      {
        name: "Zöldfűszeres camembert, olivával és dióval",
        image: "/lunch1.png",
      },
      {
        name: "Lazacfilé citrommal és vajjal",
        image: "/lunch2.jpg",
      },
      {
        name: "Roast beef héjában sült burgonyával és zöldségekkel",
        image: "/lunch3.jpg",
      },
    ],
  },
  {
    id: "dinner",
    title: "Éjféli menü",
    foods: [
      {
        name: "Bográcsgulyás",
        image: "/dinner1.jpg",
      },
    ],
  },
  {
    id: "dessert",
    title: "Desszert",
    foods: [
      {
        name: "Brownie",
        image: "/dessert1.jpg",
      },
    ],
  },
];

export default function FoodMenuCarousel() {
  return (
    <div className="carousel w-full rounded-box">
      {categories.map((category, index) => {
        const prev =
          categories[(index - 1 + categories.length) % categories.length].id;
        const next = categories[(index + 1) % categories.length].id;
        return (
          <div
            key={category.id}
            id={category.id}
            className="carousel-item relative w-full justify-center"
          >
            <div className="flex w-full flex-col items-center py-8">
              <h4 className="mb-6 text-xl font-bold text-orange-900">
                {category.title}
              </h4>

              <div className="flex justify-center p-4">
                <div
                  className={
                    category.id === "lunch"
                      ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                      : "flex flex-wrap justify-center gap-6"
                  }
                >
                  {category.foods.map((food) => (
                    <FoodCard
                      key={food.name}
                      foodName={food.name}
                      foodImage={food.image}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* LEFT / RIGHT ARROWS */}
            <div className="absolute left-5 right-5 top-[11%] flex -translate-y-1/2 transform justify-between">
              <a href={`#${prev}`} className="btn btn-circle bg-[#9F2D00] border-[#9F2D00] btn-sm opacity-70 hover:opacity-100">
                ❮
              </a>

              <a href={`#${next}`} className="btn btn-circle bg-[#9F2D00] border-[#9F2D00] btn-sm opacity-70 hover:opacity-100">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}