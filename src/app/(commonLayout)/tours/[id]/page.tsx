import BookingWidget from "@/components/modules/Tours/BookingWidget";
import GuideInfo from "@/components/modules/Tours/GuideInfo";
import Reviews from "@/components/modules/Tours/Reviews";
import TourGallery from "@/components/modules/Tours/TourGallery";
import TourInfo from "@/components/modules/Tours/TourInfo";
import getUserRole from "@/lib/getUserRole";

async function getListing(id: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/listings/${id}`,
    {
      cache: "no-store",
    }
  );
  return res.json();
}

export default async function TourDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: tour } = await getListing(id);
  // console.log(tour, "tour");
  const userRole = await getUserRole();

  return (
    <div className="container mx-auto px-4 py-8 space-y-10 border bg-slate-50">
      <TourGallery images={tour?.images} title={tour?.title} />
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="md:col-span-2 space-y-6">
          <TourInfo tour={tour} />
          <GuideInfo guide={tour?.guide} />
          <Reviews reviews={tour?.reviews} />
        </div>

        {/* Right - Booking Widget */}
        <BookingWidget
          tourId={tour?.id}
          tourFee={tour?.tourFee}
          userRole={userRole}
        />
      </div>
    </div>
  );
}
