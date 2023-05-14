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
import { Genre } from "../types";

type GenreListProps = {
  handleSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

export const GenreList: FC<GenreListProps> = ({
  handleSelectGenre,
  selectedGenre,
}) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
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
                onClick={() => handleSelectGenre(genre)}
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
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
