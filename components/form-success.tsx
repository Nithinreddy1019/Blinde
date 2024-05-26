import {CheckCircledIcon} from "@radix-ui/react-icons";


interface FormSuccessProps {
    message?: string
};

export const FormSuccess = ({
    message
}: FormSuccessProps) => {

    if(!message) return null;

    return (
        <div 
            className="flex items-center gap-x-2 rounded-lg p-3 px-4 bg-emerald-500/15 text-sm text-emerald-500"
        >
            <CheckCircledIcon className="w-4 h-4"/>
            <p>{message}</p>
        </div>
    )
};