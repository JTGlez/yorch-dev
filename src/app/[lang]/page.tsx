'use client'
import Image from "next/image";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { subtitle, title } from "@/components/primitives";
import { getLocaleStrings } from "@/localization";
import { Button } from "@/components/ui/button";
import ContactCard from "@/components/ContactCard";
import ContentCard from "@/components/ContentCard";
import { contact, efset, scrum } from "@/image-path";
import SwiperCard from "@/components/SwiperCard";
import PhotoTitle from "@/components/PhotoTitle";
import { airline, mining, journal, soon } from "@/image-path";
import { google, oracleone } from "@/image-path";
import { motion } from "framer-motion";

export default function Home({ params }: { params: { lang: string } }) {

  // TODO: Add final content from Headless CMS
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

  const staticCerts = [
    {
      image: google.src,
      title: 'Google Career Certificates',
      description: 'Data Analytics',
    },
    {
      image: oracleone.src,
      title: 'Oracle ONE',
      description: 'Front-End Development',
    },
    {
      image: scrum.src,
      title: 'Scrum Fundamentals',
      description: 'Accreditation Body for Scrum and Agile',
    },
    {
      image: efset.src,
      title: 'EFSET English Certificate',
      description: 'C2 Proficient (91/100)',
    }
  ];


  const mockContent = Array.from({ length: 1 }, (_, i) => ({
    image: soon.src,
    title: `Soon!`,
    description: ':)',
  }));

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <section className="grid-layout py-14 items-start">

          <PhotoTitle lang={params.lang} />
          <ContactCard lang={params.lang} />

          <section className="grid-layout-cards">
            <ContentCard title={'Projects'} content={staticProjects} isProject />
            <ContentCard title="Blog" content={mockContent} />
          </section>

          <SwiperCard title="Certifications" content={staticCerts} />
        </section>
      </ motion.div>
    </>
  )
}