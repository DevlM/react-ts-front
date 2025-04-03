"use client";
import Hero from '@/components/hero';
import { LinkRightArrowIcon } from '@/components/icon';
import Item from '@/components/item';
import Section from '@/components/section';
import { useEnsureVariant } from '@/hooks/use-app';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';


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
        <LinkRightArrowIcon />
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
  useEnsureVariant('strillherezh');
  return (
    <main>
      <Hero
        name='Strillherezh'
        title='L&rsquo;alcool de Breton'
        description='L&rsquo;Essence de la Bretagne en Chaque Goutte. (texte généré par ChatGPT)'
        image='/dev/header.jpg'
      />
      <section className={cn(
        "flex justify-center items-center flex-col gap-1.5",
        "py-7.5 md:py-10 2xl:py-15"
      )}>
        <h3>Nos maisons</h3>
        <p>Découvrez nos différents produits</p>
      </section>
      <Products />
      <Item.Section title='Nouveautés'>
        <Item.List />
      </Item.Section>
      <History />
      <ProductDesc />
    </main>
  );
}
