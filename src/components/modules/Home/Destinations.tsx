const destinations = [
  {
    name: "Dhaka",
    img: "https://images.unsplash.com/photo-1566753323558-f4e0952af115",
  },
  {
    name: "Chittagong",
    img: "https://images.unsplash.com/photo-1589647210422-a9fef7b9cc03",
  },
  {
    name: "Sylhet",
    img: "https://images.unsplash.com/photo-1583315464033-59f9a18e0680",
  },
  {
    name: "Cox's Bazar",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Rangamati",
    img: "https://images.unsplash.com/photo-1608897013039-887f89e5a653",
  },
];

const Destinations = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">
          Featured Destinations
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
          {destinations.map((city, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden h-48 shadow hover:shadow-lg transition cursor-pointer"
            >
              <img
                src={city.img}
                className="w-full h-full object-cover"
                alt={city.name}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                  {city.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
