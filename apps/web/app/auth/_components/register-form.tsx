"use client"

import { useForm } from "react-hook-form"
import { AuthFormWrapper } from "./auth-form-wrapper"
import * as z from "zod";
import { RegisterSchema } from '@repo/schemas/user-schema'
import { zodResolver } from '@hookform/resolvers/zod';
import { 
    Form,
    FormItem,
    FormControl,
    FormMessage,
    FormLabel,
    FormField
} from "@repo/ui/components/form";
import { Input } from "@repo/ui/components/input";
import { Button } from "@repo/ui/components/button";
import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { RegisterAction } from "~/actions/register-action";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";


export const Registerform = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string| undefined>("");
    const [isPending, setTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            username: ""
        }
    })

    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        setError("");
        setSuccess("");

        setTransition(() => {
            RegisterAction(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                })
        })
    }

    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{
                duration: 1.4
            }}
            className="flex flex-col items-center w-[350px] md:w-[50%] lg:w-2/3">
            <AuthFormWrapper
                headerLabel="Register to continue to blinde"
                backButtonLabel="Already have an account?"
                backButtonHref="/auth/login"
                showSocials
            >
                <Form {...form}>
                    <form
                        className="space-y-8" 
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="space-y-4">
                            <FormField 
                                control={form.control}
                                name="email"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Email
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                {...field}
                                                type="email"
                                                placeholder="email@gmail.com"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="username"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            username
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                {...field}
                                                type="text"
                                                placeholder="what's your name?"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField 
                                control={form.control}
                                name="password"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>
                                            Password
                                        </FormLabel>
                                        <FormControl>
                                            <Input 
                                                {...field}
                                                type="password"
                                                placeholder="******"
                                                disabled={isPending}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error}/>
                        <FormSuccess message={success}/>
                        <Button 
                            type="submit"
                            className="w-full text-sm font-semibold" 
                            size="sm"
                            disabled={isPending}
                        >
                            Register
                        </Button>
                    </form>
                </Form>
            </AuthFormWrapper>
        </motion.div>
    )
}