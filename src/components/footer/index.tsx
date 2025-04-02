"use client";
import { cn } from "@/lib/utils";
import SubFooter from "./sub-footer";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { FC } from "react";

interface LinkListProps {
    links: { title: string; link: string }[]
}

const LinksList: FC<LinkListProps> = (props) => (
    <ul className="space-y-2.5">
        {props.links.map((link, i) => (
            <li key={link.link + "-" + i}>
                <Link className="font-outfit font-light tracking-wider text-muted" href={link.link}>{link.title}</Link>
            </li>
        ))}
    </ul>
)

interface LinkContainerProps extends LinkListProps {
    title: string
}

const LinkContainer: FC<LinkContainerProps> = (props) => {
    const isMobile = useIsMobile();

    return (
        <div className={cn(
            "max-sm:w-full flex justify-center",
            "py-10", isMobile && "border-t border-t-accent"
        )}>
            <div className="space-y-3">
                <h4 className="text-strilherezh-primary">{props.title}</h4>
                <LinksList links={props.links} />
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer>
            <div className={cn(
                "space-y-10",
                "pt-25 pb-15 px-5"
            )}>
                <section className={"flex items-center justify-center"}>
                    <div>
                        <h2>Logo</h2>
                    </div>
                </section>
                <section className={cn(
                    "flex flex-wrap justify-around",
                    "max-md:gap-10",
                    "max-sm:justify-center max-sm:gap-0",
                    "max-sm:text-center",
                    "px-10"
                )}>
                    <LinkContainer
                        title="Strilherezh"
                        links={[
                            { title: 'Notre histoire', link: '/' },
                            { title: 'Tous nos produits', link: '/' },
                        ]}
                    />
                    <LinkContainer
                        title="Skornenn"
                        links={[
                            { title: 'Histoire de Skornenn', link: '/' },
                            { title: 'Cidres natures', link: '/' },
                            { title: 'Cidres de feu', link: '/' },
                            { title: 'Cidres de glace', link: '/' },
                        ]}
                    />
                    <LinkContainer
                        title="Vins"
                        links={[
                            { title: 'Histoire de "Vins"', link: '/' },
                            { title: 'Vins rouges', link: '/' },
                            { title: 'Vins blancs', link: '/' },
                            { title: 'Vins rosés', link: '/' },
                        ]}
                    />
                    <LinkContainer
                        title="Whiskys"
                        links={[
                            { title: 'Histoire de "Whiskys"', link: '/' },
                            { title: 'Catégorie 1', link: '/' },
                            { title: 'Catégorie 2', link: '/' }
                        ]}
                    />
                    <LinkContainer
                        title="Exclusivités"
                        links={[
                            { title: 'Catégorie 1', link: '/' },
                            { title: 'Catégorie 2', link: '/' }
                        ]}
                    />
                </section>
            </div>
            <p className="text-center text-muted mb-5">© Skornenn 2024 - STRILHEREZH, France</p>
            <SubFooter />
        </footer >
    );
}