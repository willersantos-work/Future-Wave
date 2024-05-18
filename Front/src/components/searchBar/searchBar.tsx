import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, InputRightAddon } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ActionButton } from "../button/actionButton";

interface ISearchBarProps {
    onClean: () => void;
    onSearch: (query?: string) => void;
}

export const SearchBar: React.FC<ISearchBarProps> = ({ onClean, onSearch }) => {
    const [searchValue, setSearchValue] = useState<string>("");

    const handleSearch = () => {
        if (searchValue.trim() !== "") {
            onSearch(searchValue.trim());
        } else {
            onClean();
        }
    };

    useEffect(() => {
        if (searchValue.trim() === "" || searchValue === undefined || searchValue === null) onClean();
    }, [searchValue, onClean]);

    return (
        <InputGroup borderRadius="1rem" display="flex" gap={0}>
            <InputLeftElement pointerEvents="none" children={<Search2Icon color="whitesmoke" />} />
            <Input
                border="1px solid"
                borderColor="gray.300"
                textColor="whitesmoke"
                _placeholder={{ color: "gray.400" }}
                placeholder="Buscar..."
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleSearch();
                    }
                }}
            />
            <InputRightAddon p={0} border="none">
                <ActionButton label="buscar" leftWithoutBorder onClick={handleSearch} />
            </InputRightAddon>
        </InputGroup>
    );
};
