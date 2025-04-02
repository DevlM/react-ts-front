import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, Children, FC, isValidElement, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    variant?: keyof typeof btnVariants
}

interface ButtonLinkProps extends ButtonProps {
    href: string
    content?: string
}

const btnPadding = cn('px-10 py-3');

const btnVariants = {
    default: cn('backdrop-blur-xs border-background hover:text-strilherezh-primary hover:border-strilherezh-primary'),
    secondary: cn('text-strilherezh-primary border-strilherezh-primary hover:bg-strilherezh-primary hover:text-background'),
    tertiary: cn('text-background bg-strilherezh-primary border-strilherezh-primary hover:bg-strilherezh-tertiary hover:text-background'),
}

const Button: FC<ButtonProps> & { Link: FC<ButtonLinkProps> } = (props) => {
    const hasLinkBtn = Children.toArray(props.children).some(
        (child) => isValidElement(child) && child.type === LinkForBtn
    );

    const variant = btnVariants[props.variant || 'default']

    return (
        <button className={cn(
            'border bg-transparent w-min min-w-[300px] max-xs:min-w-[200px] max-sm:w-full transition-colors duration-500 rounded-xs',
            variant,
            !hasLinkBtn && btnPadding,
            props.className
        )}>
            {props.children}
        </button>
    )
}

const LinkForBtn: FC<ButtonLinkProps> = (props) => {
    return (
        <Link href={props.href} className={cn('font-semibold whitespace-nowrap w-full h-full', btnPadding)}>{props.content || props.children}</Link>
    )
}

const ButtonLink: FC<ButtonLinkProps> = (props) => (
    <Button {...props} className={cn('flex', props.className)}>
        <LinkForBtn {...props} />
    </Button>
)

Button.Link = ButtonLink;

export default Button;
