
interface headerProps {
    label: string, 
    subLabel: string
}

export const Header = ({
    label,
    subLabel
}: headerProps) => {
    return (
        <div
            className="w-full flex flex-col items-start justify-center gap-y-2 py-4"
        >
            <h1 
                className="text-4xl font-semibold"
            >
                {label}
            </h1>
            <p
                className="text-sm"
            >
                {subLabel}
            </p>
        </div>
    )
}