'use client'
import { useState } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { mxflag, usflag } from '@/image-path';

export default function LangToggle() {

    const pathName = usePathname();
    const currentLang = pathName.split('/')[1];
    const [lang, setLang] = useState(currentLang)

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    // Returns the svg flag for the toggle icon using the current lang in the path
    const newLang = lang === 'en' ? 'es' : 'en';
    const flag = lang === 'es' ? mxflag : usflag;

    return (
        <>
            <div className='flex'>
                <Link
                    href={redirectedPathName(newLang)}
                    className='rounded-md border px-3 py-2 bg-gray-200 dark:bg-slate-800'
                >
                    <Image
                        src={flag}
                        height={20}
                        width={20}
                        alt="Follow us on Twitter"
                    />
                </Link>
            </div>
        </>
    )
}