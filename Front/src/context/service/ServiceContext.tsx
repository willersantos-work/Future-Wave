"use client";
import { WorkerService } from "@/services/worker/worker.service";
import React, { ReactNode, createContext, useContext } from "react";
import { OmitUnusedArgs } from "./interfaces/OmitUnusedArgs";

interface IServiceContext {
    workerService: Omit<typeof WorkerService, OmitUnusedArgs>;
}

export const ServiceContext = createContext<IServiceContext | null>(null);

export const ServiceProvider: React.FC<{ children: ReactNode }> = ({ children }) => (
    <ServiceContext.Provider
        value={{
            workerService: WorkerService
        }}
    >
        {children}
    </ServiceContext.Provider>
);

export const useService = () => {
    const context = useContext(ServiceContext);

    if (!context) {
        throw new Error("useService must be used within a ServiceProvider");
    }

    return context;
};
