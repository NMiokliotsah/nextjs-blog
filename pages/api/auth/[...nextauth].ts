import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../../../helpers/auth";
import { closeConnectionDb, connectToDatabase } from "../../../helpers/db";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const db = await connectToDatabase();
        const user = await db.collection('users').findOne({ email: credentials?.email });

        if (!user) {
          throw new Error('No user found!');
        }

        const isValid = await verifyPassword(credentials!.password, user.password);

        if (!isValid) {
          closeConnectionDb();
          throw new Error('Could not log you in');
        }

        closeConnectionDb();

        return { email: user.email };
      }
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SOME_SECRET,
});
