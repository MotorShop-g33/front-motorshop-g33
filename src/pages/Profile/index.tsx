import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useLocation } from "react-router-dom";
import { MainSection, Banner, Content } from "../../styles/profile";
import { ProfileAds, ProfileCard } from "../../components/profileAds";
import {
  Avatar,
  Box,
  CardBody,
  ListItem,
  Text,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import { api } from "../../services";
import { CreateAnnouncementModal } from "../../components/createAnnouncementModal";

export const Profile = () => {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  const { token, navigate, user, render } = useContext(UserContext);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const profileId = queryParams.get("id");
  const [profileAds, setProfileAds] = useState(user.announcement);
  const [userProfile, setUserProfile] = useState(user);

  useEffect(() => {
    const getProductAds = async (profileId: string | null): Promise<void> => {
      try {
        const response = await api.get("users/" + profileId);
        setUserProfile(response.data);
        setProfileAds(response.data.announcement);
      } catch (error) {}
    };
    console.log("teste 111");
    if (profileId) {
      getProductAds(profileId);
    }
  }, [render]);

  if (!profileId) {
    if (!token) {
      navigate("/");
    }
    if (!user.isStaff) {
      navigate("/");
    }
  }
  return (
    <>
      {profileAds ? (
        <MainSection>
          <Banner>
            <div>
              <Avatar name={userProfile.name} size={"xl"}></Avatar>
              <h1>{userProfile.name}</h1>
              <span>{userProfile.description}</span>
              <br />
              {userProfile.id == user.id && <CreateAnnouncementModal />}
            </div>
          </Banner>

          <Content>
            {profileAds.length > 0 ? (
              isLargerThan750 ? (
                <UnorderedList
                  w={"90%"}
                  display={"flex"}
                  flexWrap={"wrap"}
                  justifyContent={"space-evenly"}
                  gap={"24px"}
                >
                  {userProfile.id == user.id
                    ? profileAds.map((product) => (
                        <ProfileAds
                          key={product.id}
                          id={product.id}
                          img={product.avatar}
                          title={product.model}
                          description={product.description}
                          year={product.year}
                          price={product.price}
                          fipe={product.fipe}
                          milage={product.milage}
                          isActive={product.isActive}
                        ></ProfileAds>
                      ))
                    : profileAds.map((product) => (
                        <ProfileCard
                          key={product.id}
                          id={product.id}
                          img={product.avatar}
                          title={product.model}
                          description={product.description}
                          year={product.year}
                          price={product.price}
                          fipe={product.fipe}
                          milage={product.milage}
                          isActive={product.isActive}
                          user={userProfile}
                        ></ProfileCard>
                      ))}
                </UnorderedList>
              ) : (
                <UnorderedList
                  w={"100%"}
                  display={"flex"}
                  flexWrap={"nowrap"}
                  overflowX={"scroll"}
                  gap={"24px"}
                  h={"465px"}
                >
                  {userProfile.id == user.id
                    ? profileAds.map((product) => (
                        <ProfileAds
                          key={product.id}
                          id={product.id}
                          img={product.avatar}
                          title={product.model}
                          description={product.description}
                          year={product.year}
                          price={product.price}
                          fipe={product.fipe}
                          milage={product.milage}
                          isActive={product.isActive}
                        ></ProfileAds>
                      ))
                    : profileAds.map((product) => (
                        <ProfileCard
                          key={product.id}
                          id={product.id}
                          img={product.avatar}
                          title={product.model}
                          description={product.description}
                          year={product.year}
                          price={product.price}
                          fipe={product.fipe}
                          milage={product.milage}
                          isActive={product.isActive}
                          user={userProfile}
                        ></ProfileCard>
                      ))}
                </UnorderedList>
              )
            ) : (
              <UnorderedList
                w={"100%"}
                display={"flex"}
                flexWrap={"nowrap"}
                overflowX={"scroll"}
                gap={"24px"}
                h={"465px"}
                justifyContent={"center"}
                textAlign={"center"}
              >
                <Box>
                  <h2>Olá {user.name}, você ainda nao tem nenhuma anúncios</h2>
                  <Text>
                    Crie seu primeiro anúncio aqui e nao perca mais tempo!
                  </Text>
                  {userProfile.id == user.id && <CreateAnnouncementModal />}
                </Box>
              </UnorderedList>
            )}
          </Content>
        </MainSection>
      ) : (
        ""
      )}
    </>
  );
};
