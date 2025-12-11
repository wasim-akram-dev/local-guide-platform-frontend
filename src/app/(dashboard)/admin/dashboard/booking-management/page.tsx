/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axios from "axios";
import { format } from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
// axios.defaults.withCredentials = true;

type User = {
  id: string;
  name: string;
  email: string;
  profilePic?: string;
};

type Listing = {
  id: string;
  title: string;
};

type Booking = {
  id: string;
  listing: Listing;
  tourist: User;
  guide: User;
  date: string;
  numberOfPeople: number;
  totalPrice: number;
  status: "PENDING" | "ACCEPTED" | "REJECTED" | "CANCELLED" | "COMPLETED";
};

const STATUS_OPTIONS = [
  "PENDING",
  "ACCEPTED",
  "REJECTED",
  "CANCELLED",
  "COMPLETED",
];

const AdminBookingsManagementPage = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // rows per page

  // const fetchBookings = async () => {
  //   setLoading(true);
  //   try {
  //     const params: any = { page, limit };
  //     if (search) params.search = search;
  //     if (statusFilter) params.status = statusFilter;

  //     const { data } = await axios.get(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings`,
  //       {
  //         params: params,
  //         withCredentials: true,
  //       }
  //     );
  //     setBookings(data.data);
  //   } catch (error: any) {
  //     console.error("Failed to fetch bookings:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    try {
      const params: any = { page, limit };
      if (search) params.search = search;
      if (statusFilter) params.status = statusFilter;

      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings`,
        {
          params: params,
          withCredentials: true,
        }
      );

      setBookings(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [page, limit, search, statusFilter]);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  // useEffect(() => {
  //   fetchBookings();
  // }, [page, search, statusFilter]);

  const updateStatus = async (
    bookingId: string,
    newStatus: Booking["status"]
  ) => {
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings/${bookingId}/status`,
        { status: newStatus },
        {
          withCredentials: true,
        }
      );

      if (res.status) {
        toast.success("Update Status Successfully");
        fetchBookings();
      } else {
        alert("Failed to update listing");
      }
    } catch (error: any) {
      console.error("Failed to update status:", error);
    }
  };

  const cancelBooking = async (bookingId: string) => {
    try {
      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/bookings/${bookingId}/cancel`,
        {},
        {
          withCredentials: true,
        }
      );
      if (res.status) {
        toast.success("Booking Cancelled Successfully");
        fetchBookings();
      } else {
        alert("Failed to delete listing");
      }
    } catch (error: any) {
      console.error("Failed to cancel booking:", error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Booking Management</h1>

      {/* Filters */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by listing, guide or tourist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">All Status</option>
          {STATUS_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">ID</th>
              <th className="px-4 py-2 border">Listing</th>
              <th className="px-4 py-2 border">Tourist</th>
              <th className="px-4 py-2 border">Guide</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">People</th>
              <th className="px-4 py-2 border">Total</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={9} className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : bookings.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-4">
                  No bookings found
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b.id}>
                  <td className="border px-2 py-1">{b.id.slice(0, 6)}...</td>
                  <td className="border px-2 py-1">{b.listing.title}</td>
                  <td className="border px-2 py-1">{b.tourist.name}</td>
                  <td className="border px-2 py-1">{b.guide.name}</td>
                  <td className="border px-2 py-1">
                    {format(new Date(b.date), "yyyy-MM-dd")}
                  </td>
                  <td className="border px-2 py-1">{b.numberOfPeople}</td>
                  <td className="border px-2 py-1">${b.totalPrice}</td>
                  <td className="border px-2 py-1">{b.status}</td>
                  <td className="border px-2 py-1 flex gap-2">
                    {b.status === "PENDING" && (
                      <>
                        <button
                          onClick={() => updateStatus(b.id, "ACCEPTED")}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => updateStatus(b.id, "REJECTED")}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    {b.status === "ACCEPTED" && (
                      <button
                        onClick={() => updateStatus(b.id, "COMPLETED")}
                        className="bg-blue-500 text-white px-2 py-1 rounded"
                      >
                        Complete
                      </button>
                    )}
                    {b.status !== "CANCELLED" && (
                      <button
                        onClick={() => cancelBooking(b.id)}
                        className="bg-gray-500 text-white px-2 py-1 rounded"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between mt-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-3 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminBookingsManagementPage;
