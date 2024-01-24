'use client'
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { subtitle, title } from "@/components/primitives";
import { getLocaleStrings } from "@/localization";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ContactCard";
import ContentCard from "@/components/ContentCard";
import { contact } from "@/image-path";
import SwiperCard from "@/components/SwiperCard";

export default function Home({ params }: { params: { lang: string } }) {

  const strings = getLocaleStrings(params.lang);

  return (
    <>
      <section className="grid-layout py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <ContactCard lang={params.lang} />
        </motion.div>

        <section className="grid-layout-cards">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 items-center lg:items-start "
          >
            <h1 className={subtitle({ color: 'blue' })}>Projects</h1>
            <div className="flex flex-col w-[100%] lg:flex-row items-center gap-4 justify-center">
              <ContentCard />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 items-center lg:items-start "
          >
            <h1 className={subtitle({ color: 'blue' })}>Blog</h1>
            <div className="flex flex-col w-[100%] lg:flex-row items-center gap-4 justify-center">
              <ContentCard />
            </div>
          </motion.div>
        </section>



        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 xl:gap-16 items-start justify-start"
        >
          <h1 className={subtitle({ color: 'blue' })}>Certifications</h1>
          <div className="flex flex-col w-[100%] lg:flex-row items-end gap-4">
            <SwiperCard />
          </div>
        </motion.div>
      </section>
    </>
  )
}