/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import defaultAvatar from "../../../assets/images/avatar.jpeg";

export default function GuideInfo({ guide }: { guide: any }) {
  return (
    <section className="p-5 rounded-xl border space-y-3 shadow-xs">
      <h3 className="font-semibold text-xl">Hosted by {guide?.name}</h3>
      <p className="text-gray-600">{guide?.bio}</p>

      <div className="flex items-center gap-3">
        <Image
          src={guide?.profilePic || defaultAvatar}
          alt="Guide"
          width={60}
          height={60}
          className="rounded-full object-cover"
        />
        <div>
          <p>
            <b>Languages:</b> {guide?.languages?.join(", ")}
          </p>
          <p>
            <b>Expertise:</b> {guide?.expertise?.join(", ")}
          </p>
        </div>
      </div>

      <Link href={`/profile/${guide?.id}`} className="text-primary underline">
        View Guide Profile →
      </Link>
    </section>
  );
}
