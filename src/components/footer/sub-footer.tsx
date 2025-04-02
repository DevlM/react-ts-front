import { cn } from "@/lib/utils"
import Link from "next/link"
import { SVGProps } from "react"

export function InstagramLogoThin(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="size-8 border text-muted rounded-full p-1"
            {...props}
        >
            <path
                fill="currentColor"
                d="M128 84a44 44 0 1 0 44 44a44.05 44.05 0 0 0-44-44m0 80a36 36 0 1 1 36-36a36 36 0 0 1-36 36m48-136H80a52.06 52.06 0 0 0-52 52v96a52.06 52.06 0 0 0 52 52h96a52.06 52.06 0 0 0 52-52V80a52.06 52.06 0 0 0-52-52m44 148a44.05 44.05 0 0 1-44 44H80a44.05 44.05 0 0 1-44-44V80a44.05 44.05 0 0 1 44-44h96a44.05 44.05 0 0 1 44 44ZM188 76a8 8 0 1 1-8-8a8 8 0 0 1 8 8"
            ></path>
        </svg>
    )
}


export default function SubFooter() {
    return (
        <footer className={cn(
            "border-t border-strilherezh-primary flex items-center",
            'py-5 px-10 gap-6.5',
            'max-sm:flex-col-reverse'
        )}>
            <div className="gap-6 flex flex-wrap min-[200px]:justify-center">
                <Link href="/" className="">CGU</Link>
                <Link href="/" className="">CGV</Link>
                <Link href="/" className="">Politique de confidentialité</Link>
                <Link href="/" className="">Mentions légales</Link>
            </div>
            <div className="min-[900px]:ml-auto flex">
                <Link href="/" className="rounded-full p-1"><InstagramLogoThin /></Link>
                <Link href="/" className="rounded-full p-1"><InstagramLogoThin /></Link>
                <Link href="/" className="rounded-full p-1"><InstagramLogoThin /></Link>
                <Link href="/" className="rounded-full p-1"><InstagramLogoThin /></Link>
            </div>
        </footer>
    )
}