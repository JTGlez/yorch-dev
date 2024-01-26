import Image from "next/image";
import { getLocaleStrings } from "@/localization";
import { motion } from "framer-motion";
import { contact } from "@/image-path";
import { title } from "@/components/primitives";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "lucide-react";

interface PhotoTitleProps {
    lang: string;
}

const PhotoTitle: React.FC<PhotoTitleProps> = ({ lang }) => {

    const strings = getLocaleStrings(lang);

    return (

            <div className="flex flex-col xl:flex-row items-center gap-8">
                <div className="w-50 lg:w-40 xl:w-48 order-first xl:order-first">
                    <Image
                        className="rounded-full"
                        src={contact.src}
                        alt="lol"
                        width={200}
                        height={200}
                    />
                </div>
                {/* Landing Name*/}
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col text-center xl:text-left justify-center gap-4">
                        <h1 className={title({ size: "sm" })}>{strings.Start.title}</h1>
                        <h1 className={title({ color: "blue", size: "sm" })}>{strings.Start.job}</h1>
                    </div>
                    {/* Social Networks*/}
                    <div className="flex gap-3 justify-center xl:justify-start">
                        <a href="https://github.com/JTGlez" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <GithubIcon className="mr-2 h-4 w-4" /> <span>Github</span>
                            </Button>
                        </a>
                        <a href="https://linkedin.com/in/jtglez" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline">
                                <LinkedinIcon className="mr-2 h-4 w-4" /> <span>LinkedIn</span>
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
    )
}

export default PhotoTitle