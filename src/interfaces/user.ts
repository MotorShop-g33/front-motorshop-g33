import { IAnnouncements } from "./announcements";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  confiPassword?: string;
  cpf: string;
  phone: string;
  birthday: Date;
  description: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
  isStaff: boolean;
}

export interface IUser {
  announcement: IAnnouncements[];
  updatedAt: Date;
  createdAt: Date;
  isActive: boolean;
  isAdm: boolean;
  isStaff: boolean;
  complement: string;
  number: string;
  street: string;
  city: string;
  state: string;
  cep: string;
  description: string;
  birthday: Date;
  phone: string;
  cpf: string;
  email: string;
  name: string;
  id: string;
}

export interface IAdUser {
  id: string;
  name: string;
  description: string;
  phone: string;
}

export interface IUserInfoRequest {
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthday: Date;
  description: string;
}

export interface IUserAddressRequest {
  complement: string;
  number: string;
  street: string;
  city: string;
  state: string;
  cep: string;
}
