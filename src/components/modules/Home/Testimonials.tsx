const testimonials = [
  {
    name: "Aisha Khan",
    review:
      "My guide showed me hidden food spots in Dhaka. Amazing experience!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "John David",
    review: "Locana made my Sylhet trip unforgettable. Highly recommended!",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">What Travelers Say</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <img
                src={t.img}
                className="w-20 h-20 rounded-full mx-auto"
                alt={t.name}
              />

              <p className="text-gray-700 mt-4 italic">"{t.review}"</p>
              <p className="font-semibold mt-3">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
