import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import LinkedInProvider from 'next-auth/providers/linkedin';

console.log(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET);
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID!,
      clientSecret: process.env.FACEBOOK_APP_SECRET!,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_APP_ID!,
      clientSecret: process.env.LINKEDIN_APP_SECRET!,
    }),
  ],
  jwt: {
    maxAge: 30 * 86400,
  },
  pages: {
    signIn: '/signin',
  },
});
