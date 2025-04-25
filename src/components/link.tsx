import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface LinkProps extends PropsWithChildren<NextLinkProps> {
    variant: 'default' | 'navbar'
    className: string
}

const linkVariants: Record<LinkProps['variant'], string> = {
    default: "",
    navbar: ""
}

const transitionVariants: Record<LinkProps['variant'], string> = {
    default: "",
    navbar: "transition-all duration-300 ease-in-out opacity-100"
}

const Link: FC<Partial<LinkProps> & Required<{ href: string }>> = (props) => {
    const linkVariant = linkVariants[props.variant || 'default'];
    const transitionVariant = transitionVariants[props.variant || 'default'];
    return (
        <NextLink {...props} className={cn("relative group", linkVariant, props.className)}>
            {props.children}
            <span className={cn("absolute w-0 opacity-0 group-hover:w-full h-1 left-0 -bottom-[1px] border-b border-b-background z-5", transitionVariant)} />
        </NextLink>
    )
}


export default Link;