import { ActionButton } from "@/components/button/actionButton";
import { SearchBar } from "@/components/searchBar/searchBar";
import { Table } from "@/components/table/table";
import { useNotification } from "@/context/notification/notificationContext";
import { useService } from "@/context/service/ServiceContext";
import { ColumnType } from "@/interfaces/ColumnType";
import { IListWorker } from "@/interfaces/IListWorker";
import { ArrayUtils } from "@/utils/arrayUtils";
import { TextUtils } from "@/utils/textUtils";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DashboardWorker: React.FC = () => {
    const { workerService } = useService();
    const { notify } = useNotification();
    const { push } = useRouter();

    const [workers, setWorkers] = useState<IListWorker[]>([]);
    const [searchedWorkers, setSearchedWorkers] = useState<IListWorker[]>([]);
    const [loading, setLoading] = useState<boolean>();
    const [sortKey, setSortKey] = useState<{
        key: keyof IListWorker;
        type: ColumnType;
        ascending: boolean;
    }>();

    const fetch = async () => {
        try {
            setLoading(true);
            const data = await workerService.getAll();
            setWorkers(data);
            notify("Funcionários carregados com sucesso", "success");
        } catch (error: any) {
            notify("Erro ao carregar funcionários", "error");
        } finally {
            setLoading(false);
        }
    };

    const deleteWorker = async (workerId: number) => {
        try {
            setLoading(true);
            await workerService.delete(workerId);
            await fetch();
            notify(`Funcionário ID ${workerId} removido com sucesso`, "success");
        } catch (error: any) {
            const listErrors = error?.response?.data?.errors;
            if (listErrors) {
                listErrors?.map((error: any) => {
                    notify(error.msg, "warn");
                });
            } else {
                notify("Erro ao remover funcionário", "error");
            }
        } finally {
            setLoading(false);
        }
    };

    const sort = (key: keyof IListWorker, type: ColumnType) => {
        const isAscending = !sortKey?.ascending;

        const sortedData = searchedWorkers.sort((a, b) => {
            const aVal = a?.[key as keyof IListWorker];
            const bVal = b?.[key as keyof IListWorker];
            const orderType = isAscending ? "ASC" : "DESC";

            switch (type) {
                case "number":
                    return ArrayUtils.orderNumber(aVal, bVal, orderType);
                case "string":
                    return ArrayUtils.orderString(aVal, bVal, orderType);
                default:
                    return ArrayUtils.orderString(aVal, bVal, orderType);
            }
        });

        setSearchedWorkers(sortedData);
        setSortKey({ key, ascending: isAscending, type });
    };

    const cleanSearch = () => setSearchedWorkers(workers);

    const searchData = (filterQuery?: string) => {
        const filterQueryIsEmpty = filterQuery === "" || filterQuery === undefined || filterQuery === null;

        if (!filterQueryIsEmpty) {
            const wordsForFilter = TextUtils.splitQuerySearch(filterQuery);
            const filteredItems = workers.filter((item) => {
                const itemValues = Object.values(item);

                return wordsForFilter.every((wordForFilter) =>
                    itemValues.some((itemValue) => {
                        const wordForFilterLowerCase = wordForFilter.toLowerCase();
                        const hasWordInSolicitation = itemValue
                            ?.toString()
                            .toLowerCase()
                            ?.includes(wordForFilterLowerCase);
                        return hasWordInSolicitation;
                    })
                );
            });

            setSearchedWorkers(filteredItems);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    useEffect(() => {
        setSearchedWorkers(workers);
        setSortKey({ key: "_id", ascending: false, type: "number" });
    }, [workers]);

    return (
        <Flex
            flexDir="column"
            gap={6}
            minHeight="100vh"
            width="full"
            align="center"
            justifyContent="flex-start"
            backgroundColor="gray.900"
            px={["1.5rem", "3rem", "5rem"]}
            pt="5rem"
        >
            <Flex h="fit-content" w="full" justify="end">
                <Flex w={["100%", "50%", "30%"]}>
                    <ActionButton label="Adicionar funcionário" onClick={() => push("/workers/create")} />
                </Flex>
            </Flex>
            <Flex h="fit-content" w="full" wrap="wrap" justify="space-between" alignItems="center" gap={4}>
                <Flex h="auto" justifyContent="center" alignItems="center">
                    <Text color="gray.200" fontSize="large" fontWeight="bold" w="fit-content" textAlign="start">
                        Listagem de funcionários
                    </Text>
                </Flex>
                <Flex w={["full", "full", "50%"]}>
                    <SearchBar onClean={cleanSearch} onSearch={searchData} />
                </Flex>
            </Flex>
            <Table
                columns={[
                    { name: "Id", key: "_id", type: "number", sort: true },
                    { name: "Nome", key: "fullname", type: "string", sort: true },
                    { name: "Cargo", key: "role", type: "string", sort: true },
                    { name: "Departamento", key: "department", type: "string", sort: true },
                    {
                        name: "Ações",
                        key: "actions",
                        type: "action",
                        render: (record: IListWorker) => (
                            <Flex gap={4}>
                                <Button
                                    width="fit-content"
                                    bgColor="transparent"
                                    color="gray.200"
                                    _hover={{
                                        color: "gray.400"
                                    }}
                                    onClick={() => push(`/workers/edit?workerId=${record._id}`)}
                                >
                                    Editar
                                </Button>
                                <Button
                                    width="fit-content"
                                    bgColor="transparent"
                                    color="red.500"
                                    _hover={{
                                        color: "red.700"
                                    }}
                                    onClick={() => deleteWorker(record._id)}
                                >
                                    Excluir
                                </Button>
                            </Flex>
                        ),
                        sort: false
                    }
                ]}
                data={searchedWorkers}
                loading={loading}
                sort={sort as any}
                sortKey={sortKey?.key}
            />
        </Flex>
    );
};

export default DashboardWorker;
