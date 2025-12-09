"use client";

import { DateCell } from "@/components/shared/cell/DateCell";
import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";
import { IListing } from "@/types/listing.interface";

export const listingsColumns: Column<IListing>[] = [
  {
    header: "Listing",
    accessor: (item) => (
      <UserInfoCell
        name={item.title}
        email={item.city}
        photo={item.images?.[0]}
      />
    ),
  },
  {
    header: "Category",
    accessor: (item) => <span className="capitalize">{item.category}</span>,
  },
  {
    header: "Fee",
    accessor: (item) => (
      <span className="font-semibold text-green-600">${item.tourFee}</span>
    ),
  },
  {
    header: "Duration",
    accessor: (item) => <span>{item.duration} Days</span>,
  },
  {
    header: "Group Size",
    accessor: (item) => <span>{item.maxGroupSize} People</span>,
  },
  {
    header: "Created",
    accessor: (item) => <DateCell date={item.createdAt} />,
  },
];
