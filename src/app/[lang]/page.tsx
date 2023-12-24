'use client'
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { motion } from "framer-motion";
import { contact } from "@/image-path";
import { title } from "@/components/primitives";
import { getLocaleStrings } from "@/localization";
import { Button } from "@/components/ui/button"

export default function Home({ params }: { params: { lang: string } }) {

  const strings = getLocaleStrings(params.lang);

  return (
    <>
      {/* Start sections */}

      <section className="flex flex-col gap-4 py-8 mt-4 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-row items-center gap-6">
            <div className="w-24 md:w-32 lg:w-40 xl:w-48">
              <Image
                className="rounded-full"
                src={contact.src}
                alt="lol"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col text-left justify-center gap-4">
                <h1 className={title({ size: "sm" })}>{strings.Start.title}</h1>
                <h1 className={title({ color: "blue", size: "sm" })}>{strings.Start.job}</h1>
              </div>
              <div className="flex gap-3">
                <Button>
                  <GithubIcon className="mr-2 h-4 w-4" /> Github
                </Button>
                <Button>
                  <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Contact card section */}
      <section className="hidden lg:col-span-3 lg:flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      </section>
    </>
  )
}