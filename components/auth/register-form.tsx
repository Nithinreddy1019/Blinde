"use client"

import { CardWrapper } from "@/components/auth/card-wrapper";
import { RegisterSchema } from "@/schemas";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { 
    Form,
    FormField,
    FormControl,
    FormLabel,
    FormMessage,
    FormItem 
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const RegisterForm = () => {


    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            username: ""
        }
    });


    const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
        startTransition(() => {
            console.log(values);
        })
    };

    return (
        <CardWrapper
            headerLabel="Register"
            subHeaderLabel="to continue to Blinde"
            backButtonLabel="Already have an account?"
            backButtonLinkLabel="Login"
            backButtonHref="/auth/login"
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
                                    Username
                                </FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field}
                                        disabled={isPending}
                                        type="text"
                                        placeholder="John Doe"
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
                                        disabled={isPending}
                                        type="password"
                                        placeholder="******"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Register
                    </Button>
                </form>
            </Form>

        </CardWrapper>
    )
}