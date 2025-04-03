import Image from "next/image";

const Hero = () => (
    <div className="flex items-center justify-center min-h-[600px] relative">
        <Image src="/dev/header.jpg" fill alt='header' className='object-center object-cover' />
        <div className="text-center space-y-2 z-1">
            <h2 className="uppercase text-strilherezh-primary">Strilherezh</h2>
            <h1 className="uppercase text-background">L&rsquo;alcool breton</h1>
            <p className='text-background'>
                L&rsquo;Essence de la Bretagne en Chaque Goutte. (texte généré par Chat GPT)
            </p>
        </div>
    </div>
);

export default Hero;