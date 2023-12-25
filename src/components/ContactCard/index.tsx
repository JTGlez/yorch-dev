import { useState } from "react";
import { CircleIcon, StarIcon } from "lucide-react";
import { getLocaleStrings } from "@/localization";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import ContactForm from '../ContactForm/index';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface ContactCardProps {
    lang: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ lang }) => {

    const strings = getLocaleStrings(lang);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleShowForm = () => {
        setIsFormOpen(true);
    }

    // TODO: localization

    return (
        <Card className="min-w-[350px] max-w-[500px]">
            <CardHeader className="grid items-start gap-4 space-y-0">
                <div className="space-y-3">
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row items-end gap-2">
                            <Avatar>
                                <AvatarImage src="https://cdn.discordapp.com/avatars/955942785482121216/068c7219ac05980c34ecd512f8fb9e36.png?size=320" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <CardTitle><span className="text-2xl">JTGlez</span></CardTitle>
                        </div>
                        <Button variant="secondary" onClick={handleShowForm}><span>Contacto</span></Button>
                        <ContactForm lang={lang} isOpen={isFormOpen} setIsOpen={setIsFormOpen} />
                    </div>

                    <Separator />
                    <CardDescription className="">
                        <span>I'm a student of Computer Engineering at FI UNAM. My passion lies in AI-based algorithms, data analytics, databases, and blockchain, and I keep myself up-to-date with the latest advancements in mainstream CPUs and GPUs.
                        </span>
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                        <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
                        <span>TypeScript</span>
                    </div>
                    <div className="flex items-center">
                        <StarIcon className="mr-1 h-3 w-3" />
                        <span>20k</span>
                    </div>
                    <div><span>Updated April 2023</span></div>
                </div>
            </CardContent>
        </Card>
    )
}

export default ContactCard;