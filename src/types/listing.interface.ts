export interface IListing {
  id?: string;
  title: string;
  description: string;
  itinerary: string;
  tourFee: number;
  duration: number;
  meetingPoint: string;
  maxGroupSize: number;
  images: string[];
  city: string;
  category:
    | "Adventure"
    | "City Tour"
    | "Culture"
    | "Historical"
    | "Nature"
    | "Others";
  createdAt?: string;
  updatedAt?: string;
}

export type IListingUpdate = Partial<IListing>;
