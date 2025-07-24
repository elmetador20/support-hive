"use server"
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose";
import User from "@/models/User";
import Payments from "@/models/Payments";
import connectDB from "@/app/db/connectDb";

export const authOptions = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDB();
        const email = user?.email;
        if (!email) return false;

        const currentUser = await User.findOne({ email });

        if (!currentUser) {
          const newUser = new User({
            email,
            Username: email.split("@")[0],
          });
          await newUser.save();
          user.name = newUser.username;
        }

        return true;
      }
    },

    async session({ session }) {
      await connectDB();
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser?.username || session.user.name;
      return session;
    },
  },
});

export { authOptions as GET, authOptions as POST };
