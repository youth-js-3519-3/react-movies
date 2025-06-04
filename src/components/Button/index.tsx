import type { PropsWithChildren } from "react";
import './index.css'
import classNames from "classnames";

type ButtonProps = {
    primary?: boolean;
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
}

const Button = ({
    primary = true,
    size = 'md',
    disabled,
    children
}: PropsWithChildren<ButtonProps>) => {
    const classes = classNames(
        'btn',
        size,
        {
            primary: primary === true,
            secondary: primary !== true,
            disabled
        }
    )

    return (
        <button
            className={classes}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button