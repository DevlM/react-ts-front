"use client";
import useApp, { IAppVariant } from "@/hooks/use-app";
import { useIsMobile } from "@/hooks/use-mobile";
import useNavbar from "@/hooks/use-navbar";
import useSidebar from "@/hooks/use-sidebar";
import { ILink } from "@/lib/type";
import { cn } from "@/lib/utils";
import Link from "../link";

// Les petit points rond doivent être des carrées
const BarsListIcon = (props: { onClick: () => void; className?: string }) => {
    return (
        <svg onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className}>
            <path strokeLinecap="butt" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
    )
}

const subNavbarVariants: Record<IAppVariant, string> = {
    strillherezh: cn("bg-strilherezh-primary"),
    skornenn: "bg-skornenn-primary",
}

const subNavbarLinksVariants: Record<IAppVariant, ILink[]> = {
    strillherezh: [
        { name: "Tous nos produits", href: "/" },
        { name: "Notre histoire", href: "/" },
    ],
    skornenn: [
        { name: "Cidre nature", href: "/" },
        { name: "Cidre parfumé", href: "/" },
        { name: "Cidre de feu", href: "/" },
        { name: "Cidre de glace", href: "/" },
        { name: "Histoire de Skornenn", href: "/" },
    ],
}

export default function SubNavbar() {
    const isMobile = useIsMobile();
    const { variant } = useApp();
    const { isNavbarVisible } = useNavbar()
    const { toggleSideBar } = useSidebar();
    return (
        <nav className={cn(
            subNavbarVariants[variant],
            "flex items-center fixed w-full z-9",
            "py-2.5 px-5 md:px-10",
            "min-h-12.5 md:min-h-15 top-12.5 md:top-19 transition-transform duration-500",
            isNavbarVisible ? "translate-y-0" : "-translate-y-12.5 md:-translate-y-19"
        )}>
            <div className="flex items-center gap-3">
                <h3>Logo</h3>
            </div>
            <div className="flex items-center gap-5 ml-auto text-background">
                <Link variant="navbar" href={subNavbarLinksVariants[variant][0].href}>{subNavbarLinksVariants[variant][0].name}</Link>
                {isMobile ?
                    <BarsListIcon onClick={toggleSideBar.bind(null, 'right')} className="rotate-180 h-[40px]" />
                    : subNavbarLinksVariants[variant].slice(1).map((link, index) => <Link variant="navbar" key={index} href={link.href}>{link.name}</Link>)}
            </div>
        </nav>
    )
}