"use client";

import InfoRow from "@/components/shared/InfoRow";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { getInitials } from "@/lib/formatters";
import { IListing } from "@/types/listing.interface";
import { Clock, FileText, Image as ImageIcon, Users } from "lucide-react";
import Image from "next/image";

interface IListingViewDialogProps {
  open: boolean;
  onClose: () => void;
  listing: IListing | null;
}

const ListingViewDetailDialog = ({
  open,
  onClose,
  listing,
}: IListingViewDialogProps) => {
  if (!listing) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-3xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>Listing Details</DialogTitle>
        </DialogHeader>

        <div className="px-6 pb-6 space-y-6">
          {/* Header */}
          <div className="flex items-center gap-4 bg-muted/50 p-5 rounded-lg">
            <Avatar className="h-20 w-20">
              <AvatarImage src={listing.images?.[0]} alt={listing.title} />
              <AvatarFallback>{getInitials(listing.title)}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h2 className="text-2xl font-bold">{listing.title}</h2>

              <div className="mt-2 flex gap-2 flex-wrap">
                {/* <Badge variant="outline">{listing.location}</Badge> */}
                {/* <Badge variant={listing.isDeleted ? "destructive" : "default"}>
                  {listing.isDeleted ? "Inactive" : "Active"}
                </Badge> */}
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div>
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <FileText /> Overview
            </h3>
            <p className="text-sm mt-2">
              {listing.description || "No Description"}
            </p>
          </div>

          <Separator />

          {/* Key Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-muted/50 p-4 rounded-lg">
            {/* <Info withIcon={<MapPin />}>
              <InfoRow label="Location" value={listing.location} />
            </Info> */}

            {/* <Info withIcon={<DollarSign />}>
              <InfoRow label="Price" value={`$${listing.price}`} />
            </Info> */}

            <Info withIcon={<Clock />}>
              <InfoRow label="Duration" value={`${listing.duration} hours`} />
            </Info>

            <Info withIcon={<Users />}>
              <InfoRow label="Max Group Size" value={listing.maxGroupSize} />
            </Info>
          </div>

          <Separator />

          {/* Gallery */}
          {listing.images?.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <ImageIcon /> Images
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                {listing.images.map((img, i) => (
                  <Image
                    key={i}
                    src={img}
                    className="w-full h-32 rounded-lg object-cover border"
                    alt={`Listing image ${i}`}
                    height={128}
                    width={100}
                  />
                ))}
              </div>
            </div>
          )}

          <Separator />

          {/* Meta Info */}
          <div className="grid sm:grid-cols-2 gap-4">
            {/* <Info withIcon={<User />}>
              <InfoRow label="Guide" value={listing?.guide?.name ?? "Unknown"} />
            </Info>

            <Info withIcon={<Calendar />}>
              <InfoRow label="Created At" value={formatDateTime(listing.createdAt)} />
            </Info>

            <Info withIcon={<Calendar />}>
              <InfoRow label="Updated At" value={formatDateTime(listing.updatedAt)} />
            </Info> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// helper wrapper for icon rows to reduce repetitive div markup
const Info = ({
  children,
  withIcon,
}: {
  children: React.ReactNode;
  withIcon?: React.ReactNode;
}) => (
  <div className="flex items-start gap-3">
    {withIcon && <span className="mt-1 text-muted-foreground">{withIcon}</span>}
    {children}
  </div>
);

export default ListingViewDetailDialog;
