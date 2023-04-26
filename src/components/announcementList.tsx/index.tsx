import {
  Card,
  Tag,
  CardBody,
  CardFooter,
  Avatar,
  Image,
  Box,
  Wrap,
  WrapItem,
  ListItem,
} from "@chakra-ui/react";
import {
  Heading_7_500,
  Heading_7_600,
  Paragraph_2_400,
  Paragraph_2_500,
} from "../../styles/typography";
import { Link } from "react-router-dom";
import { GoodBuyTag } from "../annoucementTag";

interface iAnnouncementCard {
  id: string;
  img: string;
  title: string;
  description: string;
  year: number | string;
  price: number | string;
  fipe: number | string;
  milage: number;
  user: any;
}

export const AnnouncementCard = ({
  id,
  img,
  title,
  description,
  year,
  price,
  fipe,
  milage,
  user,
}: iAnnouncementCard) => {
  function handleCarImage(): string {
    if (img.includes("http")) {
      return img;
    } else {
      return "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png";
    }
  }

  function tagGoodBuy(fipe: number, price: number): Boolean {
    const verifyFipe = fipe * 0.05;
    const verifyPrice = fipe - verifyFipe;
    if (price < verifyPrice) {
      return true;
    } else {
      return false;
    }
  }

  function handlePrice(): string {
    const stringfiedPrice = price.toString();
    const integerPart = parseInt(
      stringfiedPrice.slice(0, stringfiedPrice.length - 3)
    );
    const decimalPart = stringfiedPrice.slice(stringfiedPrice.length - 3);
    const thousandsFormatted = integerPart
      .toLocaleString("en-US", {
        useGrouping: true,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replaceAll(",", ".");
    return `R$${thousandsFormatted}${decimalPart}`;
  }

  return (
    <ListItem className="Ola" as={Link} to={`/product?ad=${id}`}>
      <Card w={312} h={360} boxShadow={"none"}>
        <CardBody padding={"0"}>
          <Box
            bg={"var(--gray-7)"}
            h={152}
            display={"flex"}
            justifyContent={"center"}
            transition={".3s linear"}
            position={"relative"}
            _hover={{ transform: "scale(1.04)" }}
          >
            {tagGoodBuy(Number(fipe), Number(price)) ? <GoodBuyTag /> : ""}
            <Image src={handleCarImage()} h={152}></Image>
          </Box>
          <Box margin={"16px 0px"}>
            <Heading_7_600>{title}</Heading_7_600>
          </Box>
          <Box h={42} overflow={"hidden"}>
            <Paragraph_2_400>{description}</Paragraph_2_400>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={"2"}
            margin={"16px 0px"}
          >
            <Avatar name={user.name} size={"sm"} src={"placeholder"}></Avatar>
            <Paragraph_2_500>{user.name}</Paragraph_2_500>
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
            <Heading_7_500>{handlePrice()}</Heading_7_500>
          </Box>
        </CardFooter>
      </Card>
    </ListItem>
  );
};
