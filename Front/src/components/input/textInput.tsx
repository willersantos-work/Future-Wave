import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { MessageError } from "../messageError/messageError";

interface ITextInputProps {
    errors: FieldErrors;
    label: string;
    name: string;
    placeholder?: string;
    register: UseFormRegister<any>;
}

export const TextInput: React.FC<ITextInputProps> = ({ errors, label, name, placeholder, register }) => (
    <FormControl marginTop="15px" alignItems="flex-start">
        <FormLabel fontWeight={["light", "normal", "semibold"]} color="gray.200">
            {label}
        </FormLabel>
        <Input
            type="text"
            border="none"
            outline="none"
            bgColor="gray.900"
            focusBorderColor="gray.600"
            _placeholder={{ color: "gray.500" }}
            color="gray.200"
            placeholder={placeholder}
            {...register(name)}
        />
        <MessageError errors={errors} name={name} />
    </FormControl>
);
