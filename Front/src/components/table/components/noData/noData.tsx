import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const NoData: React.FC = () => (
    <Flex alignSelf="center" h="5rem" w="full" align="center" justify="center" bgColor="gray.600">
        <Text fontSize="small" fontWeight="thin" color="gray.200">
            Sem dados
        </Text>
    </Flex>
);
