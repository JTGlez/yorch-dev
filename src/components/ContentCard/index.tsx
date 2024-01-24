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
import { motion } from "framer-motion";
import { subtitle } from "@/components/primitives";

interface ContentCardProps {
    title: string;
    isProject?: boolean;
    content: { image: string; title: string; description: string; }[];
}


const ContentCard: React.FC<ContentCardProps> = ({ title, content, isProject }) => {

    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 items-center xl:items-start "
            >
                <h1 className={subtitle({ color: 'blue' })}>{title}</h1>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full max-w-xs"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {content.map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="w-80 h-[25rem] p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-md border-[1px] ">
                                    <img className="w-full h-40 object-cover rounded-t-lg" alt="Card Image" src={_.image} />
                                    <div className="p-4">
                                        <div className="h-[10rem] overflow-auto"> {/* Limita el tamaño del texto */}
                                            <h2 className="text-xl mb-2 font-semibold">{_.title}</h2>
                                            <p className="text-gray-600">{_.description}</p>
                                        </div>

                                        {
                                            isProject
                                                ? (<div className="mt-[-1rem] flex justify-evenly"> {/* Posiciona el botón cerca del final */}
                                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Github</button>
                                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Deploy</button>
                                                </div>)
                                                : (<div className="mt-[-1rem] flex justify-end  "> {/* Posiciona el botón cerca del final */}
                                                    <button disabled className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Read</button>
                                                </div>)
                                        }
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </motion.div>
        </>


    )
}

export default ContentCard;