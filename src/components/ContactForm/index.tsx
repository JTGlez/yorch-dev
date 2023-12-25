"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { getLocaleStrings } from "@/localization"
import { Dispatch, SetStateAction, useState } from "react"
import { useRef } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios"

interface ContactFormProps {
    lang: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

//TODO: Clean this code plz and localization

const ContactForm: React.FC<ContactFormProps> = ({ lang, isOpen, setIsOpen }) => {

    const strings = getLocaleStrings(lang);
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [isCaptchaCompleted, setIsCaptchaCompleted] = useState(false);

    const FormSchema = z.object({
        username: z.string().min(2, {
            message: "Username must be at least 2 characters.",
        }),
        email: z.string().email({
            message: "Please enter a valid email address.",
        }),
        message: z.string().min(10, {
            message: "Message must be at least 10 characters.",
        }),
        captchaToken: z.string().optional(),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        }
    })

    const onSubmit = async (data: any) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log("Hola")
        const processedData = { ...data };
        console.log(processedData);

        if (!executeRecaptcha) {
            console.log("not available to execute recaptcha")
            return;
        }

        const gRecaptchaToken = await executeRecaptcha('inquirySubmit');

        const response = await axios({
            method: "post",
            url: "/api/recaptchaSubmit",
            data: {
                gRecaptchaToken,
            },
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
        });

        if (response?.data?.success === true) {
            console.log(`Success with score: ${response?.data?.score}`);
            // Send data to your API route
            console.log(processedData)
            const responseDiscord = await fetch('/api/discordForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(processedData),
            });

            if (!responseDiscord.ok) {
                console.error('Failed to send message to Discord');
            }
        } else {
            console.log(`Failure with score: ${response?.data?.score}`);
        }

    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="w-[400px]">
                <SheetHeader>
                    <SheetTitle><span>Contacto</span></SheetTitle>
                    <SheetDescription>
                        <span>Envía un mensaje :)</span>
                    </SheetDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} type="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* Message Field */}
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Input placeholder="shadcn" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default ContactForm;