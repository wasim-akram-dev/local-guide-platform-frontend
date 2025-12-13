import ProfileAbout from "@/components/modules/Profile/ProfileAbout";
import ProfileHeader from "@/components/modules/Profile/ProfileHeader";
import ProfileLanguagesAndSkills from "@/components/modules/Profile/ProfileLanguagesAndSkills";
import ProfileListings from "@/components/modules/Profile/ProfileListings";
import ProfileReviews from "@/components/modules/Profile/ProfileReviews";
import { getProfile } from "@/services/profile/profileManagement";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getProfile(id);
  console.log(user, "from profile page");

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <ProfileHeader user={user} />
      <ProfileAbout bio={user?.bio} role={user?.role} />
      <ProfileLanguagesAndSkills
        languages={user?.languages}
        expertise={user?.expertise}
        preferences={user?.preferences}
      />
      <ProfileListings listings={user?.listings} />
      <ProfileReviews
        reviewsGiven={user?.reviewsGiven}
        reviewsReceived={user?.reviewsReceived}
      />
    </div>
  );
}
