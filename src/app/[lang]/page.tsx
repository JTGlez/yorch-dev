'use client'
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { getLocaleStrings } from "@/localization";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ContactCard";
import ContentCard from "@/components/ContentCard";
import { contact } from "@/image-path";

export default function Home({ params }: { params: { lang: string } }) {

  const strings = getLocaleStrings(params.lang);

  return (
    <>
      {/* Start sections */}
      <section className="flex flex-col lg:flex-row py-16 items-center gap-10 sm-gap:0">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[60%]"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="w-50 lg:w-40 xl:w-48 order-first lg:order-first">
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
              <div className="flex flex-col text-center lg:text-left justify-center gap-4">
                <h1 className={title({ size: "sm" })}>{strings.Start.title}</h1>
                <h1 className={title({ color: "blue", size: "sm" })}>{strings.Start.job}</h1>
              </div>
              {/* Social Networks*/}
              <div className="flex gap-3 justify-center lg:justify-start">
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
          className="w-full lg:w-[40%]"
        >
          <ContactCard lang={params.lang} />
        </motion.div>
      </section>

      {/* Start sections */}
      <section className="flex flex-col lg:flex-row py-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[60%]"

        >
          <h2>Proyectos</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <ContentCard />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[40%]"

        >
          <h2>Blog</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <ContentCard />
          </div>
        </motion.div>
      </section>


      {/* Project and Blog Cards */}
      <section className="grid grid-cols-2 gap-4 py-16 items-center" style={{ gridTemplateColumns: "3fr 2.5fr" }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Proyectos</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <ContentCard />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Blog</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <ContentCard />
          </div>
        </motion.div>
      </section>





    </>
  )
}