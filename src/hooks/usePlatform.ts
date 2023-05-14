import { Platform } from "../types";
import { useData } from "./useData";

export const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
