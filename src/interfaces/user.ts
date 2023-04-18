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
