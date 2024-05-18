"use client";
import React, { ReactNode, createContext, useContext } from "react";
import { Slide, ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface INotificationContext {
    notify: (message: string, type?: "success" | "error" | "warn" | "info") => void;
}

export const NotificationContext = createContext<INotificationContext | null>(null);

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const notify = (message: string, type?: "success" | "error" | "warn" | "info") => {
        const notificationGenericProps: ToastOptions<object> = {
            position: "top-right",
            autoClose: 6000,
            closeOnClick: true,
            pauseOnFocusLoss: true,
            pauseOnHover: true,
            draggable: true,
            transition: Slide,
            closeButton: true,
            toastId: `${message}${type}`,
            role: "alert"
        };

        type ? toast[type](message, notificationGenericProps) : toast(message, notificationGenericProps);
    };

    return (
        <NotificationContext.Provider value={{ notify }}>
            {children}
            <ToastContainer limit={8} style={{ width: "22.5rem" }} />
        </NotificationContext.Provider>
    );
};

export const useNotification = (): INotificationContext => {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error("useNotification must be used within a NotificationProvider");
    }
    return context;
};
