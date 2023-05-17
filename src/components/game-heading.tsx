import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { usePlatform } from "../hooks/usePlatform";
import { useGenre } from "../hooks/useGenre";
import { useGameQueryStore } from "../store";

export const GameHeading: FC = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};
