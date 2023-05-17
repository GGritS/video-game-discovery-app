import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/navbar";

export const Error: FC = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box p={5}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist"
            : "An unexpected error occurred"}
        </Text>
      </Box>
    </>
  );
};
