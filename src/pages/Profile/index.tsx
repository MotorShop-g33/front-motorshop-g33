import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { useLocation } from "react-router-dom";
import { MainSection, Banner, Content } from "../../styles/profile";
import { ProfileAds, ProfileCard } from "../../components/profileAds";
import { Avatar, UnorderedList, useMediaQuery } from "@chakra-ui/react";
import { api } from "../../services";
import G33 from "../../assets/icon_g33.png";
import { CreateAnnouncementModal } from "../../components/createAnnouncementModal";

export const Profile = () => {
  const [isLargerThan750] = useMediaQuery("(min-width: 750px)");
  const { token, navigate, user } = useContext(UserContext);

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

    if (profileId) {
      getProductAds(profileId);
    }
  }, []);

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
              {userProfile.id == user.id ? <CreateAnnouncementModal /> : ""}
            </div>
          </Banner>

          <Content>
            {isLargerThan750 ? (
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
                        milage={product.milage}
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
                        milage={product.milage}
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
                        milage={product.milage}
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
                        milage={product.milage}
                        user={userProfile}
                      ></ProfileCard>
                    ))}
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
