import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Genre } from "../types";
import ms from "ms";

const apiClient = new APIClient<Genre>("/genres");

// export const useGenres = () => useData<Genre>("/genres");
export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    // initialData: {count: genres.length, results: genres}
  });
