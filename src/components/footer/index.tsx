import { cn } from "@/lib/utils";
import SubFooter from "./sub-footer";
import Link from "next/link";

const LinksList = (props: { links: { title: string; link: string }[] }) => (
    <ul className="space-y-1">
        {props.links.map((link, i) => (
            <li key={link.link + "-" + i}>
                <Link className="font-outfit font-light tracking-wider" href={link.link}>{link.title}</Link>
            </li>
        ))}
    </ul>
)


export default function Footer() {
    return (
        <footer className="space-y-10">
            <section className={cn(
                "min-h-[500px] flex items-center justify-center"
            )}>
                <div>
                    <h2>Logo</h2>
                </div>
            </section>
            <section className={cn(
                "flex gap-20 flex-wrap",
                "min-[900px]:px-10 min-[900px]:justify-start",
                "min-[200px]:px-10 min-[200px]:justify-center",
                "max-[441px]:text-center"
            )}>
                <div className="min-w-[200px] space-y-3">
                    <h4 className="text-strilherezh-primary">Strilherezh</h4>
                    <LinksList links={[
                        { title: 'Notre histoire', link: '/' },
                        { title: 'Tous nos produits', link: '/' },
                    ]} />
                </div>
                <div className="min-w-[200px] space-y-3">
                    <h4 className="text-strilherezh-primary">Skornenn</h4>
                    <LinksList links={[
                        { title: 'Histoire de Skornenn', link: '/' },
                        { title: 'Cidres natures', link: '/' },
                        { title: 'Cidres de feu', link: '/' },
                        { title: 'Cidres de glace', link: '/' },
                    ]} />
                </div>
                <div className="min-w-[200px] space-y-3">
                    <h4 className="text-strilherezh-primary">Vins</h4>
                    <LinksList links={[
                        { title: 'Histoire de "Vins"', link: '/' },
                        { title: 'Vins rouges', link: '/' },
                        { title: 'Vins blancs', link: '/' },
                        { title: 'Vins rosés', link: '/' },
                    ]} />
                </div>
                <div className="min-w-[200px] space-y-3">
                    <h4 className="text-strilherezh-primary">Whiskys</h4>
                    <LinksList links={[
                        { title: 'Histoire de "Whiskys"', link: '/' },
                        { title: 'Catégorie 1', link: '/' },
                        { title: 'Catégorie 2', link: '/' }
                    ]} />
                </div>
                <div className="min-w-[200px] space-y-3">
                    <h4 className="text-strilherezh-primary">Exclusivités</h4>
                    <LinksList links={[
                        { title: 'Catégorie 1', link: '/' },
                        { title: 'Catégorie 2', link: '/' }
                    ]} />
                </div>
            </section>
            <p className="text-center">© Skornenn 2024 - STRILHEREZH, France</p>
            <SubFooter />
        </footer >
    );
}