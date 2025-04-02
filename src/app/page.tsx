import Section from '@/components/section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="text-background p-3 pb-6 space-y-2.5 mt-auto transition-all ease-out duration-500 delay-75 in group-hover:pb-12">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  </Link>
);

const Products = () => (
  <section className={cn(
    "grid",
    '2xl:grid-rows-[repeat(1,700px)]',
    'xl:grid-rows-[repeat(1,646px)]',
    'lg:grid-rows-[repeat(1,550px)] lg:grid-cols-4',
    'md:grid-rows-[repeat(4,230px)]',
    'sm:grid-rows-[repeat(4,250px)]',
    'xs:grid-rows-[repeat(4,200px)] xs:grid-cols-1'
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
    className="size-5 md:size-6 hover:fill-muted"
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
      '2xl:grid-rows-[500px_85px]',
      'md:grid-rows-[400px_85px]',
      'grid-rows-[200px_70px]'
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

const Items = () => {
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

const History = () => {
  return (
    <Section title='Notre histoire' img='/dev/history.jpg' links={[{ content: "Découvrir notre histoire", href: "/" }]}>
      <Section.Content>
        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis sequi at voluptatem porro consectetur, autem perspiciatis reprehenderit. Unde earum, alias illum laudantium quisquam doloribus quam.</p>
        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis.</p>
        <p className='text-sm md:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis sequi at voluptatem porro consectetur, autem perspiciatis reprehenderit. Unde earum, alias illum laudantium quisquam doloribus quam.</p>
      </Section.Content>
    </Section>
  )
}

const ProductDesc = () => {
  return (
    <Section
      title='Nos produits'
      img='/dev/productdesc.jpg'
      links={[
        { content: "Découvrir nos whisky", href: "/" },
        { content: "Découvrir nos cidres", href: "/" },
        { content: "Découvrir nos vins", href: "/" },
        { content: "Découvrir nos exclusivités", href: "/" },
      ]}
      align="right"
    >
      <Section.Content>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis sequi at voluptatem porro consectetur, autem perspiciatis reprehenderit. Unde earum, alias illum laudantium quisquam doloribus quam.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur excepturi obcaecati necessitatibus a velit! Vitae nostrum commodi distinctio laudantium pariatur voluptatum omnis modi quaerat similique saepe incidunt praesentium, consequuntur est perferendis quia impedit blanditiis.</p>
      </Section.Content>
    </Section>
  )
}


export default function Home() {
  return (
    <main>
      <Hero />
      <section className={cn(
        "flex justify-center items-center flex-col gap-1.5",
        "py-7.5 md:py-10 2xl:py-15"
      )}>
        <h3>Nos maisons</h3>
        <p>Découvrez nos différents produits</p>
      </section>
      <Products />
      <section className={cn(
        "flex justify-center items-center flex-col gap-10 md:gap-15",
        "py-10 md:pt-20 2xl:pt-25 2xl:pb-20"
      )}>
        <h3>Nouveautés</h3>
        <Items />
      </section>
      <History />
      <ProductDesc />
    </main>
  );
}
