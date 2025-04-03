import Image from 'next/image';
import { FC } from 'react';

interface HeroProps {
    name: string;
    title: string;
    description: string;
    image: string;
    className?: string;
}

const Hero: FC<HeroProps> = (props) => (
    <div className="flex items-center justify-center min-h-[600px] relative">
        <Image
            src={props.image}
            fill
            alt="header"
            className="object-center object-cover"
        />
        <div className="text-center space-y-2 z-1">
            <h2 className="uppercase text-strilherezh-primary">{props.name}</h2>
            <h1 className="uppercase text-background">{props.title}</h1>
            <p className="text-background">{props.description}</p>
        </div>
    </div>
);

export default Hero;
