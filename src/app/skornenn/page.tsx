"use client";

import Carousel from "@/components/carousel";
import Hero from "@/components/hero";
import Item from "@/components/item";
import Section from "@/components/section";

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

export default function Page() {

    return (
        <main>
            <Hero
                name='Nos cidres'
                title='Skornenn'
                description='L&rsquo;Essence de la Bretagne en Chaque Goutte. (texte généré par ChatGPT)'
                image='/dev/header.jpg'
            />
            <Item.Section
                title='Nouveautés'
                headImage="/dev/glacon.png"
            >
                <Item.List />
            </Item.Section>
            <Item.Section
                title='A découvrir'
                headImage="/dev/glacon.png"
                asCarousel
            >
                <Carousel slides={[
                    { name: "Fruit de la passion (canette)", image: "/dev/cidre.jpg" },
                    { name: "Fruit de la passion (bouteille)", image: "/dev/exclus.jpg" },
                    { name: "Fruit rouge (canette)", image: "/dev/header.jpg" },
                    { name: "Orange saingunes (canette)", image: "/dev/whisky.jpg" },
                ]} />
            </Item.Section>
            <History />
            <ProductDesc />
            <Item.Section
                title='Titre catégorie'
                headImage="/dev/glacon.png"
            >
                <Item.List />
            </Item.Section>
        </main>
    )
}