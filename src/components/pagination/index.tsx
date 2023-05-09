import { Box, Button, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export const Pagination = () => {
  const { currentPage, SetCurrentPage, maxPage } = useContext(UserContext);

  return (
    <Flex gap={"1rem"} p={"1rem 0"} alignItems={"center"}>
      <Button
        onClick={() => currentPage > 0 && SetCurrentPage(currentPage - 1)}
        bg={currentPage === 0 ? "none" : "var(--gray-5)"}
        color={currentPage === 0 ? "var(--gray-3)" : "var(--brand2)"}
      >
        voltar
      </Button>
      {`Page ${currentPage}`}
      <Button
        bg={
          currentPage == 0
            ? "var(--gray-5)"
            : currentPage == maxPage - 1
            ? "var(--gray-5)"
            : "none"
        }
        color={
          currentPage === 0
            ? "var(--brand2)"
            : currentPage == maxPage - 1
            ? "var(--brand2)"
            : "var(--gray-3)"
        }
        disabled={currentPage === maxPage}
        onClick={() =>
          currentPage < maxPage
            ? SetCurrentPage(currentPage + 1)
            : SetCurrentPage(currentPage)
        }
      >
        seguinte
      </Button>
    </Flex>
  );
};
