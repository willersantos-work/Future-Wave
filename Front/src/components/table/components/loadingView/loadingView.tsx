import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

export const LoadingView: React.FC = () => (
    <Flex alignSelf="center" h="5rem" align="center" justify="center" width="full">
        <Spinner color="green.600" fontSize="2xl" />
    </Flex>
);
