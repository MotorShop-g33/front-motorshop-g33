import { createContext, useEffect, useState } from "react";
import { NavigateFunction, useLocation, useNavigate } from "react-router-dom";
import { api } from "../services";
import {
  IAnnouncements,
  IAnnouncementsEdit,
  IAnnouncementsRequest,
} from "../interfaces/announcements";
import { ILoginUser } from "../interfaces/login";
import { Box, useDisclosure, useToast } from "@chakra-ui/react";
import {
  IUser,
  IUserAddressRequest,
  IUserInfoRequest,
  IUserRequest,
} from "../interfaces/user";
import { ICommentRequest } from "../interfaces/comments";

export interface IUserContextProps {
  children: React.ReactNode;
}

interface IUserContext {
  SetCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  maxPage: number;
  token: string | null;
  navigate: NavigateFunction;
  productsList: IAnnouncements[];
  filterproduct: IAnnouncements[];
  setFilterProduct: React.Dispatch<React.SetStateAction<IAnnouncements[]>>;
  setFilterValue: React.Dispatch<
    React.SetStateAction<string | number | undefined>
  >;
  filterValue: string | number | undefined;
  loginUser: (data: ILoginUser) => void;
  registerUser: (data: IUserRequest, onOpen: () => void) => void;
  editUser: (data: IUserInfoRequest | IUserAddressRequest) => void;
  deleteUser: () => void;
  user: IUser;
  newAd: (data: IAnnouncementsRequest) => void;
  editAd: (data: IAnnouncementsEdit) => void;
  deleteAnnounc: (id: string) => void;
  announc: IAnnouncementsEdit;
  handlePriceMin: () => void;
  handlePriceMax: () => void;
  handleMinKm: () => void;
  handleMaxKm: () => void;
  createCommnet: (data: ICommentRequest, id: string) => void;
  requestPasswordRecovery: (data: { email: string }) => void;
  executePasswordRecovery: (data: { password: string }, token: string) => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const token = localStorage.getItem("@tokenG33:token");
  const [currentPage, SetCurrentPage] = useState<number>(0);
  const [maxPage, SetMaxPage] = useState<number>(1);
  const page_limit = 12;

  const [user, setUser] = useState<IUser>({} as IUser);
  const [announc, setAnnounc] = useState<IAnnouncementsEdit>({} as IAnnouncementsEdit);
  const [productsList, setProductsList] = useState<IAnnouncements[]>([]);
  const [filterValue, setFilterValue] = useState<string | number | undefined>(
    undefined
  );

  const [filterPrice, setFilterPrice] = useState<IAnnouncements[]>([]);
  const [filterproduct, setFilterProduct] = useState<IAnnouncements[]>(
    [] || undefined
  );

  const annoucements = async (): Promise<void> => {
    try {
      const { data } = await api.get(
        `announcement?page=${currentPage}&limit=${page_limit}`
      );
      if (data.next) {
        SetMaxPage(data.next.page);
      }
      // const { data } = await api.get("announcement");
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

  const editUser = async (
    data: IUserInfoRequest | IUserAddressRequest
  ): Promise<void> => {
    try {
      await api.patch(`/users`, data);
      getUserLogin();
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const deleteUser = async () => {
    try {
      await api.delete(`/users`);
      localStorage.removeItem("@tokenG33:token");
      navigate("/");
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const requestPasswordRecovery = async (data: {
    email: string;
  }): Promise<void> => {
    try {
      await api.post("/users/resetPassword", data);
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

  const executePasswordRecovery = async (
    data: { password: string },
    token: string
  ): Promise<void> => {
    try {
      await api.patch(`/users/resetPassword/${token}`, data);
      navigate("/login");
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

  const newAd = async (data: IAnnouncementsRequest) => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post("announcement", data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const editAd = async (data: IAnnouncementsEdit): Promise<void> => {
    try {
      await api.patch(`/announcement/${data.id}`, data);
      location.reload();
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  const deleteAnnounc = async (id: string) => {
    try {
      await api.delete(`/announcement/${id}`);
      location.reload();
    } catch (error: any) {
      console.log(error.response.data);
    }
  }

  const handlePriceMin = () => {
    const minPrice = filterproduct.sort((a: any, b: any) => a.price - b.price);
    setFilterPrice(minPrice);

    setFilterPrice([]);
  };

  const handlePriceMax = () => {
    const maxPrice = filterproduct.sort((a: any, b: any) => b.price - a.price);

    setFilterPrice(maxPrice);
  };
  const handleMinKm = () => {
    const minKm = filterproduct.sort(
      (a: IAnnouncements, b: IAnnouncements) => a.milage - b.milage
    );
    setFilterPrice(minKm);

    setFilterPrice([]);
  };
  const handleMaxKm = () => {
    const maxKm = filterproduct.sort(
      (a: IAnnouncements, b: IAnnouncements) => b.milage - a.milage
    );
    setFilterPrice(maxKm);
  };

  const createCommnet = async (data: ICommentRequest, id: string) => {
    try {
      await api.post(`/comment/${id}`, data);
      toast({
        title: "success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="gray.400">
            {`Comentario criado com sucesso`}
          </Box>
        ),
      });
      location.reload();
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
    if (filterValue == undefined) {
      setFilterProduct(productsList);
    } else {
      const arrayProduct = productsList.filter((announc: any) => {
        if (
          announc.brand == filterValue ||
          announc.model == filterValue ||
          announc.color == filterValue ||
          announc.fuel == filterValue ||
          announc.year == filterValue
        ) {
          return true;
        }
      });
      setFilterProduct(arrayProduct);
    }
  }, [filterValue, productsList]);

  useEffect(() => {
    if (pathname.includes("/")) {
      getUserLogin();
      annoucements();
    }
  }, [token, currentPage]);

  return (
    <UserContext.Provider
      value={{
        currentPage,
        maxPage,
        SetCurrentPage,
        token,
        navigate,
        productsList,
        setFilterValue,
        filterValue,
        loginUser,
        registerUser,
        user,
        newAd,
        editAd,
        deleteAnnounc,
        announc,
        handlePriceMin,
        handlePriceMax,
        handleMinKm,
        handleMaxKm,
        filterproduct,
        editUser,
        deleteUser,
        requestPasswordRecovery,
        executePasswordRecovery,
        setFilterProduct,
        createCommnet,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
