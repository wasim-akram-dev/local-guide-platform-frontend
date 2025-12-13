"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  deleteListing,
  getListings,
  updateListing,
} from "@/services/admin/listinsgManagement";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type Listing = {
  id: string;
  title: string;
  city: string;
  category: string;
  tourFee: number;
  duration: number;
  active: boolean;
  guide: { id: string; name: string };
};

const CATEGORIES = [
  "Adventure",
  "City Tour",
  "Culture",
  "Historical",
  "Nature",
  "Others",
];

export default function AdminListingManagementPage() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  // Modal states
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [listingToDelete, setListingToDelete] = useState<Listing | null>(null);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [listingToEdit, setListingToEdit] = useState<Listing | null>(null);
  const [editData, setEditData] = useState<Partial<Listing>>({});

  const fetchListings = async () => {
    setLoading(true);
    try {
      const data = await getListings();
      console.log(data);
      setListings(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const handleDelete = async () => {
    if (!listingToDelete) return;
    try {
      const res = await deleteListing(listingToDelete.id);
      if (res) {
        setListings((prev) => prev.filter((l) => l.id !== listingToDelete.id));
        setIsDeleteOpen(false);
        toast.success("Listing Deleted successfully");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting listing");
    }
  };

  const handleEditSave = async () => {
    if (!listingToEdit) return;
    try {
      const res = await updateListing(listingToEdit.id, editData);
      console.log(res);
      if (res) {
        const updated = res;
        setListings((prev) =>
          prev.map((l) => (l.id === listingToEdit.id ? updated.data : l))
        );
        setIsEditOpen(false);
        toast.success("Update Listing Successfully");
      } else {
        alert("Failed to update listing");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating listing");
    }
  };

  const filteredListings = listings
    .filter((l) => categoryFilter === "ALL" || l.category === categoryFilter)
    .filter(
      (l) =>
        l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        l.guide.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const totalPages = Math.ceil(filteredListings.length / pageSize);
  const paginatedListings = filteredListings.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Listing Management</h1>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <Input
          placeholder="Search by title, city, guide"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <Select
          value={categoryFilter}
          onValueChange={(val) => {
            setCategoryFilter(val);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ALL">All</SelectItem>
            {CATEGORIES.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {loading ? (
        <p>Loading listings...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Title</th>
                <th className="p-2 text-left">City</th>
                <th className="p-2 text-left">Category</th>
                <th className="p-2 text-left">Guide</th>
                <th className="p-2 text-left">Fee</th>
                <th className="p-2 text-left">Duration</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedListings.map((l) => (
                <tr key={l.id} className="border-t">
                  <td className="p-2">{l?.title}</td>
                  <td className="p-2">{l?.city}</td>
                  <td className="p-2">{l?.category}</td>
                  <td className="p-2">{l?.guide?.name}</td>
                  <td className="p-2">৳{l?.tourFee}</td>
                  <td className="p-2">{l?.duration}</td>
                  <td className="p-2 flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        setListingToEdit(l);
                        setEditData(l);
                        setIsEditOpen(true);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => {
                        setListingToDelete(l);
                        setIsDeleteOpen(true);
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
              {paginatedListings.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-4 text-center text-gray-500">
                    No listings found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-4">
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          {[...Array(totalPages)].map((_, idx) => (
            <Button
              key={idx}
              variant={currentPage === idx + 1 ? "outline" : "default"}
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Button>
          ))}
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* Delete Modal */}
      <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Listing</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to delete <b>{listingToDelete?.title}</b>?
          </p>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsDeleteOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Modal */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Listing</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2 py-2">
            <Input
              placeholder="Title"
              value={editData.title || ""}
              onChange={(e) =>
                setEditData({ ...editData, title: e.target.value })
              }
            />
            <Input
              placeholder="City"
              value={editData.city || ""}
              onChange={(e) =>
                setEditData({ ...editData, city: e.target.value })
              }
            />
            <Input
              placeholder="Tour Fee"
              type="number"
              value={editData.tourFee || ""}
              onChange={(e) =>
                setEditData({ ...editData, tourFee: Number(e.target.value) })
              }
            />
            <Input
              placeholder="Duration"
              type="number"
              value={editData.duration || ""}
              onChange={(e) =>
                setEditData({ ...editData, duration: Number(e.target.value) })
              }
            />
            <Select
              value={editData.category || ""}
              onValueChange={(val) =>
                setEditData({ ...editData, category: val })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <DialogFooter className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setIsEditOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
