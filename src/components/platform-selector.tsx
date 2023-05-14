import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/usePlatform";
import { Platform } from "../types";

type PlatformSelectorProps = {
  handleSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
};

export const PlatformSelector: FC<PlatformSelectorProps> = ({
  handleSelectPlatform,
  selectedPlatform,
}) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            onClick={() => handleSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
