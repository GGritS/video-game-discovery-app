import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import { NavBar } from "./components/navbar";
import { GameGrid } from "./components/game-grid";
import { GenreList } from "./components/general-list";
import { useState } from "react";
import { GameQuery, Genre, Platform } from "./types";
import { PlatformSelector } from "./components/platform-selector";
import { SortSelector } from "./components/sort-selector";
import { GameHeading } from "./components/game-heading";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const onSearch = (searchText: string) => {
    setGameQuery({ ...gameQuery, searchText });
  };
  const handleSelectGenre = (genre: Genre) => {
    setGameQuery({ ...gameQuery, genre });
  };
  const handleSelectPlatform = (platform: Platform) => {
    setGameQuery({ ...gameQuery, platform });
  };
  const handleSelectSortOrder = (sortOrder: string) => {
    setGameQuery({ ...gameQuery, sortOrder });
  };

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024px
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar onSearch={onSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              handleSelectGenre={handleSelectGenre}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box pl={2}>
            <GameHeading gameQuery={gameQuery} />
            <Flex mb={5} columnGap={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                handleSelectPlatform={handleSelectPlatform}
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                handleSelectSortOrder={handleSelectSortOrder}
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
