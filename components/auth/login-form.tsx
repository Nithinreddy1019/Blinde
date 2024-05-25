"use client"

import { CardWrapper } from "@/components/auth/card-wrapper";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { Input } from "../ui/input";
import { Button } from "../ui/button";


export const LoginForm = () => {

    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        startTransition(() => {
            console.log(values);
        });
    };

    return (
        <CardWrapper
            headerLabel="signin"
            subHeaderLabel="to continue to blinde"
            backButtonLabel="Don't have an account?"
            backButtonLinkLabel="Sign up"
            backButtonHref="/auth/register"
        >

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8"
                >
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
                                        disabled={isPending}
                                        type="email"
                                        placeholder="JohnDoe@gmail.com"
                                    />
                                </FormControl>
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
                                        disabled={isPending}
                                        type="password"
                                        placeholder="******"
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                <Button
                    disabled={isPending}
                    type='submit'
                    className='w-full'
                >
                    Login
                </Button>

                </form>
            </Form>

        </CardWrapper>
    )
}