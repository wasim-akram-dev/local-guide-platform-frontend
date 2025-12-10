import Image from "next/image";

export default function TourGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Image
        src={images[0]}
        width={800}
        height={500}
        alt={title}
        className="rounded-xl object-cover"
      />

      <div className="grid grid-cols-2 gap-4">
        {images.slice(0, 4).map((img, i) => (
          <Image
            key={i}
            src={img}
            width={400}
            height={300}
            alt={title}
            className="rounded-xl object-cover"
          />
        ))}
      </div>
    </div>
  );
}
