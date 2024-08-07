"use client"

import { Button } from "@repo/ui/components/button";
import { ModeToggle } from "@repo/ui/components/mode-toggle";
import { cn } from "@repo/ui/lib/utils";
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSidebar } from "~/hooks/use-sidebar"

export const Navigation = () => {

    const sidebarAtom = useSidebar();
    const router = useRouter();

    const handleNavigation = (link: string, pageName: string) => {
        sidebarAtom.onClose();
        router.push(link);
    }


    return (
        // WIP:: Smoother animation
        <div
            className={cn("md:hidden hidden left-0 h-full w-screen z-50 bg-background transition-all translate-x-96 duration-2000 fixed top-14", sidebarAtom.isExpanded && "flex flex-col items-start gap-6 translate-x-0")}>
            <div className="flex items-center justify-between w-full px-4 py-2 relative">
                <Link href={"/home"} className="flex flex-col items-center pt-2">
                    <Image 
                        src={"/logo.svg"}
                        height={25}
                        width={25}
                        alt="Logo"
                        className="mr-1"
                    />
                    <p className="text-xs text-[#DC2626] font-bold">Blinde.</p>
                </Link>
                
                
            </div>

            <div className="flex flex-col items-start gap-y-4 px-4 flex-1">
                <Button 
                    variant="link" 
                    className="p-0 text-lg font-semibold"
                    onClick={() => handleNavigation("/home", "Home")}
                >
                    Home
                </Button>
                <Button 
                    variant="link" 
                    className="p-0 text-lg font-semibold"
                    onClick={() => handleNavigation("/workflows", "Workflows")}
                >
                    Workflows
                </Button>
                <Button 
                    variant="link" 
                    className="p-0 text-lg font-semibold"
                    onClick={() => handleNavigation("/settings", "Settings")}
                >
                    Settings
                </Button>
                <Button 
                    variant="link" 
                    className="p-0 text-lg font-semibold"
                    onClick={() => handleNavigation("/categories", "Categories")}
                >
                    Categories
                </Button>
                <Button 
                    variant="link" 
                    className="p-0 text-lg font-semibold"
                    onClick={() => handleNavigation("/logs", "Logs")}
                >
                    Logs
                </Button>
            </div>

            <div className="p-4">
                <ModeToggle />
            </div>
        </div>
    )
}