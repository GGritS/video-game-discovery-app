import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Platform } from "../types";
import ms from "ms";

// export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

export const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    // initialData: {count: platforms.length, results: platforms}
  });
