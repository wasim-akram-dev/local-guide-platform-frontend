import { getMe } from "@/services/profile/profileManagement";
import ProfileForm from "./ProfileForm";

// async function getMe() {
//   const res = await serverFetch.get("/auth/me", {
//     cache: "no-store",
//   });
//   return res.json();
// }

export default async function MyProfilePage() {
  const result = await getMe();

  console.log("from my-profile page", result);

  if (!result?.success) {
    return <div className="p-6">Failed to load profile</div>;
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-8">
      <h1 className="text-2xl font-semibold mb-6">My Profile</h1>

      <ProfileForm user={result.data} />
    </div>
  );
}
