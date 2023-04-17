export interface IAnnouncements {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  milage: number;
  color: string;
  fipe: "decimal";
  price: "decimal";
  description: string;
  avatar: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: string;
}

export interface IListAnnouncements {
  data: IAnnouncements[];
}
