import { ReturnButton } from "@/components/button/returnButton";
import { SubmitButton } from "@/components/button/submitButton";
import { DateInput } from "@/components/input/dateInput";
import { TextInput } from "@/components/input/textInput";
import { useNotification } from "@/context/notification/notificationContext";
import { useService } from "@/context/service/ServiceContext";
import { ICreateWorker } from "@/interfaces/ICreateWorker";
import { IWorker } from "@/interfaces/IWorker";
import { DateUtils } from "@/utils/dateUtils";
import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object({
    fullname: yup.string().required("Nome é obrigatório"),
    hiringDate: yup.date().required("Data de admissão é obrigatória"),
    role: yup.string().required("Cargo é obrigatório"),
    department: yup.string().required("Departamento é obrigatório")
});

const EditWorker: React.FC = () => {
    const { workerService } = useService();
    const { notify } = useNotification();
    const { push, query } = useRouter();
    const workerIdAsQuery = query.workerId as number | undefined;

    const [workerId, setWorkerId] = useState<number>();
    const [worker, setWorker] = useState<IWorker>();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<ICreateWorker>({
        values: useMemo(() => {
            if (worker) {
                const { _id, hiringDate, ...rest } = worker;
                const formattedHiring = DateUtils.formatDateForInputs(hiringDate) as any;
                return { ...rest, hiringDate: formattedHiring };
            }
        }, [worker]),
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data: ICreateWorker) => {
        try {
            await workerService.updateById(data, workerId as number);
            notify(`Funcionário atualizado com sucesso`, "success");
            push("/workers/dashboard");
        } catch (error: any) {
            const listErrors = error?.response?.data?.errors;
            if (listErrors) {
                listErrors?.map((error: any) => {
                    notify(error.msg, "warn");
                });
            } else {
                notify("Erro ao atualizar funcionário", "error");
            }
        }
    };

    const getWorker = async (workerId: number) => {
        try {
            const data = await workerService.getById(workerId);
            setWorker(data);
        } catch (error) {
            notify("Erro ao carregar funcionário", "error");
        }
    };

    useEffect(() => {
        if (workerId) {
            getWorker(workerId);
        }
    }, [workerId]);

    useEffect(() => {
        if (workerIdAsQuery) {
            setWorkerId(workerIdAsQuery);
        }
    }, [workerIdAsQuery]);

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
                            Edição de funcionário
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

export default EditWorker;
