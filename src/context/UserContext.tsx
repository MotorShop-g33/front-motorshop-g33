import { createContext, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  setCount: (data: number) => void;
  count: number;
  token: string | null;
  navigate: NavigateFunction;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@token: token");
  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={{ count, setCount, token, navigate }}>
      {children}
    </UserContext.Provider>
  );
};
