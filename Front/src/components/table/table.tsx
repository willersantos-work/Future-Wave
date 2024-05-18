import { ColumnType } from "@/interfaces/ColumnType";
import { NumberUtils } from "@/utils/numberUtils";
import { UpDownIcon } from "@chakra-ui/icons";
import { Table as ChakraTable, IconButton, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import { LoadingView } from "./components/loadingView/loadingView";
import { NoData } from "./components/noData/noData";

interface ITableProps {
    columns: IColumn[];
    data: any[];
    loading?: boolean;
    sort: (key: string, type: ColumnType) => void;
    sortKey?: string;
}

interface IColumn {
    key: keyof any | any;
    name: string;
    render?: (record: any) => React.ReactNode;
    sort: boolean;
    type: ColumnType;
}

export const Table: React.FC<ITableProps> = ({ columns, data, loading, sort, sortKey }) => (
    <TableContainer w="full" borderRadius={6}>
        <ChakraTable variant="simple" w="full">
            <Thead>
                <Tr bgColor="gray.800">
                    {columns.map((column) => (
                        <Th
                            w="fit-content"
                            justifyContent="justify-between"
                            alignItems="center"
                            gap={2}
                            color="gray.200"
                            fontSize="medium"
                            fontWeight="medium"
                        >
                            {column.name}
                            {column.sort && (
                                <IconButton
                                    variant="teal"
                                    color={sortKey === column.key ? "gray.600" : "whitesmoke"}
                                    aria-label="Sort"
                                    fontSize="10px"
                                    onClick={() => sort(column.key, column.type)}
                                    icon={<UpDownIcon />}
                                />
                            )}
                        </Th>
                    ))}
                </Tr>
            </Thead>
            {!loading && (
                <Tbody w="full">
                    {data.map((item, index) => (
                        <Tr
                            bgColor={NumberUtils.isMultiple(index, 2) ? "gray.600" : "green.600"}
                            _hover={{ bgColor: NumberUtils.isMultiple(index, 2) ? "gray.700" : "green.800" }}
                            transition="colors 0.5s"
                            cursor="pointer"
                        >
                            {columns.map((column) => (
                                <Td
                                    w="fit-content"
                                    alignItems="center"
                                    align="center"
                                    color="gray.200"
                                    fontSize="medium"
                                >
                                    {column?.render ? column.render(item) : item?.[column.key as any]}
                                </Td>
                            ))}
                        </Tr>
                    ))}
                </Tbody>
            )}
        </ChakraTable>

        {!loading && data.length === 0 && <NoData />}
        {loading && <LoadingView />}
    </TableContainer>
);
