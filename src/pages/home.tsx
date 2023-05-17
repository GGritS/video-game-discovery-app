import { FC } from "react";
import { SortSelector } from "../components/sort-selector";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid } from "../components/game-grid";
import { GameHeading } from "../components/game-heading";
import { GenreList } from "../components/genere-list";
import { PlatformSelector } from "../components/platform-selector";

export const Home: FC = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`, //1024px
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box pl={2}>
          <GameHeading />
          <Flex mb={5} columnGap={5}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
