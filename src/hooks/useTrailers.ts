import { Trailer } from "../types";
import { APIClient } from "./../services/api-client";
import { useQuery } from "@tanstack/react-query";

export const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};
