import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { GameQuery } from "../types";

type GameHeadingProps = {
  gameQuery: GameQuery;
};

export const GameHeading: FC<GameHeadingProps> = ({ gameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};
