/* eslint-disable @typescript-eslint/no-explicit-any */
export default function TourInfo({ tour }: { tour: any }) {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">{tour.title}</h1>

      <p className="text-gray-600 leading-relaxed">{tour.description}</p>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <p>
          <b>Duration:</b> {tour.duration} hours
        </p>
        <p>
          <b>City:</b> {tour.city}
        </p>
        <p>
          <b>Category:</b> {tour.category}
        </p>
        <p>
          <b>Max Group Size:</b> {tour.maxGroupSize} people
        </p>
        <p>
          <b>Meeting Point:</b> {tour.meetingPoint}
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-lg mb-2">Itinerary</h3>
        <p className="text-gray-600 whitespace-pre-line">{tour.itinerary}</p>
      </div>
    </section>
  );
}
