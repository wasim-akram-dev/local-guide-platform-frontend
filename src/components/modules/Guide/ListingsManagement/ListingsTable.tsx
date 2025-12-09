"use client";

import DeleteConfirmationDialog from "@/components/shared/DeleteConfirmationDialog";
import ManagementTable from "@/components/shared/ManagementTable";
import { deleteListing } from "@/services/guide/listingManagement";
import { IListing } from "@/types/listing.interface";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import ListingFormDialog from "./ListingFormDialog";
import { listingsColumns } from "./listingsColumns";
import ListingViewDetailDialog from "./ListingViewDetailDialog";

interface ListingsTableProps {
  listings: IListing[];
}

const ListingsTable = ({ listings }: ListingsTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();

  const [deletingListing, setDeletingListing] = useState<IListing | null>(null);
  const [viewingListing, setViewingListing] = useState<IListing | null>(null);
  const [editingListing, setEditingListing] = useState<IListing | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => startTransition(() => router.refresh());

  const confirmDelete = async () => {
    if (!deletingListing?.id) return;

    setIsDeleting(true);
    const result = await deleteListing(deletingListing.id);
    setIsDeleting(false);

    if (result.success) {
      toast.success("Listing deleted successfully");
      setDeletingListing(null);
      handleRefresh();
    } else toast.error(result.message || "Failed to delete");
  };

  return (
    <>
      <ManagementTable
        data={listings}
        columns={listingsColumns}
        onView={setViewingListing}
        onEdit={setEditingListing}
        onDelete={setDeletingListing}
        getRowKey={(l) => l.id ?? ""}
        emptyMessage="No listings available"
      />

      {/* Edit Form */}
      <ListingFormDialog
        open={!!editingListing}
        onClose={() => setEditingListing(null)}
        listing={editingListing ?? undefined}
        onSuccess={handleRefresh}
      />

      {/* View Details */}
      <ListingViewDetailDialog
        open={!!viewingListing}
        onClose={() => setViewingListing(null)}
        // listing={viewingListing ?? undefined}
        listing={viewingListing}
      />

      {/* Delete Confirmation */}
      <DeleteConfirmationDialog
        open={!!deletingListing}
        onOpenChange={(o) => !o && setDeletingListing(null)}
        onConfirm={confirmDelete}
        title="Delete Listing?"
        description={`Are you sure you want to delete "${deletingListing?.title}"?`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default ListingsTable;
