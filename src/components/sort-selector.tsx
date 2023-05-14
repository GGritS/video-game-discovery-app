import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FC } from "react";
import { BsChevronDown } from "react-icons/bs";

const SORT_ORDERS = [
  { value: "", label: "Relevance" },
  { value: "-added", label: "Date added" },
  { value: "name", label: "Name" },
  { value: "-released", label: "Release date" },
  { value: "-metacritic", label: "Popularity" },
  { value: "-rating", label: "Average rating" },
];

type SortSelectorProps = {
  handleSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
};

export const SortSelector: FC<SortSelectorProps> = ({
  handleSelectSortOrder,
  sortOrder,
}) => {
  const currentSortOrder = SORT_ORDERS.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Ordered by: {currentSortOrder?.label || "Relevants"}
      </MenuButton>
      <MenuList>
        {SORT_ORDERS.map((order) => (
          <MenuItem
            onClick={() => handleSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
