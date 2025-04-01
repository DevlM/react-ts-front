import Link from "next/link";

export default function SubNavbar() {
    return (
        <nav className="h-[60px] bg-strilherezh-primary flex items-center px-10">
            <div className="flex items-center gap-3">
                <h3>Logo</h3>
            </div>
            <div className="flex gap-5 ml-auto text-background">
                <Link href="/">Tous nos produits</Link>
                <Link href="/">Notre histoire</Link>
            </div>
        </nav>
    )
}