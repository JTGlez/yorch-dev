"use client"
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { getLocaleStrings } from "@/localization"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import { Textarea } from "../ui/textarea";
import { toast, useToast } from "../ui/use-toast";
import { Toaster } from "@/components/ui/toaster"

interface ContactFormProps {
    lang: string;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormProps> = ({ lang, isOpen, setIsOpen }) => {

    const strings = getLocaleStrings(lang);
    const { executeRecaptcha } = useGoogleReCaptcha();

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
        const processedData = { ...data };

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

            if (responseDiscord.ok) {
                console.log('Message sent to Discord');
                toast({
                    title: "¡Mensaje enviado!",
                    description: "Me pondré en contacto contigo próximamente.",
                })
                setIsOpen(false);
            } else {
                console.error('Failed to send message to Discord');
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "No se pudo enviar el mensaje a Discord.",
                })
            }
        } else {
            console.log(`Failure with score: ${response?.data?.score}`);
            toast({
                title: "Error",
                description: "La verificación de reCAPTCHA falló.",
            })
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="min-w-[420px]">
                <SheetHeader>
                    <SheetTitle><span>Contacto</span></SheetTitle>
                    <SheetDescription>
                        <span>Envía un mensaje :)</span>
                    </SheetDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                                            <Textarea
                                                placeholder="Tell us a little bit about yourself"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}

                            />
                            <div>
                                <small className="text-xs text-gray-400">This site is protected by reCAPTCHA and the Google
                                    <span className="inline-block">
                                        <a
                                            href="https://policies.google.com/privacy"
                                            className="relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gradient-to-r after:from-[#5EA2EF] after:to-[#0072F5] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"> Privacy Policy</a>
                                    </span> and&nbsp;
                                    <span className="inline-block">
                                        <a
                                            href="https://policies.google.com/terms"
                                            className="relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gradient-to-r after:from-[#5EA2EF] after:to-[#0072F5] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"> Terms of Service</a>
                                    </span> apply.
                                </small>
                            </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default ContactForm;