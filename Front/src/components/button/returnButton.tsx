import { ArrowBackIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export const ReturnButton: React.FC = () => {
    const { back } = useRouter();

    return (
        <IconButton
            variant="teal"
            color="whitesmoke"
            aria-label="Return"
            w="fit-content"
            p={4}
            fontSize="large"
            onClick={() => back()}
            icon={<ArrowBackIcon />}
        />
    );
};
