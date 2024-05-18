import { Button } from "@chakra-ui/react";
import React from "react";

interface IActionButtonProps {
    label: string;
    leftWithoutBorder?: boolean;
    onClick: () => void;
}

export const ActionButton: React.FC<IActionButtonProps> = ({ label, leftWithoutBorder, onClick }) => (
    <Button
        type="button"
        width="full"
        bgColor="gray.600"
        color="gray.200"
        _hover={{
            bgColor: "gray.700",
            color: "white"
        }}
        isTruncated
        transition="colors 0.5s"
        overflow="hidden"
        textOverflow="ellipsis"
        fontWeight={["normal", "semibold", "semibold"]}
        borderLeftRadius={leftWithoutBorder ? 0 : undefined}
        whiteSpace="nowrap"
        onClick={onClick}
    >
        {label}
    </Button>
);
