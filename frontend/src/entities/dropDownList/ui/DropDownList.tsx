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
                <div key={label} className="cursor-pointer" onClick={() => handleClick(label)}>
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
                <DropdownMenu.DropdownMenuContent>
                    {fill()}
                </DropdownMenu.DropdownMenuContent>
            </DropdownMenu.DropdownMenu>
        </div>
    )
}