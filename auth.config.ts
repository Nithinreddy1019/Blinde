import type { NextAuthConfig } from "next-auth"
import credentials from "next-auth/providers/credentials"
import github from "next-auth/providers/github"
import google from "next-auth/providers/google"

import bcrypt from "bcryptjs";
import * as z from "zod";
import { LoginSchema } from "./schemas";
import { getUserByEmail } from "./data/user";
 
export default { providers: [
    credentials({
        async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials);

            if(validatedFields.success){
                const { email, password } = validatedFields.data;

                const user = await getUserByEmail(email);

                if(!user || !user.password) return null;

                const passwordMatch = await bcrypt.compare(password, user.password);

                if(passwordMatch) return user;

            }

            return null
        }
    }),
    github({

    }),
    google({

    })
] } satisfies NextAuthConfig