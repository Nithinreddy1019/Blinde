import {ExclamationTriangleIcon} from "@radix-ui/react-icons";



interface FormerrorProps {
    message?: string
};


export const FormError = ({
    message
}: FormerrorProps) => {

    if(!message) return null;

    return (
        <div 
            className="flex items-center gap-x-2 rounded-lg bg-destructive/20 p-3 px-4 text-sm text-destructive"
        >
            <ExclamationTriangleIcon className="h-4 w-4"/>
            <p>{message}</p>
        </div>
    )
};