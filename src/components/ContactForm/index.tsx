// @ts-nocheck
"use client"
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { getLocaleStrings } from "@/localization";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "../ui/textarea";
import { toast } from "../ui/use-toast";
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
} from "@/components/ui/sheet";

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

        try {
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

                const responseDiscord = await fetch('/api/discordForm', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(processedData),
                });

                if (responseDiscord.ok) {
                    toast({
                        title: strings.ContactForm.form.sent,
                        description: strings.ContactForm.form.sent2,
                    })
                    setIsOpen(false);
                } else {
                    toast({
                        variant: "destructive",
                        title: strings.ContactForm.form.error,
                        description: strings.ContactForm.form.error2,
                    })
                }
            } else {
                toast({
                    variant: "destructive",
                    title: strings.ContactForm.recaptcha.error,
                    description: strings.ContactForm.recaptcha.error2,
                })
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: strings.ContactForm.recaptcha.error,
                description: strings.ContactForm.recaptcha.error2,
            })
        }
    }

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="sm:min-w-[420px]">
                <SheetHeader>
                    <SheetTitle><span>{strings.ContactForm.title}</span></SheetTitle>
                    <SheetDescription>
                        <span>{strings.ContactForm.subtitle}</span>
                        <br /><br />
                        <span>{strings.ContactForm.subtitle2}</span>
                    </SheetDescription>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            {/* Name Field */}
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{strings.ContactForm.form.name}</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
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
                                        <FormLabel>{strings.ContactForm.form.email}</FormLabel>
                                        <FormControl>
                                            <Input {...field} type="email" />
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
                                        <FormLabel>{strings.ContactForm.form.message}</FormLabel>
                                        <FormControl>
                                            <Textarea {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div>
                                <small className="text-xs text-gray-400">{strings.ContactForm.recaptcha.par1}
                                    <span className="inline-block">
                                        <a
                                            href="https://policies.google.com/privacy"
                                            className="relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gradient-to-r after:from-[#5EA2EF] after:to-[#0072F5] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"> {strings.ContactForm.recaptcha.par2}</a>
                                    </span> {strings.ContactForm.recaptcha.par3}&nbsp;
                                    <span className="inline-block">
                                        <a
                                            href="https://policies.google.com/terms"
                                            className="relative text-xs w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gradient-to-r after:from-[#5EA2EF] after:to-[#0072F5] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-left"> {strings.ContactForm.recaptcha.par4}</a>
                                    </span> {strings.ContactForm.recaptcha.par5}
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