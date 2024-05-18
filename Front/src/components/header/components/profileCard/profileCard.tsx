import { User } from "@/data/user/user";
import { DateUtils } from "@/utils/dateUtils";
import { Flex, Text } from "@chakra-ui/react";

export const ProfileCard: React.FC = () => {
    const { fullname, nickname } = User;

    return (
        <Flex alignItems="center" gap={4} w="auto" flexDirection="row">
            <Flex display={["none", "none", "flex"]} justify="between" gap={4} w="auto">
                <Text width="10rem" color="whitesmoke" isTruncated>
                    Olá, {fullname}
                </Text>
                <Text color="whitesmoke" width="fit-content">
                    {DateUtils.formatDate(DateUtils.now())}
                </Text>
            </Flex>
            <Flex
                justify="center"
                alignItems="center"
                bg="gray.300"
                borderRadius="full"
                aspectRatio={1}
                w="fit-content"
                p={2}
            >
                <Text fontSize="medium" color="blue.900" fontWeight="bold">
                    {nickname}
                </Text>
            </Flex>
        </Flex>
    );
};
