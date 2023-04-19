import { createContext, useEffect, useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { api } from "../services";
import {
  IAnnouncements,
  IListAnnouncements,
} from "../interfaces/announcements";
import { ILoginUser } from "../interfaces/login";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import { IUser, IUserRequest } from "../interfaces/user";

export interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  setCount: (data: number) => void;
  count: number;
  token: string | null;
  navigate: NavigateFunction;
  productsList: IAnnouncements[];
  setFilterValue: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  filterValue: string | number | undefined;
  loginUser: (data: ILoginUser) => void;
  registerUser: (data: IUserRequest, onOpen: () => void) => void;
  user: IUser;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = localStorage.getItem("@tokenG33:token");
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<IUser>({} as IUser);

  const [productsList, setProductsList] = useState<IAnnouncements[]>([]);
  const [filterValue, setFilterValue] = useState<string | number>();

  const annoucements = async (): Promise<void> => {
    try {
      const { data } = await api.get("announcement");

      setProductsList(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (data: ILoginUser): Promise<void> => {
    try {
      const response = await api.post("/login", data);
      const { loginUser } = response.data;
      localStorage.setItem("@tokenG33:token", response.data.token);
      navigate("/");
    } catch (error: any) {
      console.log(error.response.data);
      toast({
        title: "error loging",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="red.400">
            {`Senha ou email incorreto`}
          </Box>
        ),
      });
    }
  };

  const getUserLogin = async (): Promise<void> => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.get("users/profile");
      setUser(response.data);
    } catch (error) {}
  };

  const registerUser = async (
    data: IUserRequest,
    onOpen: () => void
  ): Promise<void> => {
    try {
      await api.post("/users", data);

      onOpen();
    } catch (error: any) {
      const toastmsg = error.response.data.message;
      toast({
        title: "error loging",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="red.400">
            {`${toastmsg}`}
          </Box>
        ),
      });
    }
  };

  useEffect(() => {
    if (pathname.includes("/")) {
      getUserLogin();
      annoucements();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        count,
        setCount,
        token,
        navigate,
        productsList,
        setFilterValue,
        filterValue,
        loginUser,
        registerUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
