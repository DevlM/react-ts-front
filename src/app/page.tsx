import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

const Hero = () => (
  <header className="flex items-center justify-center min-h-[600px] relative">
    <Image src="/dev/header.jpg" fill alt='header' className='object-center object-cover' />
    <div className="text-center space-y-2 z-10">
      <h2 className="uppercase text-strilherezh-primary">Strilherezh</h2>
      <h1 className="uppercase text-background">L&rsquo;alcool breton</h1>
      <p className='text-background'>
        L&rsquo;Essence de la Bretagne en Chaque Goutte. (texte généré par Chat GPT)
      </p>
    </div>
  </header>
);

const SectionSeparator = (props: { title: string; description?: string }) => (
  <section className={cn(
    "flex justify-center items-center flex-col min-h-[105px]",
    'min-[1920px]:h-[181px]',
    'min-[1440px]:h-[141px]',
    'min-[1100px]:h-[141px]',
    'min-[900px]:h-[141px]',
    'min-[441px]:h-[105px]',
    'min-[320px]:h-[105px]'
  )}>
    <h3>{props.title}</h3>
    {props.description && <p>{props.description}</p>}
  </section>
);

const LinkArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-8"
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Z"
      clipRule="evenodd"
      className="text-accent/80"
    />
    <path
      fill="white"
      className="text-white"
      fillRule="evenodd"
      d="M16.28 12.53a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
      clipRule="evenodd"
    />
  </svg>
);

const Product = (props: {
  title: string;
  img: string;
  link: string;
  description: string;
}) => (
  <Link
    href={props.link}
    className={cn(
      "group grid grid-rows-[min-content_auto] grid-cols-[auto] space-y-3"
    )}
  >
    <div className="row-[1] col-[1] z-2 p-5 ml-auto mr-10 group-hover:mr-0 transition-all ease-out duration-500 delay-75 group-hover:opacity-100 opacity-0">
      <div className="flex items-center text-white gap-2">
        <p className="text-default  font-medium">Tout découvrir</p>
        <LinkArrowIcon />
      </div>
    </div>
    <div className="h-full w-full relative row-start-1 row-span-2 col-[1]">
      <Image src={props.img} alt={'whisky'} fill className="object-center object-cover" />
    </div>
    <div className="row-start-1 row-span-2 col-[1] z-1 flex bg-gradient-to-t from-black to-30% to-transparent">
      <div className="text-background p-3 pb-6 space-y-2 mt-auto transition-all ease-out duration-500 delay-75 in group-hover:pb-12">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  </Link>
);

const Products = () => (
  <section className={cn(
    "grid",
    'min-[1920px]:grid-rows-[repeat(1,700px)]',
    'min-[1440px]:grid-rows-[repeat(1,646px)]',
    'min-[1100px]:grid-rows-[repeat(1,550px)] min-[1100px]:grid-cols-4',
    'min-[900px]:grid-rows-[repeat(4,230px)]',
    'min-[441px]:grid-rows-[repeat(4,250px)]',
    'min-[320px]:grid-rows-[repeat(4,200px)] min-[320px]:grid-cols-1'
  )}>
    <Product
      title="Nos whiskys"
      img="/dev/whisky.jpg"
      link="/"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, vero!"
    />
    <Product
      title="Nos cidres"
      img="/dev/cidre.jpg"
      link="/"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, vero!"
    />
    <Product
      title="Nos vins"
      img="/dev/wine.jpg"
      link="/"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, vero!"
    />
    <Product
      title="Nos exclus"
      img="/dev/exclus.jpg"
      link="/"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, vero!"
    />
  </section>
);

const HeartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-7 hover:fill-muted"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
    />
  </svg>
);

const ItemCard = () => (
  <div
    className={cn(
      'group grid relative',
      'min-[1920px]:grid-rows-[500px_85px]',
      'min-[900px]:grid-rows-[400px_85px]',
      'max-[900px]:grid-rows-[200px_70px]'
    )}
  >
    <button
      className={cn(
        'absolute ml-auto w-min cursor-pointer z-10',
        'min-[900px]:top-5 min-[900px]:right-5',
        'max-[900px]:top-2 max-[900px]:right-2'
      )}
    >
      <HeartIcon />
    </button>
    <Link href="/" className="bg-accent w-full h-full">
      <div
        className={
          'w-full h-full max-[1920px]:p-5 max-[441px]:p-3 group-hover:scale-110 transition-all ease-out duration-500'
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

const Items = () => {
  return (
    <section
      className={cn(
        'grid gap-[20px] justify-center',
        'min-[1920px]:grid-cols-[repeat(4,445px)]',
        'min-[1440px]:grid-cols-[repeat(4,325px)]',
        'min-[1100px]:grid-cols-[repeat(3,326.67px)]',
        'min-[900px]:grid-cols-[repeat(2,400px)]',
        'min-[441px]:grid-cols-[repeat(3,180px)] min-[441px]:gap-[10px] min-[441px]:px-8',
        'max-[441px]:grid-cols-[repeat(2,155px)] max-[441px]:gap-[10px] max-[441px]:px-8',
        'max-[360px]:grid-cols-[repeat(2,145px)] max-[360px]:gap-[5px] max-[360px]:px-3'
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

/**
 * 
    'min-[1920px]:',
    'min-[1440px]:',
    'min-[1100px]:',
    'min-[900px]:',
    'min-[441px]:',
    'min-[320px]:'
    width: 360;
height: 924;
padding-top: 150px;
padding-right: 20px;
padding-bottom: 150px;
padding-left: 20px;

 */

const ButtonLink = (props: PropsWithChildren<{ href: string, className?: string }>) => {
  return (
    <button className={cn('px-10 py-3 border bg-transparent min-[900px]:w-min min-[320px]:w-full min-w-[300px] min-[320px]:min-w-full', props.className)}>
      <Link href={props.href} className={'font-semibold whitespace-nowrap'}>{props.children}</Link>
    </button>
  )
}


const History = () => {
  return (
    <section className={cn(
      "flex items-center relative",
      'min-[1920px]:h-[1000px]',
      'min-[1440px]:h-[800px]',
      'min-[1100px]:h-[800px]',
      'min-[900px]:h-[700px] min-[900px]:px-25',
      'min-[441px]:h-[726px] min-[441px]:px-10',
      'min-[320px]:h-[924px] min-[320px]:px-5'

    )}>
      <Image src="/dev/history.jpg" fill alt='header' className='object-center object-cover' />
      <div className='z-10 space-y-6 text-background'>
        <h2 className='!font-semibold'>Notre histoire</h2>
        <div className={cn(
          'flex flex-col gap-5',
          'min-[1100px]:max-w-1/2',
          'min-[900px]:w-full',
        )}>
          <p className='min-[320px]:!text-[14px] min-[900px]:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis sequi at voluptatem porro consectetur, autem perspiciatis reprehenderit. Unde earum, alias illum laudantium quisquam doloribus quam.</p>
          <p className='min-[320px]:!text-[14px] min-[900px]:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis.</p>
          <p className='min-[320px]:!text-[14px] min-[900px]:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis sequi at voluptatem porro consectetur, autem perspiciatis reprehenderit. Unde earum, alias illum laudantium quisquam doloribus quam.</p>
          <ButtonLink href='/' className='mt-8'>Découvrir notre histoire</ButtonLink>
        </div>
      </div>
    </section>
  )
}

const ProductDesc = () => {
  return (
    <section className={cn(
      "flex items-center relative justify-end",
      'min-[1920px]:h-[1000px]',
      'min-[1440px]:h-[800px]',
      'min-[1100px]:h-[800px]',
      'min-[900px]:h-[700px] min-[900px]:px-25',
      'min-[441px]:h-[726px] min-[441px]:px-10',
      'min-[320px]:h-[924px] min-[320px]:px-5'

    )}>
      <Image src="/dev/productdesc.jpg" fill alt='header' className='object-center object-cover' />
      <div className='z-10 space-y-6 text-background flex flex-col items-end'>
        <h2 className='!font-semibold text-right'>Nos produits</h2>
        <div className={cn(
          'flex flex-col items-end gap-5',
          'min-[1100px]:max-w-1/2',
          'min-[900px]:flex-1',
        )}>
          <p className='text-right min-[320px]:!text-[14px] min-[900px]:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis sequi at voluptatem porro consectetur, autem perspiciatis reprehenderit. Unde earum, alias illum laudantium quisquam doloribus quam.</p>
          <p className='text-right min-[320px]:!text-[14px] min-[900px]:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis.</p>
          <ButtonLink href='/' className='mt-8 min-[900px]:text-right'>Découvrir nos whisky</ButtonLink>
          <ButtonLink href='/' className='mt-3 min-[900px]:text-right'>Découvrir nos cidres</ButtonLink>
          <ButtonLink href='/' className='mt-3 min-[900px]:text-right'>Découvrir nos vins</ButtonLink>
          <ButtonLink href='/' className='mt-3 min-[900px]:text-right'>Découvrir nos exclusivités</ButtonLink>
        </div>
      </div>
    </section>
  )
}


export default function Home() {
  return (
    <main>
      <Hero />
      <SectionSeparator title="Nos maisons" description="Découvrez nos différents produits" />
      <Products />
      <SectionSeparator title="Nouveautés" />
      <Items />
      <History />
      <ProductDesc />
    </main>
  );
}
