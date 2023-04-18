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
