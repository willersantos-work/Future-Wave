import { Text } from "@chakra-ui/react";
import React from "react";
import { FieldErrors } from "react-hook-form";

interface IMessageErrorProps {
    errors?: FieldErrors<any>;
    name: string;
}

export const MessageError: React.FC<IMessageErrorProps> = ({ errors, name }) => (
    <Text color="red.400">{errors?.[name]?.message?.toString()}</Text>
);
