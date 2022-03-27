import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import EmailProvider from "next-auth/providers/email";
import nodemailer from "nodemailer"

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM,

            async sendVerificationRequest({
                identifier: email,
                url,
                provider: { server, from },
            }) {
                const { host } = new URL(url)
                const transport = nodemailer.createTransport(server)
                await transport.sendMail({
                    to: email,
                    from,
                    subject: `Sign in to ${host}`,
                    text: `Sign in to ${host}\n${url}\n\n`,
                })
            }
        })
    ],
})