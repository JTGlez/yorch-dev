"use client"

import * as React from "react";
import ModeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { contact } from "@/image-path";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-10 gap-4">
			{/* Start sections */}
			<section className="col-span-10 lg:col-span-7 flex flex-col items-center gap-4 py-8 md:py-10">
				<div className="flex flex-row items-stretch gap-8">
					<div className="w-[150px]">
						<Image
							className="rounded-full"
							src={contact.src}
							alt="lol"
							width={300}
							height={300}
						/>
					</div>
					<div className="flex flex-col gap-5">
						<div className="flex flex-col max-w-2xl text-left justify-center gap-4">
							<h1 className={title()}>{strings.Start.title}</h1>
							<h1 className={title({ color: "blue" })}>{strings.Start.job}</h1>
						</div>
						<div className="flex gap-3">
							<Link
								isExternal
								className={buttonStyles({ variant: "bordered", radius: "full" })}
								href={siteConfig.links.github}
							>
								<GithubIcon size={20} />
								GitHub
							</Link>
							<Link
								isExternal
								className={buttonStyles({ variant: "bordered", radius: "full" })}
								href={siteConfig.links.github}
							>
								<GithubIcon size={20} />
								GitHub
							</Link>
						</div>
					</div>
				</div>
			</section>
			{/* Contact card section */}
			<section className="hidden lg:col-span-3 lg:flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<ContactCard lang={params.lang} />
			</section>
		</div>
      <ModeToggle />
    </>
  )
}