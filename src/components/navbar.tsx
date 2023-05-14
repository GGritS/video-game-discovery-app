import { HStack, Image } from "@chakra-ui/react";
import { FC } from "react";
import logo from "./../assets/logo.webp";
import { ColorModuleSwitch } from "./color-module-switch";
import { SearchInput } from "./search-input";

type NavBarProps = {
  onSearch: (searchText: string) => void;
};

export const NavBar: FC<NavBarProps> = ({ onSearch }) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColorModuleSwitch />
    </HStack>
  );
};
