import { Flex } from "@chakra-ui/react";
import { ProfileCard } from "./components/profileCard/profileCard";
import { Title } from "./components/title/title";

export const Header: React.FC = () => (
    <Flex
        position="fixed"
        zIndex="10"
        top="0"
        gap={6}
        justify="space-between"
        paddingX={["2.5rem", "2.5rem", "6rem"]}
        paddingY={["0.3rem", "0.3rem", "0.5rem"]}
        flexDirection={["row-reverse", "row"]}
        boxShadow="2px 4px 4px rgba(34,47,68,0.40)"
        height="fit-content"
        width="full"
        align="center"
        backgroundColor="gray.600"
        visibility={["hidden", "visible", "visible"]}
    >
        <Title />
        <ProfileCard />
    </Flex>
);
