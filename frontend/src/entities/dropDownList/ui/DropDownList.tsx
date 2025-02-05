import { DropdownMenu } from "radix-ui"

interface DropDownListProps {
    state: StateHandler<string>,
    title: string,
    labels: string[],
}

export const DropDownList: React.FC<DropDownListProps> = ({ title, labels, state }) => {
    const handleClick = (label: string) => {
        console.log(label)
        state.setState(label);
    }

    const fill = () => {
        return labels.map(label => {
            return (
                <div key={label} className="bg-white hover:bg-gray-200 cursor-pointer p-[var(--responsive-size)]" onClick={() => handleClick(label)}>
                    {label}
                </div>
            )
        })
    }

    return (
        <div>
            <DropdownMenu.DropdownMenu>
                <DropdownMenu.DropdownMenuTrigger>
                    {state.getState()}
                </DropdownMenu.DropdownMenuTrigger>
                <DropdownMenu.DropdownMenuContent className="border-2">
                    {fill()}
                </DropdownMenu.DropdownMenuContent>
            </DropdownMenu.DropdownMenu>
        </div>
    )
}