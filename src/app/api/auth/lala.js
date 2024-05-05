

import {
  getServerSession,
} from "next-auth";
// import Credentials from "node_modules/next-auth/providers/credentials";
import Credentials from "next-auth/providers/credentials";
// import { userService } from "./services/userService";
import { register, login } from "../../services/user";

import NextAuth from "next-auth";


export const authOptions = {
  session: {
    strategy: "jwt", //(1) the default is jwt when no adapter defined, we redefined here to make it obvious what strategy that we use 
  },
  callbacks: {
    async jwt({ token, account, profile }) { //(2) 
      console.log("------------ JWT ------------");
      console.log({token}, {account}, {profile});
      if(account && account.type === "credentials") {
        token.userId = account.providerAccountId; // this is Id that coming from authorize() callback 
      }
      return token;
    },
    async session({ session, token, user }) { //(3)
      console.log("------------ SESSION ------------");
      console.log({session}, {token}, {user});
      session.user.id = token.userId;
      return session;
    },
  },
  pages: {
    signIn: '/login', //(4) custom signin page path
  },
  providers: [
    // Credentials({
    //   name: "Credentials",
    //   credentials: {
    //     username: { label: "Username", type: "text", placeholder: "username" },
    //     password: { label: "Password", type: "password" }
    //   },
    //   async authorize(credentials, req) {
    //      const { username, password } = credentials;

    //     return register(username, password); //(5) 
    //   }
    // }),




    Credentials({
      id: "login",
      name: "Login",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, password } = credentials;

        return login(email, password);
        // Aquí iría tu lógica para verificar las credenciales de inicio de sesión
      }
    }),
    Credentials({
      id: "register",
      name: "Register",
      credentials: {
        email: { label: "Email", type: "email" },
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { email, username, password } = credentials;
        return register(email, username, password); // Aquí iría tu lógica para registrar un nuevo usuario
      }
    })
  ],
};

export const getServerAuthSession = () => getServerSession(authOptions); //(6)

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
// import axios from 'axios'

// const apiurl = process.env.NEXT_PUBLIC_API;
// const apiVersion = NEXT_PUBLIC_API_VERSION;

// export default NextAuth({
//   providers: [
//     Providers.Credentials({
//       name: 'Credentials',
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: {  label: "Password", type: "password" }
//       },
//       authorize: async (credentials) => {
//         console.log(credentials);
//         try {
//           // Aquí debes reemplazar 'http://localhost:3000' con la URL de tu backend
//           console.log(`${apiurl}/${apiVersion}/login`)
//           const res = await axios.post(`${apiurl}/${apiVersion}/login`, {
//             username: credentials.username,
//             password: credentials.password
//           })

//           if (res.data) {
//             return res.data // Si las credenciales son válidas, devolvemos los datos del usuario
//           } else {
//             // Si las credenciales no son válidas, intentamos registrar al usuario
//             const res = await axios.post(`${apiurl}/${apiVersion}/register`, {
//               username: credentials.username,
//               password: credentials.password
//             })

//             if (res.data) {
//               return res.data // Si el registro es exitoso, devolvemos los datos del usuario
//             } else {
//               return null // Si el registro no es exitoso, devolvemos null
//             }
//           }
//         } catch (error) {
//           throw new Error(error) // Manejar error
//           debugger;
//         }
//       }
//     })
//   ],
//   session: {
//     jwt: true,
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },
//     async session(session, token) {
//       session.user.id = token.id;
//       return session;
//     },
//   },
// })
