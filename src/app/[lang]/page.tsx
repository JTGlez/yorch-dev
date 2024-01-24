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
import { airline, mining, journal, soon } from "@/image-path";

export default function Home({ params }: { params: { lang: string } }) {

  const staticProjects = [
    {
      image: mining.src,
      title: 'Mining Analytics',
      description: 'Data Mining platform built with Dash, including EDA and ML Algorithms.'
    },
    {
      image: journal.src,
      title: 'JournalApp',
      description: 'A minimal app to write notes with React-Redux/Toolkit.'
    },
    {
      image: airline.src,
      title: 'SQL Airlines',
      description: 'An Oracle DB written in PL/SQL that implements the business logic for an airline.'
    }
  ];

  const mockContent = Array.from({ length: 1 }, (_, i) => ({
    image: soon.src,
    title: `Soon!`,
    description: ':)',
  }));

  return (
    <>
      <section className="grid-layout py-14">

        <PhotoTitle lang={params.lang} />
        <ContactCard lang={params.lang} />

        <section className="grid-layout-cards">
          <ContentCard title={'Projects'} content={staticProjects} />
          <ContentCard title="Blog" content={mockContent} />
        </section>

        <SwiperCard />
      </section>
    </>
  )
}