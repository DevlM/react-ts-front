"use client";
import useSidebar from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

const XIcon = () => {
    const { toggleSideBar } = useSidebar();

    return (
        <svg onClick={toggleSideBar} className="size-13 cursor-pointer fill-foreground bg-accent rounded-full p-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
    )
}

const ChevronLeftIcon = () => (
    <svg className="size-6 transition-all -translate-x-full opacity-0 group-hover:translate-x-full group-hover:opacity-100 duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
)



const SideBarLink = (props: PropsWithChildren<{ href: string }>) => {
    const { toggleSideBar } = useSidebar();
    return (
        <div className="flex group">
            <Link onClick={toggleSideBar} className="!font-outfit !font-light !text-xl flex-1" {...props}>{props.children}</Link>
            <ChevronLeftIcon />
        </div>
    )
}

export default function Sidebar() {
    const { isVisible } = useSidebar();
 
    return (
        <div id="sidebar" className={cn(
            "fixed p-5 min-w-[360px] max-xs:min-w-full max-xs:w-full bg-background h-screen z-20 shadow-xl transition-transform duration-500 ease-in-out",
            isVisible ? "translate-x-0" : "-translate-x-full",
            "md:min-w-md md:p-10"
        )}>
            <div className="py-5 flex border-b border-b-accent items-center">
                <h3 className="flex-1 !text-[25px]">Nos maisons</h3>
                <XIcon />
            </div>
            <div className="flex flex-col py-5 gap-7.5">
                <SideBarLink href={"/"}>Strillherezh</SideBarLink>
                <SideBarLink href={"/"}>Skornenn</SideBarLink>
                <SideBarLink href={"/"}>Vins</SideBarLink>
                <SideBarLink href={"/"}>Shisky</SideBarLink>
                <SideBarLink href={"/"}>Exclusivités</SideBarLink>
            </div>
        </div>
    )
}