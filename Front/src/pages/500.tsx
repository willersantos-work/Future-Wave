"use client";
import { ActionButton } from "@/components/button/actionButton";
import { Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Custom500() {
    const { push } = useRouter();

    return (
        <Flex
            flexDir="column"
            gap={10}
            minHeight="100vh"
            width="full"
            align="center"
            justifyContent="center"
            backgroundColor="gray.900"
            pt="5rem"
            px={["1.5rem", "3rem", "5rem"]}
        >
            <Flex w="full" flexDir="column" alignItems="center" gap={2}>
                <Text color="green.500" fontSize="2xl" fontWeight="bold" w="fit-content" textAlign="center">
                    500
                </Text>
                <Text color="gray.600" fontSize="large" fontWeight="bold" w="fit-content" textAlign="center">
                    Página com problemas, contate o suporte
                </Text>
            </Flex>
            <Flex w={["100%", "50%", "30%"]}>
                <ActionButton label="Ir para home" onClick={() => push("/workers/dashboard")} />
            </Flex>
        </Flex>
    );
}
