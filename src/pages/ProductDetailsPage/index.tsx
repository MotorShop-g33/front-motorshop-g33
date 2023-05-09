import { CommentsList } from "../../components/commentsList";
import { PhotosList } from "../../components/photosList";
import { Button_medium_text } from "../../styles/buttons";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AddComments,
  Comments,
  CommentsProduct,
  DescriptionProduct,
  InfoProduct,
  InfoSection,
  Main,
  PrimarySection,
  ProductMainImage,
  ProductPhotos,
  ProductSection,
  SecondarySection,
  UserProfile,
} from "../../styles/productDetailsPage";
import { useContext, useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { IAnnouncements } from "../../interfaces/announcements";
import { api } from "../../services";
import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { createCommentSchema } from "../../validateSchemas/validateCommentSchema";
import { ICommentRequest } from "../../interfaces/comments";

export const ProductDetailsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const adId = queryParams.get("ad");
  const { createCommnet, token, user } = useContext(UserContext);
  const [commentsMock, setCommentsMock] = useState<string>();

  const godComments = [
    "Gostei muito!",
    "incrível!",
    "Recomendarei para meus amigos!",
  ];

  const { productAd, setProductAd, getProductAd, comments, setComments } =
    useContext(UserContext);
  const url = `https://wa.me/${productAd?.user?.phone}`;
  const whatsappLink = <Link to={url}>Comprar</Link>;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ICommentRequest>({
    resolver: yupResolver(createCommentSchema),
  });

  const handleComment = (data: ICommentRequest) => {
    createCommnet(data, adId!);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getProductAd(adId!);
  }, [adId]);

  const productData = {
    img: productAd?.avatar,
    title: productAd?.model,
    description: productAd?.description,
    userImg: "",
    userid: productAd?.user?.id,
    username: productAd?.user?.name,
    usertext: productAd?.user?.description,
    milage: productAd?.milage,
    year: productAd?.year,
    price: productAd?.price,
    photos: productAd?.photos,
    phone: productAd?.user?.phone,
  };

  const photosAnnouncement = productData.photos;

  return (
    <Main>
      <PrimarySection>
        <ProductSection>
          <ProductMainImage>
            <img src={productData.img} alt={productData.title} />
          </ProductMainImage>
          <InfoProduct>
            <div>
              <h1>{productData.title}</h1>

              <div className="frame-info">
                <div className="frame-tags">
                  <div className="tags">{productData.year}</div>
                  <div className="tags">{productData.milage}</div>
                </div>
                <p>R$ {productData.price}</p>
              </div>
              <Button_medium_text className="purchase-button">
                {whatsappLink}
              </Button_medium_text>
            </div>
          </InfoProduct>
          <DescriptionProduct>
            <h1>Descrição</h1>
            <p>{productData.description}</p>
          </DescriptionProduct>
        </ProductSection>

        <InfoSection>
          <ProductPhotos>
            <h1>Fotos</h1>
            {photosAnnouncement ? (
              <PhotosList photosList={photosAnnouncement} />
            ) : (
              ""
            )}
          </ProductPhotos>
          <UserProfile>
            <Avatar name={productData.username} size={"xl"} />
            <h1>{productData.username}</h1>
            <span>{productData.usertext}</span>
            <Link
              className="profileLink"
              to={`/profile?id=${productData.userid}`}
            >
              Ver anúncios
            </Link>
          </UserProfile>
        </InfoSection>
      </PrimarySection>

      <SecondarySection>
        <CommentsProduct>
          <Comments>
            <h1 className="comments-h1">Comentários</h1>
            <CommentsList comments={productAd?.comment} />
          </Comments>
          <AddComments>
            <Box>
              <Flex alignItems={"center"} gap={"8px"}>
                <Avatar name={user.name} size={"md"} />
                <Text>{user.name}</Text>
              </Flex>
              <Flex
                border={"1px solid #ccc"}
                borderRadius={"5px"}
                p={"1rem"}
                mt={"1rem"}
                mb={"1rem"}
                gap={"1rem"}
                display={{ base: "block", md: "flex" }}
              >
                <FormControl>
                  <Textarea
                    height={"150px"}
                    border={"none"}
                    resize="none"
                    fontSize={"1rem"}
                    defaultValue={commentsMock}
                    placeholder={
                      "Carro muito confortável, foi uma ótima experiência de compra..."
                    }
                    {...register("comment")}
                  />
                </FormControl>
                <Button
                  alignSelf={"flex-end"}
                  mt={"1rem"}
                  fontSize={"14px"}
                  fontWeight={500}
                  bg={"var(--random-13)"}
                  width={"108px"}
                  height={"38px"}
                  type="submit"
                  onClick={handleSubmit(handleComment)}
                  isDisabled={token == undefined ? true : false}
                  color={"var(--white-fixed)"}
                  _hover={{ color: "var(--gray-1)", bg: "var(--gray-4)" }}
                >
                  <Text>{!token ? "faça login" : "Comentar"}</Text>
                </Button>
              </Flex>
              {/* <Flex gap={"8px"}>
                {godComments?.map((comment) => (
                  <Button
                    borderRadius={"1rem"}
                    key={comment}
                    onClick={() => {
                      setComments(comment);
                    }}
                  >
                    <Text as={"span"} fontSize={"14px"} fontWeight={500}>
                      {comment}
                    </Text>
                  </Button>
                ))}
              </Flex> */}
            </Box>
          </AddComments>
        </CommentsProduct>
      </SecondarySection>
    </Main>
  );
};
