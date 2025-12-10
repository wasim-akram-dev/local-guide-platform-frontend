/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createListing,
  updateListing,
} from "@/services/guide/listingManagement";
import { IListing } from "@/types/listing.interface";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

interface IListingFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  listing?: IListing;
}

const CATEGORIES = [
  "Adventure",
  "City Tour",
  "Culture",
  "Historical",
  "Nature",
  "Others",
] as const;

const ListingFormDialog = ({
  open,
  onClose,
  onSuccess,
  listing,
}: IListingFormDialogProps) => {
  // const isEdit = !!listing;

  const [category, setCategory] = useState<string>(listing?.category ?? "");
  const [images, setImages] = useState<string[]>(listing?.images || []);

  // const [state, formAction, pending] = useActionState(
  //   isEdit ? updateListing.bind(null, listing?.id!) : createListing,
  //   null
  // );

  //   const [state, formAction, pending] = useActionState(
  //   async (...args) => {
  //     if (isEdit && listing?.id) {
  //       return updateListing(listing.id, ...args);
  //     }
  //     return createListing(...args);
  //   },
  //   null
  // );

  const isEdit = !!listing;

  const [state, formAction, pending] = useActionState(
    async (prevState: any, formData: FormData) => {
      if (isEdit && listing?.id) {
        return updateListing(listing.id, prevState, formData);
      }
      return createListing(prevState, formData);
    },
    null
  );

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      onSuccess();
      onClose();
    } else if (state && !state.success) {
      toast.error(state.message);
    }
  }, [state, onClose, onSuccess]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] flex flex-col p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle>
            {isEdit ? "Edit Listing" : "Create Listing"}
          </DialogTitle>
        </DialogHeader>

        <form action={formAction} className="flex flex-col flex-1 min-h-0">
          <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">
            {/* Title */}
            <Field>
              <FieldLabel htmlFor="title">Title</FieldLabel>
              <Input
                id="title"
                name="title"
                placeholder="Tour title"
                defaultValue={listing?.title}
              />
              <InputFieldError state={state} field="title" />
            </Field>

            {/* Description */}
            <Field>
              <FieldLabel htmlFor="description">Description</FieldLabel>
              <Input
                id="description"
                name="description"
                placeholder="Tour description"
                defaultValue={listing?.description}
              />
              <InputFieldError state={state} field="description" />
            </Field>

            {/* Itinerary */}
            <Field>
              <FieldLabel htmlFor="itinerary">Itinerary</FieldLabel>
              <Input
                id="itinerary"
                name="itinerary"
                placeholder="Tour itinerary"
                defaultValue={listing?.itinerary}
              />
              <InputFieldError state={state} field="itinerary" />
            </Field>

            {/* City */}
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input
                id="city"
                name="city"
                placeholder="Enter city name"
                defaultValue={listing?.city}
              />
              <InputFieldError state={state} field="city" />
            </Field>

            {/* Category */}
            <Field>
              <FieldLabel>Category</FieldLabel>
              <Input type="hidden" name="category" value={category} />

              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <InputFieldError state={state} field="category" />
            </Field>

            {/* Fees */}
            <Field>
              <FieldLabel htmlFor="tourFee">Tour Fee</FieldLabel>
              <Input
                id="tourFee"
                name="tourFee"
                placeholder="2000"
                type="number"
                defaultValue={listing?.tourFee}
              />
              <InputFieldError state={state} field="tourFee" />
            </Field>

            {/* Duration */}
            <Field>
              <FieldLabel htmlFor="duration">Duration (days/hours)</FieldLabel>
              <Input
                id="duration"
                name="duration"
                type="number"
                placeholder="1"
                defaultValue={listing?.duration}
              />
              <InputFieldError state={state} field="duration" />
            </Field>

            {/* Max Group */}
            <Field>
              <FieldLabel htmlFor="maxGroupSize">Max Group Size</FieldLabel>
              <Input
                id="maxGroupSize"
                name="maxGroupSize"
                type="number"
                placeholder="10"
                defaultValue={listing?.maxGroupSize}
              />
              <InputFieldError state={state} field="maxGroupSize" />
            </Field>

            {/* Meeting Point */}
            <Field>
              <FieldLabel htmlFor="meetingPoint">Meeting Point</FieldLabel>
              <Input
                id="meetingPoint"
                name="meetingPoint"
                type="string"
                placeholder="Meeting Point Name"
                defaultValue={listing?.meetingPoint}
              />
              <InputFieldError state={state} field="meetingPoint" />
            </Field>

            {/* Images URL Array */}
            <Field>
              <FieldLabel>Image URLs</FieldLabel>
              <Input
                placeholder="Comma separated URLs"
                defaultValue={images.join(", ")}
                onChange={(e) =>
                  setImages(e.target.value.split(",").map((i) => i.trim()))
                }
              />
              <input
                type="hidden"
                name="images"
                value={JSON.stringify(images)}
              />
              <InputFieldError state={state} field="images" />
            </Field>
          </div>

          <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
            <Button
              variant="outline"
              type="button"
              onClick={onClose}
              disabled={pending}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={pending}>
              {pending ? "Saving..." : isEdit ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ListingFormDialog;
