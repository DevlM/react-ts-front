"use client";

// import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useIsMobile } from "@/hooks/use-mobile"
import SubNavbar from "./sub-navbar"
import { cn } from "@/lib/utils";


const BarsIcon = (props: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={props.className}>
            <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>

    )
}

const UserIcon = (props: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    )
}

const ShopIcon = (props: { className?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={props.className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            <circle cx="19" cy="8" r="3" fill="red" strokeWidth={0} />
        </svg>

    )
}



export default function Navbar() {
    const isMobile = useIsMobile();
    return (
        <nav>
            <nav className="h-[75px] bg-background flex items-center px-10 max-[441px]:px-5">
                <div className="flex items-center gap-3">
                    <BarsIcon className="p-1 size-8" />
                    <p className="!text-[16px]">Menu</p>
                </div>
                <div className="flex-1 flex justify-center">
                    <h3>Logo</h3>
                </div>
                <div className={cn(
                    "flex gap-5",
                    "max-[441px]:gap-1"
                )}>
                    <div className="flex gap-1 items-center">
                        <UserIcon className="size-8 p-1" />
                        {!isMobile && <p>Compte</p>}
                    </div>
                    <div className="flex gap-1 items-center">
                        <ShopIcon className="size-8 p-1" />
                        {!isMobile && <p>Panier</p>}
                    </div>
                </div>
            </nav>
            <SubNavbar />
        </nav>
    )
}