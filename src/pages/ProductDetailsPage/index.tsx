import { CommentsList } from "../../components/commentsList";
import { PhotosList } from "../../components/photosList";
import { Button_medium_text } from "../../styles/buttons";
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
import { useLocation } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { IAnnouncements } from "../../interfaces/announcements";
import { api } from "../../services";

export const ProductDetailsPage = () => {
  const token = localStorage.getItem("@tokenG33:token");
  const [productAd, setProductAd] = useState<IAnnouncements>();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const adId = queryParams.get('ad');

  useEffect(() => {
    const getProductAd = async (adId: string | null): Promise<void> => {
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.get("announcement/" + adId);
      setProductAd(response.data);
    } catch (error) {}
  };
  getProductAd(adId);
  }, []);
  
  const productData = {
    img: productAd?.avatar,
    title: productAd?.model,
    description: productAd?.description,
    userImg: "",
    username: productAd?.user.name,
    milage: productAd?.milage,
    year: productAd?.year,
    price: productAd?.price,
    photos: productAd?.photos
  };
  
  const photosAnnouncement = productData.photos;
  
  // --> DADOS MOCKADOS APENAS PARA VISUALIZAÇÃO DO DESIGN DOS CARDS (NECESSÁRIO DELEÇÃO FUTURA) <--
  const fakeComments = [
    {
      id: 1,
      userImg:
        "https://www.pngplay.com/wp-content/uploads/14/Princess-Fiona-PNG-Clipart-Background.png",
      username: "Fiona",
      description: "Burro de qualidade, tração nas quatro patas! POTEEENTE!",
      createdAt: "há 3 dias",
    },
    {
      id: 2,
      userImg:
        "https://www.seekpng.com/png/full/145-1453424_shrek-movie-dragon-james-charles-dragon-from-shrek.png",
      username: "Dragon",
      description: "Esse já é rodado, pau pra toda obra uiui",
      createdAt: "há 1 dia",
    },
    {
      id: 3,
      userImg:
        "https://www.pngplay.com/wp-content/uploads/12/Shrek-PNG-HD-Quality.png",
      username: "Shrek",
      description:
        "Esse é o meu preferido, já rodei muitos quilômetros com ele, pra qualquer lugar que eu ia.",
      createdAt: "há 8 dias",
    },
  ];

  

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
                Comprar
              </Button_medium_text>
            </div>
          </InfoProduct>
          <DescriptionProduct>
            <h1>Description</h1>
            <p>{productData.description}</p>
          </DescriptionProduct>
        </ProductSection>

        <InfoSection>
          <ProductPhotos>
            <h1>Fotos</h1>
            {photosAnnouncement ? <PhotosList photosList={photosAnnouncement} /> : ''}
          </ProductPhotos>
          <UserProfile>Profile</UserProfile>
        </InfoSection>
      </PrimarySection>

      <SecondarySection>
        <CommentsProduct>
          <Comments>
            <h1 className="comments-h1">Comments</h1>
            <CommentsList commentsList={fakeComments} />
          </Comments>
          <AddComments>Add Comments</AddComments>
        </CommentsProduct>
      </SecondarySection>
    </Main>
  );
};
