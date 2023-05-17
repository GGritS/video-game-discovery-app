import { Button, Text } from "@chakra-ui/react";
import { FC, useState } from "react";

type ExpandableTextProps = {
  children: string;
};

export const ExpandableText: FC<ExpandableTextProps> = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  const LIMIT = 300;

  if (!children) null;

  if (children.length <= LIMIT) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, LIMIT) + "...";

  return (
    <div>
      {summary}
      <Button
        size="xs"
        ml={2}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </div>
  );
};
