"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, useState } from "react";
import Slider, { Settings } from "react-slick";

interface CarouselProps {
    slides: { name: string, image: string }[]
}

const Carousel: FC<CarouselProps> = ({ slides }) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    // let sliderRef = useRef(null);
    const settings: Settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: () => setUpdateCount(updateCount + 1),
        beforeChange: (current, next) => setSlideIndex(next)
    };

    return (
        <div className="relative">
            <Slider {...settings}>
                {slides.map((slide, i) => (
                    <CarousedContent key={"car-" + i} index={i} {...slide} />
                ))}
            </Slider>
            <div className="absolute bottom-10 w-full flex gap-5 flex-col items-center justify-center">
                <h2 className="text-center text-background text-shadow">{slides[slideIndex].name}</h2>
                <div className="flex gap-5">
                    {slides.map((slide, i) => (
                        <span key={"dot-" + i} className={cn("h-1.5 w-26 bg-background/50 hover:bg-background", slideIndex === i && "bg-accent")} />
                    ))}
                </div>
            </div>
        </div >
    )
}


interface CarousedContentProps {
    index: number;
    image: string;
    name: string
}

const CarousedContent: FC<CarousedContentProps> = ({ index, name, image }) => {
    return (
        <div className="bg-accent h-screen w-full relative">
            <Image
                src={image}
                alt={name || 'image'}
                fill
                className="object-cover"
            />
            <h3>{index}</h3>
        </div>
    )
}

export default Carousel;