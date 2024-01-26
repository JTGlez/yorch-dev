'use client'
import Image from "next/image";
import { kaslana, yorch, yorch2 } from "@/image-path";
import { motion } from "framer-motion";

// TODO: Componentize this page and change the career path to a timeline

export default function page() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 xl:pt-[4rem]">
                    <div className="flex items-center justify-center">
                        <Image
                            src={yorch}
                            alt='Profile'
                            width={300}
                            height={300}
                            className=' w-80 h-80 rounded-full object-cover'
                        />
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter">About Me</h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            I am a web developer with a passion for creating professional and functional websites. I have a strong background
                            in JavaScript, React, Python, Node.js, and I am always eager to learn new technologies and improve my skills. I also enjoy exploring the latest AI advances related to AI-Generated contents using tools like Stable Diffusion, ChatGPT and RVC.
                        </p>
                        <br />
                        <p className="text-gray-500 dark:text-gray-400">
                            Out of the routine, I love to watch anime, read manga, and play videogames.
                        </p>
                        <div className="flex items-center justify-center pt-2">
                            <Image
                                src={kaslana}
                                alt='Profile'
                                width={300}
                                height={300}
                                className='w-24 h-24 object-cover'
                            />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter">Education</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            I'm currently finishing my studies at the School of Engineering UNAM where I'm pursuing a degree in Computer Engineering. Also, I have a technical certificate as a Computer Technician from the ENP 2 UNAM.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter">Career Path</h2>
                        <div className="space-y-2">
                            <details className="text-gray-500 dark:text-gray-400">
                                <summary>Computer Technician Intern at Prepa 2, UNAM (2018-2019)</summary>
                                <ul className="list-disc list-inside space-y-2 pl-5 pt-2">

                                </ul>
                            </details>
                            <details className="text-gray-500 dark:text-gray-400">
                                <summary>Full Stack Developer at Brita Inteligencia Artificial (2023) </summary>
                                <ul className="list-disc list-inside space-y-2 pl-5 pt-2">

                                </ul>
                            </details>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}