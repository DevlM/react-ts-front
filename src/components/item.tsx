import useNavbar from "@/hooks/use-navbar";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

const HeartIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 md:size-6 hover:fill-muted"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
    </svg>
);

interface ItemCardProps {
    className?: string
}

const ItemCard: FC<ItemCardProps> = ({ className }) => (
    <div
        className={cn(
            'group grid relative',
            '2xl:grid-rows-[500px_85px]',
            'md:grid-rows-[400px_85px]',
            'grid-rows-[200px_70px]',
            className
        )}
    >
        <button
            className={cn(
                'absolute ml-auto w-min cursor-pointer z-10',
                'md:top-5 md:right-5',
                'top-2 right-2'
            )}
        >
            <HeartIcon />
        </button>
        <Link href="/" className="bg-accent w-full h-full">
            <div
                className={
                    'w-full h-full 2xl:p-5 sm:p-3 group-hover:scale-110 transition-all ease-out duration-500'
                }
            >
                <div className={cn('w-full h-full relative')}>
                    <Image
                        src={'/dev/canette.png'}
                        alt={'cannette'}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </Link>
        <Link href="/" className="px-2 py-3 space-y-2">
            <p className="font-semibold">Cidre breton parfumé à la poire</p>
            <p className="font-light text-muted">1.70€</p>
        </Link>
    </div>
);

interface ItemsListProps {
    className?: string
}

const ItemsList: FC<ItemsListProps> = ({ className }) => {
    return (
        <section
            className={cn(
                'grid justify-center gap-2.5 md:gap-5 px-2.5 md:px-8',
                '2xl:grid-cols-[repeat(4,445px)]',
                'xl:grid-cols-[repeat(4,325px)]',
                'lg:grid-cols-[repeat(3,326.67px)]',
                'md:grid-cols-[repeat(2,400px)] max-md:grid-rows-[repeat(2,270px)] max-md:max-h-[calc((270px+10px)*2)] max-md:overflow-hidden',
                'sm:grid-cols-[repeat(3,180px)]',
                'xs:grid-cols-[repeat(2,155px)]',
                'xxs:grid-cols-[repeat(2,145px)]',
                className
            )}
        >
            {Array(8)
                .fill(0)
                .map((_, i) => (
                    <ItemCard key={'card-' + i} />
                ))}
        </section>
    );
};


const ItemSection: FC<PropsWithChildren<{ title: string }>> = ({ title, children }) => {
    const {} = useNavbar();
    return (
        <section className={cn(
            "flex justify-center items-center flex-col gap-10 md:gap-15",
            "py-10 md:pt-20 2xl:pt-25 2xl:pb-20"
        )}>
            <h3>{title}</h3>
            {children}
        </section>
    )
}


const Item = { Section: ItemSection, Card: ItemCard, List: ItemsList }

export default Item;