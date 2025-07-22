"use server"
import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"


export const authOptions = NextAuth({

  providers: [
    // OAuth authentication providers
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      
    }),
  
  ],
   secret: process.env.NEXTAUTH_SECRET,
})
console.log("GitHub ID:", process.env.GITHUB_ID)
console.log("GitHub Secret:", process.env.GITHUB_SECRET)


export {authOptions as GET, authOptions as POST}
