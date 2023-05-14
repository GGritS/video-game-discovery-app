import { FC } from "react";
import { useGames } from "../hooks/useGames";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { GameCard } from "./game-card";
import { GameCardSkeleton } from "./game-card-skeleton";
import { GameCardContainer } from "./game-card-container";
import { GameQuery } from "../types";

type GameGridProps = {
  gameQuery: GameQuery;
};

export const GameGrid: FC<GameGridProps> = ({ gameQuery }) => {
  const { error, data, isLoading } = useGames(gameQuery);

  if (!data)
    return <Heading ml={2}>Something wrong, try it again later.</Heading>;
  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading || !data.length
        ? [1, 2, 3, 4, 5, 6].map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))
        : data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};
