import Link from "next/link";
import { Button } from "../ui/button";


interface BackButtonProps {
    label: string,
    linkLabel: string,
    href: string
};


export const BackButton = ({
    label,
    linkLabel,
    href
}: BackButtonProps) => {
    return (
        <div
            className="flex items-center"
        >
            <p className="text-sm">
                {label}
            </p>
            <Button variant="link" className="p-1">
                <Link 
                    className="text-sm"
                    href={href}
                >
                    {linkLabel}
                </Link>
            </Button>
        </div>
    )
};