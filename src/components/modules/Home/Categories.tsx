import {
  Camera,
  Footprints,
  Landmark,
  Map,
  Trees,
  Utensils,
} from "lucide-react";

const categories = [
  { icon: <Utensils size={26} />, name: "Food & Street Food" },
  { icon: <Landmark size={26} />, name: "Culture & Heritage" },
  { icon: <Trees size={26} />, name: "Nature & Wildlife" },
  { icon: <Camera size={26} />, name: "Photography Tours" },
  { icon: <Map size={26} />, name: "Adventure Trips" },
  { icon: <Footprints size={26} />, name: "City Walks" },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Popular Categories</h2>
        <p className="text-gray-600 mt-2">Choose a tour category you love</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="border p-4 rounded-xl hover:bg-primary hover:text-white hover:border-primary transition cursor-pointer"
            >
              <div className="flex justify-center mb-2">{cat.icon}</div>
              <p className="font-semibold">{cat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
