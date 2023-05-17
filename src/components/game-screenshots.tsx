import { FC } from "react";
import { useScreenshots } from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

type GameScreenshotsProps = {
  gameId: number;
};

export const GameScreenshots: FC<GameScreenshotsProps> = ({ gameId }) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};
