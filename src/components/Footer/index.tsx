import { getLocaleStrings } from "@/localization";

interface FooterProps {
    lang: string;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const strings = getLocaleStrings(lang);

    return (
        <footer className=" bg-gray-100 dark:bg-zinc-900 md:flex md:items-center md:justify-between p-6 opacity-100 xl:opacity-35">
            <div className="container flex flex-col md:flex-row items-center text-center gap-2 justify-between">
                <span
                    className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©
                    {currentYear}
                    <a
                        href="https://github.com/JTGlez"
                        className="hover:underline"
                        target="_blank"> JTGlez.</a>
                </span>
                <p className="text-sm text-gray-500 sm:text-center dark:text-gray-400">{strings.Footer.credits}</p>
            </div>
        </footer>
    )
}

export default Footer;