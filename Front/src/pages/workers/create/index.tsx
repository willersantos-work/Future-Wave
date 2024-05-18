import { ReturnButton } from "@/components/button/returnButton";
import { SubmitButton } from "@/components/button/submitButton";
import { DateInput } from "@/components/input/dateInput";
import { TextInput } from "@/components/input/textInput";
import { useNotification } from "@/context/notification/notificationContext";
import { useService } from "@/context/service/ServiceContext";
import { ICreateWorker } from "@/interfaces/ICreateWorker";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
    fullname: yup.string().required("Nome é obrigatório"),
    hiringDate: yup.date().required("Data de admissão é obrigatória"),
    role: yup.string().required("Cargo é obrigatório"),
    department: yup.string().required("Departamento é obrigatório")
});

const CreateWorker: React.FC = () => {
    const { workerService } = useService();
    const { notify } = useNotification();
    const { push, back } = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ICreateWorker>({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: ICreateWorker) => {
        try {
            await workerService.create(data);
            notify(`Funcionário criado com sucesso`, "success");
            push("/workers/dashboard");
        } catch (error: any) {
            const listErrors = error?.response?.data?.errors;
            if (listErrors) {
                listErrors?.map((error: any) => {
                    notify(error.msg, "warn");
                });
            } else {
                notify("Erro ao criar funcionário", "error");
            }
        }
    };

    return (
        <Flex minHeight="100vh" width="full" align="center" justifyContent="center" backgroundColor="gray.900">
            <Box
                px={12}
                py={6}
                width="full"
                maxWidth="450px"
                textAlign="center"
                boxShadow="lg"
                background="gray.700"
                borderRadius="6px"
                mx={4}
            >
                <Heading mb={[0, 2, 4]}>
                    <HStack spacing={2} justify="center" align="center">
                        <Text
                            w="full"
                            color="gray.200"
                            fontSize={["large", "xl", "2xl"]}
                            fontWeight={["medium", "semibold", "bold"]}
                        >
                            Criação de funcionário
                        </Text>
                        <ReturnButton />
                    </HStack>
                </Heading>
                <Box>
                    <form action="" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                        <Flex flexDir={["column", "row", "row"]} justify="space-between" gap={[0, 4, 4]}>
                            <Flex width="100%">
                                <TextInput
                                    errors={errors}
                                    label="Nome"
                                    name="fullname"
                                    placeholder="Digite o nome"
                                    register={register}
                                />
                            </Flex>
                            <Flex width="100%">
                                <TextInput
                                    errors={errors}
                                    label="Cargo"
                                    name="role"
                                    placeholder="Digite o cargo"
                                    register={register}
                                />
                            </Flex>
                        </Flex>
                        <Flex width="100%">
                            <TextInput
                                errors={errors}
                                label="Departamento"
                                name="department"
                                placeholder="Digite o departamento"
                                register={register}
                            />
                        </Flex>
                        <Flex width="100%">
                            <DateInput errors={errors} label="Data de admissão" name="hiringDate" register={register} />
                        </Flex>
                        <Flex mt={6}>
                            <SubmitButton label="Salvar" loading={isSubmitting} />
                        </Flex>
                    </form>
                </Box>
            </Box>
        </Flex>
    );
};

export default CreateWorker;
