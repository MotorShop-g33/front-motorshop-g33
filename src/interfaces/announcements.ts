import { IAdUser } from "./user";

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
  user: IAdUser;
  photos: [];
  comment: [];
}

export interface IAnnouncementsRequest {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  milage: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  avatar: string;
  photos: string[];
}

export interface IListAnnouncements {
  data: IAnnouncements[];
}
export interface ITableFipe {
  brand: string;
  fuel: number;
  id: string;
  name: string;
  value: number;
  year: string;
}

export interface IAnnouncementsEdit {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  milage: number;
  color: string;
  fipe: number;
  price: number;
  description: string;
  avatar: string;
  photos: string[];
}
