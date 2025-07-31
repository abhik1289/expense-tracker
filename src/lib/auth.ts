import { AuthOptions, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();
// prisma.user.create
const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET!,
  jwt: {
    secret: process.env.NEXTAUTH_SECRET!,
  },
  pages: {
    signIn: "/sign-in",
    error: "/error",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log(user)
        // console.log("USER IS NEXT_AUTH", user);
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.picture = user.image;
      }

      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
        if(user){
            console.log(user)
        }
    //   if (user) {
    //     // console.log("USEr", user)
    //     const findUser = await prisma.user.findFirst({
    //       where: { email: user.email },
    //       select: {
    //         isPremium: true,
    //         userDetails: true,
    //       },
    //     });
    //     if (findUser) {
    //     //   session.user.isVerified = findUser?.userDetails?.isVerified ?? false;
    //     //   session.user.isPremium = findUser.isPremium;
    //     }
    //     session.user.id = user.id;
    //     session.user.email = user.email;
    //     session.user.name = user.name;
    //     session.user.picture = user.picture;
    //   }
      return session;
    },
    async signIn({ account, profile }) {
      if (account && account.provider === "google") {
        if (
          (profile && profile.email?.endsWith("@kiit.ac.in")) ||
          (profile && profile.email === "soumyadipmaityjee1@gmail.com") ||
          (profile && profile.email === "theabhik2020@gmail.com") ||
          (profile && profile.email === "kprep20224@gmail.com") ||
          (profile && profile.email === "asthasingh4505@gmail.com")
           ||
          (profile && profile.email === "abhik2005personal@gmail.com") 
          || (profile && profile.email === "dwivediananya640@gmail.com") ||
          (profile && profile.email === "gayen4961@gmail.com")
        ) {
          const users = await prisma.user.findFirst({
            where: {
              email: profile.email,
            },
          });

          return true;
        } else {
          throw new Error("Only KIIT email addresses are allowed.");
        }
      }
      return false;
    },
  },
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };