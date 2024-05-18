import { Button } from "@chakra-ui/react";
import React from "react";

interface ISubmitButtonProps {
    label: string;
    loading?: boolean;
}

export const SubmitButton: React.FC<ISubmitButtonProps> = ({ label, loading }) => (
    <Button
        type="submit"
        width="full"
        bgColor={loading ? "green.700" : "green.400"}
        color={loading ? "black" : "gray.200"}
        _hover={{
            bgColor: "green.700",
            color: "black"
        }}
        _disabled={{
            bgColor: "green.200",
            color: "gray.400"
        }}
        cursor={loading ? "wait" : "pointer"}
        isTruncated
        transition="colors 0.5s"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        fontWeight={["normal", "semibold", "semibold"]}
        disabled={loading}
    >
        {label}
    </Button>
);
