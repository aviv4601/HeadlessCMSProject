import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const JWT_AUTH_URL = process.env.JWT_AUTH_URL;

const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const res = await fetch(JWT_AUTH_URL + "token", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });
        const user = await res.json();

        console.log("user", user);
        if (user.token) {
          // Any object returned will be saved in `user` property of the JWT
          const loggeinUser = {
            name: user.user_display_name,
            email: user.user_email,
            token: user.token,
          };
          console.log("loggeinUser", loggeinUser);
          return loggeinUser;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile, isNewUser }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
};

// export default NextAuth(authOptions);
const handler = NextAuth(authOptions);

module.exports = {
  GET: handler,
  POST: handler,
};
