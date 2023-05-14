import { Box } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type GameCardContainerProps = {
  children: ReactNode;
};

export const GameCardContainer: FC<GameCardContainerProps> = ({ children }) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};
