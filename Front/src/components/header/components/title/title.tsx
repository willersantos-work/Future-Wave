import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const Title: React.FC = () => (
    <Flex width="max-content">
        <Text color="whitesmoke" fontSize={["medium", "large", "x-large"]} whiteSpace="nowrap">
            Future Wave - Funcionários
        </Text>
    </Flex>
);
