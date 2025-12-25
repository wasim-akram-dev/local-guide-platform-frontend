/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// import { toast } from "sonner";

// interface ProfileFormProps {
//   user: any;
// }

// export default function ProfileForm({ user }: ProfileFormProps) {
//   const [loading, setLoading] = useState(false);
//   const [form, setForm] = useState({
//     name: user.name || "",
//     email: user.email || "",
//     phone: user.phone || "",
//     address: user.address || "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/${user.id}`,
//         {
//           method: "PATCH",
//           credentials: "include",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(form),
//         }
//       );

//       const result = await res.json();

//       if (!res.ok || !result.success) {
//         throw new Error(result.message || "Update failed");
//       }

//       toast.success("Profile updated successfully");
//     } catch (err: any) {
//       toast.error(err.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="rounded-xl border bg-white p-6 space-y-6"
//     >
//       {/* Basic Info */}
//       <div className="grid gap-6 md:grid-cols-2">
//         <Input
//           label="Full Name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//         />

//         <Input
//           label="Email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Extra Info */}
//       <div className="grid gap-6 md:grid-cols-2">
//         <Input
//           label="Phone"
//           name="phone"
//           value={form.phone}
//           onChange={handleChange}
//         />

//         <Input
//           label="Address"
//           name="address"
//           value={form.address}
//           onChange={handleChange}
//         />
//       </div>

//       {/* Role (Read Only) */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Role</label>
//         <input
//           value={user.role}
//           disabled
//           className="w-full rounded-md border bg-gray-100 px-3 py-2 text-sm"
//         />
//       </div>

//       {/* Meta */}
//       <div className="text-sm text-gray-500">
//         Joined: {new Date(user.createdAt).toLocaleDateString()}
//       </div>

//       {/* Actions */}
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           disabled={loading}
//           className="rounded-md bg-primary px-6 py-2 text-white hover:opacity-90 disabled:opacity-50"
//         >
//           {loading ? "Saving..." : "Save Changes"}
//         </button>
//       </div>
//     </form>
//   );
// }

// /* ---------------- Small Input Component ---------------- */

// function Input({
//   label,
//   ...props
// }: React.InputHTMLAttributes<HTMLInputElement> & {
//   label: string;
// }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-1">{label}</label>
//       <input
//         {...props}
//         className="w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//       />
//     </div>
//   );
// }

"use client";

import { updateProfile } from "@/services/profile/profileManagement";
import { useState } from "react";
import { toast } from "sonner";

export default function ProfileForm({ user }: { user: any }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    profilePic: user.profilePic || "",
    bio: user.bio || "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await updateProfile(user.id, form);
      console.log("from profile form", data);
      if (data.success) {
        toast.success("Profile updated successfully");
      }
    } catch (err: any) {
      toast.error(err.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Profile Picture */}
      <Input
        label="Profile Picture URL"
        name="profilePic"
        value={form.profilePic}
        onChange={handleChange}
      />

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium mb-1">Bio</label>
        <textarea
          name="bio"
          value={form.bio}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-md border px-3 py-2 text-sm"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Input
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <Input
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <button
        disabled={loading}
        className="bg-primary text-white px-6 py-2 rounded-md"
      >
        {loading ? "Saving..." : "Save Changes"}
      </button>
    </form>
  );
}

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input {...props} className="w-full border rounded px-3 py-2 text-sm" />
    </div>
  );
}
