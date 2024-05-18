import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { MessageError } from "../messageError/messageError";

interface IDateInputProps {
    errors: FieldErrors;
    label: string;
    name: string;
    register: UseFormRegister<any>;
}

export const DateInput: React.FC<IDateInputProps> = ({ errors, label, name, register }) => (
    <FormControl marginTop="15px" alignItems="flex-start">
        <FormLabel fontWeight={["light", "normal", "semibold"]} color="gray.200">
            {label}
        </FormLabel>
        <Input
            type="date"
            border="none"
            outline="none"
            bgColor="gray.900"
            focusBorderColor="gray.600"
            color="gray.200"
            css={{
                "::-webkit-datetime-edit": {
                    color: "gray.200"
                },
                "::-webkit-calendar-picker-indicator": {
                    filter: "invert(1)"
                }
            }}
            {...register(name)}
        />
        <MessageError errors={errors} name={name} />
    </FormControl>
);
