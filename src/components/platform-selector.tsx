import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatforms";
import { usePlatform } from "../hooks/usePlatform";
import { useGameQueryStore } from "../store";

export const PlatformSelector: FC = () => {
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(platformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => setPlatformId(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
