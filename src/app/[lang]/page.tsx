'use client'
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import { getLocaleStrings } from "@/localization";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ContactCard";
import { contact } from "@/image-path";

export default function Home({ params }: { params: { lang: string } }) {

  const strings = getLocaleStrings(params.lang);

  return (
    <>
      {/* Start sections */}
      <section className="flex flex-row justify-center lg:justify-between py-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                <Button variant="outline">
                  <GithubIcon className="mr-2 h-4 w-4" /> <span>Github</span>
                </Button>
                <Button variant="outline">
                  <LinkedinIcon className="mr-2 h-4 w-4" /> <span>LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="hidden lg:flex">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ContactCard lang={params.lang} />
          </motion.div>
        </div>
      </section>

    </>
  )
}