"use client";

import React from "react";

import Footer from "@/modules/shared/Footer";
import Header from "@/modules/shared/Header";

const CommonLayout = ({
    children,
}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default CommonLayout;
