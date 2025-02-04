interface SortingCheckboxprops {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export const SortingCheckbox: React.FC<SortingCheckboxprops> = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-2">
        <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="
        rounded-6
        w-[calc(var(--responsive-size)*2.4)]
        h-[calc(var(--responsive-size)*2.4)]"
        />
        <div>{label}</div>
    </label>
)