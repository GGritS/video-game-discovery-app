import { FC } from "react";
import { NavBar } from "../components/navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const Layout: FC = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};
