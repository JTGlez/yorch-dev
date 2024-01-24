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
import PhotoTitle from "@/components/PhotoTitle";

export default function Home({ params }: { params: { lang: string } }) {

  return (
    <>
      <section className="grid-layout py-14">

        <PhotoTitle lang={params.lang} />
        <ContactCard lang={params.lang} />

        <section className="grid-layout-cards">
          <ContentCard />
          <ContentCard />
        </section>

        <SwiperCard />
      </section>
    </>
  )
}