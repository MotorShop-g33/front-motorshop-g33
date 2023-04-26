import { Tag } from "@chakra-ui/react";

export const GoodBuyTag = () => {

    return (
        <Tag
          position="absolute"
          top={0}
          right={0}
          bg="green.400"
          color="white"
          fontSize="sm"
          fontWeight="bold"
          px={2}
          py={3}
          rounded={2}
          zIndex={1}
        >
          $
        </Tag>
    );
}