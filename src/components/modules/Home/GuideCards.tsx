import { Star } from "lucide-react";

const guides = [
  {
    name: "Fahim Rahman",
    expertise: "Food & Culture Expert",
    rating: 4.9,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Nusrat Jahan",
    expertise: "Photography Guide",
    rating: 4.8,
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Sabbir Hossain",
    expertise: "Adventure Specialist",
    rating: 4.7,
    img: "https://randomuser.me/api/portraits/men/40.jpg",
  },
];

const GuideCards = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Top Rated Guides</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {guides.map((g, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <img
                src={g.img}
                className="w-24 h-24 rounded-full mx-auto object-cover"
                alt={g.name}
              />

              <h3 className="text-lg font-semibold mt-4">{g.name}</h3>
              <p className="text-gray-600">{g.expertise}</p>

              <div className="flex items-center justify-center gap-1 mt-2 text-yellow-500">
                <Star size={18} fill="gold" stroke="none" />
                <span>{g.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideCards;
