import { Genre } from "../types";
import { useData } from "./useData";

export const useGenres = () => useData<Genre>("/genres");
