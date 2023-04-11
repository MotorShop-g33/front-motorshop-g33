import { createContext, useEffect, useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { api } from "../services";

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
  cover: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: string;
}

export interface IListAnnouncements {
  results: IListAnnouncements[];
}

export interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  setCount: (data: number) => void;
  count: number;
  token: string | null;
  navigate: NavigateFunction;
  productsList: IListAnnouncements[];
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = localStorage.getItem("@token: token");
  const [count, setCount] = useState(0);

  const [productsList, setProductsList] = useState<IListAnnouncements[]>([]);

  const annoucements = async (): Promise<void> => {
    try {
      const { data } = await api.get("announcement?page=1&limit=3");
      console.log(data.results);
      setProductsList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (pathname.includes("/")) {
      annoucements();
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ count, setCount, token, navigate, productsList }}
    >
      {children}
    </UserContext.Provider>
  );
};
