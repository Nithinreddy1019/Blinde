"use client"

import React from "react";
import Image from "next/image";



import {
    Card,
    CardHeader,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Header } from "./header";

import logo from "@/public/logo.svg";
import { BackButton } from "./back-button";




interface cardWrapperProps {
    children: React.ReactNode,
    headerLabel: string,
    subHeaderLabel: string,
    backButtonLabel: string,
    backButtonLinkLabel: string,
    backButtonHref: string,
    showSocial?: boolean
};


export const CardWrapper = ({
    children,
    headerLabel,
    subHeaderLabel,
    backButtonLabel,
    backButtonLinkLabel,
    backButtonHref,
    showSocial
}: cardWrapperProps) => {
    return (
        <Card
            className="w-96 md:w-2/5 md:min-w-96 h-fit border"
        >
            <CardHeader>
                <div 
                    className="flex items-center"
                >
                    <p
                        className="text-lg font-semibold text-primary"
                    >Blinde</p>
                    <Image src={logo} height={48} width={40} alt="Logo" className=""/>

                </div>
                <Header 
                    label={headerLabel}
                    subLabel={subHeaderLabel}
                />
            </CardHeader>

            <CardContent>
                {children}
            </CardContent>

            <CardFooter>
                <BackButton 
                    label={backButtonLabel}
                    linkLabel={backButtonLinkLabel}
                    href={backButtonHref}
                />
            </CardFooter>


        </Card>
    )
};