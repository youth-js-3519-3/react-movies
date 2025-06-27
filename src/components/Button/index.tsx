import type { HTMLAttributes, PropsWithChildren } from "react";
import './index.scss'
import classNames from "classnames";

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'link';
    size?: 'sm' | 'md' | 'lg';
    width?: 'sm' | 'lg';
    disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>

const Button = ({
    variant = 'primary',
    size = 'md',
    width = 'lg',
    disabled,
    children,
    ...props
}: PropsWithChildren<ButtonProps>) => {
    const classes = classNames(
        'btn',
        variant,
        {
            [`width-${width}`]: width,
            [`size-${size}`]: size,
            disabled
        }
    )

    return (
        <button
            className={classes}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button