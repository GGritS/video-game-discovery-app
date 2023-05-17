import { HStack, Image } from "@chakra-ui/react";
import { FC } from "react";
import logo from "./../assets/logo.webp";
import { ColorModuleSwitch } from "./color-module-switch";
import { SearchInput } from "./search-input";
import { useGameQueryStore } from "../store";
import { Link } from "react-router-dom";

export const NavBar: FC = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput onSearch={(searchText) => setSearchText(searchText)} />
      <ColorModuleSwitch />
    </HStack>
  );
};
