import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { LogInIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface ContentCardProps {

}


const ContentCard: React.FC<ContentCardProps> = ({ }) => {

    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

    return (

        <>
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="w-80 p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md ">
                                <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src="https://via.placeholder.com/150" />
                                <div className="p-4">
                                    <h2 className="text-xl  font-semibold">Beautiful Card</h2>
                                    <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis ante sit amet tellus ornare tincidunt.</p>
                                    <div className="flex justify-between items-center mt-4">
                                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>


    )
}

export default ContentCard;