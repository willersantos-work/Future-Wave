import React, { ReactNode } from "react";
import { BaseLayout } from "../layout/layout";
import { NotificationProvider } from "./notification/notificationContext";
import { ServiceProvider } from "./service/ServiceContext";
import { ChakraProvider } from "@chakra-ui/react";

interface IProvidersProps {
    children: ReactNode;
}

export const Providers: React.FC<IProvidersProps> = ({ children }) => (
    <ChakraProvider>
        <ServiceProvider>
            <NotificationProvider>
                <BaseLayout>{children}</BaseLayout>
            </NotificationProvider>
        </ServiceProvider>
    </ChakraProvider>
);
