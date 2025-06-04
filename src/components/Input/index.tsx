
type InputProps = {
    placeholder?: string;
    disabled?: boolean;
    readOnly?: boolean;
    onChange?: (value: string) => void;
    value?: string;
    label?: string;
};

const Input = ({
    placeholder,
    disabled,
    readOnly,
    onChange,
    value,
    label
}: InputProps) => {
  return (
    <label>
        {label}
        <input
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={(event) => onChange?.(event.target.value)}
            value={value}
        />
    </label>
  )
}

export default Input