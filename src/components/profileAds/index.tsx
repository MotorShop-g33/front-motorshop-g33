import {
  Card,
  CardHeader,
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
import { Link } from "react-router-dom";
import { ActiveTag, InactiveTag } from "../annoucementTag";
import { EditAnnouncModal } from "../editAnnouncModal";
import { useState } from "react";

interface IProfileCard {
  id: string;
  img: string;
  title: string;
  description: string;
  year: number | string;
  price: number | string;
  fipe: number | string;
  milage: number;
  isActive: boolean;
  user: any;
}

interface IProfileAds {
  id: string;
  img: string;
  title: string;
  description: string;
  year: number | string;
  price: number | string;
  fipe: number | string;
  milage: number;
  isActive: boolean;
}

export const ProfileAds = ({
  id,
  img,
  title,
  description,
  year,
  price,
  fipe,
  isActive,
  milage,
}: IProfileAds) => {
  function handleCarImage(): string {
    if (img.includes("http")) {
      return img;
    } else {
      return "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png";
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

  const [selectedAnnouncId, setSelectedAnnouncId] = useState(null);
  function handleAnnouncClick(announcId: any) {
    setSelectedAnnouncId(announcId);
  }

  return (
    <ListItem className="Ola">
      <Card
        w={312}
        h={450}
        boxShadow={"none"}
        onClick={() => handleAnnouncClick(id)}
      >
        <CardHeader padding={"16px"} h={300} as={Link} to={`/product?ad=${id}`}>
          {isActive ? <ActiveTag /> : <InactiveTag />}
          <Box
            bg={"var(--fixed-white)"}
            h={150}
            display={"flex"}
            justifyContent={"center"}
          >
            <Image src={handleCarImage()} h={150}></Image>
          </Box>
          <Box margin={"16px 0px"}>
            <Heading_7_600>{title}</Heading_7_600>
          </Box>
          <Box h={42} overflow={"hidden"}>
            <Paragraph_2_400>{description}</Paragraph_2_400>
          </Box>
        </CardHeader>
        <CardBody
          h={75}
          display={"flex"}
          justifyContent={"space-between"}
          padding={"16px"}
        >
          <Box display={"flex"} gap={"4"}>
            <Box bg={"var(--gray-7)"} padding={"4px 8px"}>
              <Paragraph_2_500 color="brand-1">{milage} KM</Paragraph_2_500>
            </Box>
            <Box bg={"var(--gray-7)"} padding={"4px 8px"}>
              <Paragraph_2_500 color="brand-1">{year}</Paragraph_2_500>
            </Box>
          </Box>
          <Box>
            <Heading_7_500>{handlePrice()}</Heading_7_500>
          </Box>
        </CardBody>
        <CardFooter
          h={100}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <EditAnnouncModal announcId={selectedAnnouncId} />
          <a href={`/product?ad=${id}`}>
            <button>Ver Detalhes</button>
          </a>
        </CardFooter>
      </Card>
    </ListItem>
  );
};

export const ProfileCard = ({
  id,
  img,
  title,
  description,
  year,
  price,
  fipe,
  milage,
  isActive,
  user,
}: IProfileCard) => {
  function handleCarImage(): string {
    if (img.includes("http")) {
      return img;
    } else {
      return "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png";
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
      <Card w={312} h={400} boxShadow={"none"}>
        <CardBody padding={"16px"} h={300}>
          {isActive ? <ActiveTag /> : <InactiveTag />}
          <Box
            bg={"var(--fixed-white)"}
            h={152}
            display={"flex"}
            justifyContent={"center"}
          >
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
          h={65}
          display={"flex"}
          justifyContent={"space-between"}
          padding={"16px"}
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
