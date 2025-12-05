export default function ProfileAbout({
  bio,
  role,
}: {
  bio: string;
  role: string;
}) {
  return (
    <section className="p-6 rounded-xl border shadow-sm">
      <h2 className="text-xl font-semibold mb-2">About</h2>
      <p className="text-gray-700">{bio || "No bio added yet."}</p>
      <p className="text-sm text-gray-500 mt-2">Role: {role}</p>
    </section>
  );
}
