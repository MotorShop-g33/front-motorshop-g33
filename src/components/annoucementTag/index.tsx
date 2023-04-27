import { Tag } from "@chakra-ui/react";

export const GoodBuyTag = () => {

    return (
        <Tag
          position="absolute"
          top={0}
          right={0}
          bg="var(--random-7)"
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

export const ActiveTag = () => {

  return (
      <Tag
        position="absolute"
        top={2}
        left={2}
        bg="var(--brand-1)"
        color="white"
        fontSize="sm"
        fontWeight="500"
        px={3}
        py={2}
        rounded={2}
        zIndex={1}
      >
        Ativo
      </Tag>
  );
}

export const InactiveTag = () => {

  return (
      <Tag
        position="absolute"
        top={2}
        left={2}
        bg="var(--gray-3)"
        color="white"
        fontSize="sm"
        fontWeight="500"
        px={3}
        py={2}
        rounded={2}
        zIndex={1}
      >
        Inativo
      </Tag>
  );
}