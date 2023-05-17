import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { FC, Fragment } from "react";
import { useGames } from "../hooks/useGames";
import { GameCard } from "./game-card";
import { GameCardContainer } from "./game-card-container";
import { GameCardSkeleton } from "./game-card-skeleton";
import InfiniteScroll from "react-infinite-scroll-component";
import { useGameQueryStore } from "../store";

export const GameGrid: FC = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const { error, data, isLoading, fetchNextPage, hasNextPage } =
    useGames(gameQuery);

  if (error) return <Text>{error.message}</Text>;

  const fetchGameCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={fetchGameCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={6}
          padding="10px"
        >
          {isLoading
            ? [1, 2, 3, 4, 5, 6].map((skeleton) => (
                <GameCardContainer key={skeleton}>
                  <GameCardSkeleton />
                </GameCardContainer>
              ))
            : data?.pages.map((page, index) => (
                <Fragment key={index}>
                  {page.results.map((game) => (
                    <GameCardContainer key={game.id}>
                      <GameCard game={game} />
                    </GameCardContainer>
                  ))}
                </Fragment>
              ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};
