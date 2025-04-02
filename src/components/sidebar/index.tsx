"use client";
import useSidebar from "@/hooks/use-sidebar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { LinkRightArrowIcon } from "../icon";
import Image from "next/image";

const XIcon = () => {
    const { toggleSideBar } = useSidebar();

    return (
        <svg onClick={toggleSideBar} className="size-12 cursor-pointer fill-foreground bg-accent rounded-full p-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
    )
}

const ChevronLeftIcon = () => (
    <svg className="size-6 transition-all -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
)


const LeftArrowIcon: FC<{ onClick: () => void }> = ({ onClick }) => (
    <svg onClick={onClick} className="size-10 absolute left-10 cursor-pointer fill-foreground bg-accent rounded-full p-2.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
        <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>

)


const SideBarBtn = (props: PropsWithChildren<{ onClick?: () => void }>) => {
    return (
        <div className="flex group *:cursor-pointer">
            <button onClick={props.onClick} className="!font-outfit !font-light !text-xl flex-1 text-start max-sm:text-center" {...props}>{props.children}</button>
            <ChevronLeftIcon />
        </div>
    )
}

const SideBarLink = (props: PropsWithChildren<{ href: string }>) => {
    const { toggleSideBar } = useSidebar();
    return (
        <Link onClick={toggleSideBar} href={props.href} className="flex group">
            <p className="!font-outfit !font-light !text-xl flex-1">{props.children}</p>
            <ChevronLeftIcon />
        </Link>
    )
}
interface SideBarPageProps {
    active: boolean,
    back: () => void,
    logo: string,
    links: { content: string, href: string }[],
    contents?: { name: string, img: string, link: string }[]
}

const SideBarPage: FC<SideBarPageProps> = (props) => (
    <section className={cn(
        "absolute top-0 right-0 w-full h-full z-0",
    )}>
        <div className={cn(
            "p-10 pb-0 h-full flex flex-col gap-5 bg-background transition-all duration-500 ease-in-out",
            props.active ? "translate-x-full" : "translate-x-0"
        )}>
            <div className="py-5 flex justify-center items-center border-b border-b-accent min-h-22.5">
                <LeftArrowIcon onClick={props.back} />
                <h3 className="!text-[25px]">{props.logo}</h3>
            </div>
            <div className="flex flex-col pb-1.5 gap-7.5">
                {props.links.map((link, index) => (
                    <SideBarLink key={index} href={link.href}>{link.content}</SideBarLink>
                ))}
            </div>
            {props.contents &&
                <div className="flex flex-col py-5 gap-7.5 h-full overflow-auto">
                    {props.contents.map((content, index) => (
                        <Link href={content.link} key={content.name + "_" + index} className="relative min-h-[230px] flex items-end p-4">
                            <Image src={content.img} alt={content.name} fill className="object-center object-cover" />
                            <div className="flex items-center text-white gap-2 z-10">
                                <p className="text-default font-medium">{content.name}</p>
                                <LinkRightArrowIcon />
                            </div>
                        </Link>
                    ))}
                </div>
            }
        </div>
    </section>
);


export default function Sidebar() {
    const { isVisible } = useSidebar();
    const [page, setPage] = useState<string>('default');
    useEffect(() => {
        setPage('default');
    }, [isVisible])

    return (
        <div id="sidebar" className={cn(
            "fixed bg-background z-20 h-screen shadow-xl transition-transform duration-500 ease-in-out w-full max-w-[500px] max-md:[360px]",
            isVisible ? "translate-x-0" : "-translate-x-full"
        )}>
            <section className={cn("absolute top-0 right-0 w-full h-full p-10 flex flex-col gap-5 z-20 bg-background")}>
                <div className="py-5 flex border-b border-b-accent items-center min-h-22.5">
                    <h3 className="flex-1 !text-[25px]">Nos maisons</h3>
                    <XIcon />
                </div>
                <div className="flex flex-col py-5 gap-7.5">
                    <SideBarBtn onClick={() => setPage("Strillherezh")}>Strillherezh</SideBarBtn>
                    <SideBarBtn onClick={() => setPage("Skornenn")}>Skornenn</SideBarBtn>
                    <SideBarBtn onClick={() => setPage("Vins")}>Vins</SideBarBtn>
                    <SideBarBtn onClick={() => setPage("Whisky")}>Whisky</SideBarBtn>
                    <SideBarBtn onClick={() => setPage("Exclusivités")}>Exclusivités</SideBarBtn>
                </div>
            </section>
            <SideBarPage active={page === "Strillherezh"} back={() => setPage("default")}
                logo="Strillherezh"
                links={[
                    { content: "Tout voir", href: "/" },
                    { content: "Tous nos produits", href: "/" },
                    { content: "Notre histoire", href: "/" }
                ]}
            />
            <SideBarPage active={page === "Skornenn"} back={() => setPage("default")}
                logo="Skornenn"
                links={[
                    { content: "Tout voir", href: "/" },
                    { content: "Histoire de Skornenn", href: "/" }
                ]}

                contents={[
                    { name: "Strillherezh", img: "/dev/cidre.jpg", link: "/" },
                    { name: "Skornenn", img: "/dev/cidre.jpg", link: "/" },
                    { name: "Vins", img: "/dev/cidre.jpg", link: "/" },
                    { name: "Whisky", img: "/dev/cidre.jpg", link: "/" },
                    { name: "Exclusivités", img: "/dev/cidre.jpg", link: "/" },
                ]}
            />
            <SideBarPage active={page === "Vins"} back={() => setPage("default")}
                logo="Vins"
                links={[
                    { content: "Tout voir", href: "/" },
                    { content: "Histoire de Vins", href: "/" }
                ]}

                contents={[
                    { name: "Strillherezh", img: "/dev/wine.jpg", link: "/" },
                    { name: "Skornenn", img: "/dev/wine.jpg", link: "/" },
                    { name: "Vins", img: "/dev/wine.jpg", link: "/" },
                    { name: "Whisky", img: "/dev/wine.jpg", link: "/" },
                    { name: "Exclusivités", img: "/dev/wine.jpg", link: "/" },
                ]}

            />
            <SideBarPage active={page === "Whisky"} back={() => setPage("default")}
                logo="Whisky"
                links={[
                    { content: "Tout voir", href: "/" },
                    { content: "Histoire de Whisky", href: "/" }
                ]}
                contents={[
                    { name: "Strillherezh", img: "/dev/whisky.jpg", link: "/" },
                    { name: "Skornenn", img: "/dev/whisky.jpg", link: "/" },
                    { name: "Vins", img: "/dev/whisky.jpg", link: "/" },
                    { name: "Whisky", img: "/dev/whisky.jpg", link: "/" },
                    { name: "Exclusivités", img: "/dev/whisky.jpg", link: "/" },
                ]}

            />
            <SideBarPage active={page === "Exclusivités"} back={() => setPage("default")}
                logo="Exclusivités"
                links={[
                    { content: "Tout voir", href: "/" },
                    { content: "Histoire de Exclusivités", href: "/" }
                ]}

                contents={[
                    { name: "Strillherezh", img: "/dev/exclus.jpg", link: "/" },
                    { name: "Skornenn", img: "/dev/exclus.jpg", link: "/" },
                    { name: "Vins", img: "/dev/exclus.jpg", link: "/" },
                    { name: "Whisky", img: "/dev/exclus.jpg", link: "/" },
                    { name: "Exclusivités", img: "/dev/exclus.jpg", link: "/" },
                ]}
            />
        </div >
    )
}