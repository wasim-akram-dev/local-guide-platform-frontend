/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Avatar from "../../../assets/images/avatar.jpeg";

export default function ProfileHeader({ user }: { user: any }) {
  return (
    <div className="flex items-center gap-6 p-6 rounded-xl border shadow-sm">
      <Image
        src={user?.profilePic || Avatar}
        className="rounded-full border object-cover"
        alt="profile"
        height={96}
        width={96}
      />

      <div>
        <h1 className="text-3xl font-bold">{user?.name}</h1>
        <p className="text-gray-600">{user?.email}</p>
        <span className="px-3 py-1 mt-2 inline-block text-sm rounded-full bg-blue-100 text-blue-600 font-medium">
          {user?.role}
        </span>
      </div>
    </div>
  );
}
