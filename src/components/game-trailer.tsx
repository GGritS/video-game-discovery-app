import { FC } from "react";
import { useTrailers } from "../hooks/useTrailers";

type GameTrailerProps = {
  gameId: number;
};

export const GameTrailer: FC<GameTrailerProps> = ({ gameId }) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};
