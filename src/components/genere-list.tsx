import { FC } from "react";
import { useGenres } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-url";
import { useGameQueryStore } from "../store";

export const GenreList: FC = () => {
  const { data, isLoading, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const gameQueryGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                borderEndRadius={8}
                objectFit="cover"
                boxSize="32px"
                borderRadius={10}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setGenreId(genre.id)}
                fontSize="lg"
                fontWeight={gameQueryGenreId === genre.id ? "bold" : "normal"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};
