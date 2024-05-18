"use client";
import { Poppins } from "next/font/google";
import React, { ReactNode } from "react";
import { Header } from "../components/header/header";

const poppins = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"]
});

interface IBaseLayoutProps {
    children: ReactNode;
}

export const BaseLayout: React.FC<IBaseLayoutProps> = ({ children }) => (
    <body className={`z-20 min-w-full min-h-screen overflow-x-hidden pb-20 h-auto iphone:pb-20 ${poppins.className}`}>
        <div>
            <Header />
            {children}
        </div>
    </body>
);
