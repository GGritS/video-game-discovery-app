import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

export const ColorModuleSwitch: FC = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">
        {colorMode === "dark" ? "Dark" : "Light"} mode
      </Text>
    </HStack>
  );
};
