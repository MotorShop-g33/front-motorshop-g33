import {
  Card,
  CardBody,
  CardFooter,
  Avatar,
  Image,
  Box,
  ListItem,
} from "@chakra-ui/react";
import {
  Heading_7_500,
  Heading_7_600,
  Paragraph_2_400,
  Paragraph_2_500,
} from "../../styles/typography";

interface iAnnouncementCard {
  img: string;
  title: string;
  description: string;
  userImg: string;
  username: string;
  milage: string;
  year: number | string;
  price: number | string;
}

export const AnnouncementCard = ({
  img,
  title,
  description,
  userImg,
  username,
  milage,
  year,
  price,
}: iAnnouncementCard) => {
  return (
    <ListItem className="Ola">
      <Card w={312} h={360} boxShadow={"none"}>
        <CardBody padding={"0"}>
          <Box
            bg={"var(--gray-7)"}
            h={152}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src={img} h={152}></Image>
          </Box>
          <Box margin={"16px 0px"}>
            <Heading_7_600>{title}</Heading_7_600>
          </Box>
          <Box>
            <Paragraph_2_400>{description}</Paragraph_2_400>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            margin={"16px 0px"}
          >
            <Avatar name={username} size={"sm"} src={userImg}></Avatar>
            <Paragraph_2_500>{username}</Paragraph_2_500>
          </Box>
        </CardBody>
        <CardFooter
          display={"flex"}
          justifyContent={"space-between"}
          padding={"0px 0px 16px 0px"}
        >
          <Box display={"flex"} gap={"4"}>
            <Box bg={"var(--brand-4)"} padding={"4px 8px"}>
              <Paragraph_2_500 color="brand-1">{milage} KM</Paragraph_2_500>
            </Box>
            <Box bg={"var(--brand-4)"} padding={"4px 8px"}>
              <Paragraph_2_500 color="brand-1">{year}</Paragraph_2_500>
            </Box>
          </Box>
          <Box>
            <Heading_7_500>R${price}</Heading_7_500>
          </Box>
        </CardFooter>
      </Card>
    </ListItem>
  );
};
