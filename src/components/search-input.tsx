import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./../index.css";
import { useNavigate } from "react-router-dom";

type SearchInputProps = {
  onSearch: (searchText: string) => void;
};

export const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const [text, setText] = useState<string>("");
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(text);
    navigate("/");
  };
  return (
    <form className="w-full" onSubmit={handleSubmit} style={{ width: "100%" }}>
      <InputGroup>
        <InputLeftElement>
          <BsSearch />
        </InputLeftElement>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          borderRadius={20}
          placeholder="Search games..."
        />
      </InputGroup>
    </form>
  );
};
