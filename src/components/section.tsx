import { cn } from "@/lib/utils";
import Image from "next/image";
import Button from "./button";
import { Children, FC, isValidElement, PropsWithChildren } from "react";

interface SectionProps {
    title: string,
    className?: string,
    align?: 'right',
    img?: string,
    links: { content: string, href: string }[],
    children: React.ReactNode
}

interface SectionContentProps extends PropsWithChildren {
    className?: string
}

const Section: FC<SectionProps> & {
    Content: FC<SectionContentProps>
} = (props) => {
    const hasSectionContent = Children.toArray(props.children).some(
        (child) => isValidElement(child) && child.type === SectionContent
    );

    if (!hasSectionContent) {
        throw new Error("Section has no SectionContent.");
    }

    return (
        <section className={cn(
            "inline-flex relative",
            "py-37.5 px-5",
            "md:py-32.5 md:px-10",
            "xl:py-45 xl:px-32.5",
            props.align && "justify-end text-right",
        )}>
            {props.img && <Image src={props.img} fill alt='header' className='z-0 object-center object-cover' />}
            <div className='z-5 space-y-6 text-background lg:max-w-1/2'>
                <h2 className='!font-semibold'>{props.title}</h2>
                {props.children}
                <div className={cn('flex flex-col max-sm:items-center gap-[25px] lg:gap-5', props.align && 'items-end')}>
                    {props.links.map((link, i) => (
                        <Button.Link key={`${link.content}-${i}`} {...link} className='mt-8 min-w-[267px]' />
                    ))}
                </div>
            </div>
        </section>
    )
}

const SectionContent: FC<SectionContentProps> = (props) => (
    <div className='space-y-4'>
        {props.children}
    </div>
)

Section.Content = SectionContent

export default Section;
