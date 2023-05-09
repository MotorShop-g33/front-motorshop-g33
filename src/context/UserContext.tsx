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
  editComment: (id: string, data: ICommentRequest) => void;
  requestPasswordRecovery: (data: { email: string }) => void;
  executePasswordRecovery: (data: { password: string }, token: string) => void;
  render: boolean;
  deleteComments: (data: string) => void;
  productAd: IAnnouncements;
  setProductAd: (data: IAnnouncements) => void;
  getProductAd: (id: string) => void;
  comments: string[];
  setComments: (data: string[]) => void;
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
  const [announc, setAnnounc] = useState<IAnnouncementsEdit>(
    {} as IAnnouncementsEdit
  );
  const [productsList, setProductsList] = useState<IAnnouncements[]>([]);
  const [filterValue, setFilterValue] = useState<string | number | undefined>(
    undefined
  );
  const [render, setRender] = useState<boolean>(false);

  const [filterPrice, setFilterPrice] = useState<IAnnouncements[]>([]);
  const [filterproduct, setFilterProduct] = useState<IAnnouncements[]>(
    [] || undefined
  );
  const [productAd, setProductAd] = useState<IAnnouncements>(
    {} as IAnnouncements
  );
  const [comments, setComments] = useState<string[]>([]);

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
    } catch (error: any) {
      console.log(error.response.data);
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

  const newAd = async (data: any) => {
    setRender(true);
    try {
      const formData = new FormData();
      formData.append("avatar", data.avatar[0]);
      formData.append("brand", data.brand);
      formData.append("color", data.color);
      formData.append("model", data.model);
      formData.append("fuel", data.fuel);
      formData.append("milage", data.milage.toString());
      formData.append("fipe", data.fipe.toString());
      formData.append("price", data.price.toString());
      formData.append("description", data.description);

      formData.append("year", data.year);
      let allPhotos: File[] = [];
      if (data.photos) {
        allPhotos = allPhotos.concat(data.photos[0]);
      }

      if (data.photos2) {
        allPhotos = allPhotos.concat(data.photos2[0]);
      }

      if (data.photos3) {
        allPhotos = allPhotos.concat(data.photos3[0]);
      }

      if (data.photos4) {
        allPhotos = allPhotos.concat(data.photos4[0]);
      }

      if (data.photos5) {
        allPhotos = allPhotos.concat(data.photos5[0]);
      }

      for (let i = 0; i < allPhotos.length; i++) {
        formData.append("photos", allPhotos[i]);
      }

      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post("announcement", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error: any) {
      console.log(error.response.data);
    } finally {
      setRender(false);
    }
  };

  const editAd = async (data: IAnnouncementsEdit): Promise<void> => {
    try {
      await api.patch(`/announcement/${data.id}`, data);
      location.reload();
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const deleteAnnounc = async (id: string) => {
    try {
      await api.delete(`/announcement/${id}`);
      location.reload();
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

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
      const response = await api.post(`/comment/${id}`, data);
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
      setComments([...comments, response.data]);
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

  const editComment = async (id: string, data: ICommentRequest) => {
    try {
      const response = await api.patch(`/comment/${id}`, data);
      toast({
        title: "success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="gray.400">
            {`Comentario editado com sucesso`}
          </Box>
        ),
      });

      const newListComments = comments?.filter(
        (coment: any) => coment.id !== id
      );

      console.log(newListComments);

      setComments([...newListComments, response.data]);

      // location.reload();
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

  const deleteComments = async (idComments: string) => {
    try {
      await api.delete(`/comment/${idComments}`);
      setComments([...comments]);
      const newListComments = comments?.filter(
        (coment: any) => coment.id !== idComments
      );

      setComments(newListComments);

      toast({
        title: "success",
        position: "top-right",
        isClosable: true,
        render: () => (
          <Box color="white" p={3} bg="gray.400">
            {`Comentário deletado com sucesso`}
          </Box>
        ),
      });
      // location.reload();
    } catch (error: any) {
      console.log(error.response.data);
    }
  };

  const getProductAd = async (adId: string | null): Promise<void> => {
    try {
      const response = await api.get("announcement/" + adId);
      setProductAd(response.data);
      setComments(response.data.comment);
    } catch (error) {}
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
        editComment,
        render,
        deleteComments,
        productAd,
        setProductAd,
        getProductAd,
        comments,
        setComments,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
