import { kaslana } from "@/image-path"
import Image from "next/image"
import Link from "next/link"

export default function index() {
    return (
        <section className="flex flex-col items-center pt-[8rem]">
            <h1 className="text-5xl font-bold text-gray-700 dark:text-gray-300 mb-4">Under Construction</h1>
            <div className="mb-6">
                <Image
                    src={kaslana}
                    alt="Under Construction"
                    width={200}
                    height={200}
                    className="w-48 h-48 rounded-full object-cover"
                />
            </div>
            <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-6">
                This page is currently under construction. Please check back later for updates!
            </p>
            <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="/"
            >
                Back to Home
            </Link>
        </section>
    )
}
