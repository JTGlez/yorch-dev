import { useState } from "react";
import { CircleIcon, DatabaseIcon } from "lucide-react";
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
import { motion } from "framer-motion";

interface ContactCardProps {
    lang: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ lang }) => {

    const strings = getLocaleStrings(lang);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleShowForm = () => {
        setIsFormOpen(true);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
        >
            <Card className="w-full">
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
                            <Button variant="secondary" onClick={handleShowForm}><span>{strings.ContactForm.title}</span></Button>
                            <ContactForm
                                lang={lang}
                                isOpen={isFormOpen}
                                setIsOpen={setIsFormOpen}
                            />
                        </div>
                        <Separator />
                        <CardDescription>
                            <span>{strings.ContactCard.description.par1}</span>
                            <br /><br />
                            <span>{strings.ContactCard.description.par2}</span>
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
                            <CircleIcon className="mr-1 h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>Python</span>
                        </div>
                        <div className="flex items-center">
                            <DatabaseIcon className="mr-1 h-3 w-3" />
                            <span>SQL</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}

export default ContactCard;