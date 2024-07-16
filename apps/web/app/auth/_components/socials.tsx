"use client"


import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@repo/ui/components/button";




export const Socials = () => {
    return (
        <div className="flex items-center gap-x-2 w-full">
            <Button
                variant="ghost"
                size="sm"
                className="border-[#DC2626] border w-fit p-4 shadow-[0px_4px_24px_0px_#DC2626] hover:bg-transparent hover:scale-[102%] transition"
                onClick={() => {}}
                // WIP: add login
            >
                <FcGoogle className="w-4 h-4 hover:scale-[102%]"/>
            </Button>
            <Button
                variant="ghost"
                size="sm"
                className="border-[#DC2626] border w-fit p-4 shadow-[0px_4px_24px_0px_#DC2626] hover:bg-transparent hover:scale-[102%] transition"
                onClick={() => {}}
                // WIP: add login
            >
                <FaGithub className="w-4 h-4 hover:scale-[102%]"/>
            </Button>
        </div>
    )
}