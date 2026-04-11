import { betterAuth } from "better-auth";
import { nextCookies } from 'better-auth/next-js'
// import { magicLink } from "better-auth/plugins";  
import Database from "better-sqlite3"; 

export const auth = betterAuth({
  database: new Database("./emergence.db"),
  emailAndPassword: { 
    enabled: true, 
  }, 
  plugins: [
    nextCookies(),
    // magicLink({ 
    //   sendMagicLink: async ({ email, token, url, metadata }, ctx) => { 
    //       // send email to user
    //   } 
    // }) 

  ],
})