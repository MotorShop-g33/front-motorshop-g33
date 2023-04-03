import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  setCount: (data: number) => void;
  count: number;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();

  const [count, setCount] = useState(0);

  return (
    <UserContext.Provider value={{ count, setCount }}>
      {children}
    </UserContext.Provider>
  );
};
