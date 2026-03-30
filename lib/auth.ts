import { betterAuth } from "better-auth";
// import { createKysely } from "@better-auth/kysely"
// import { SqliteDialect } from "kysely"
import { nextCookies } from 'better-auth/next-js'
// import { magicLink } from "better-auth/plugins";  
import Database from "better-sqlite3"; 

const sqliteDB = new Database("../emergence.db");

export const auth = betterAuth({
  database: sqliteDB,
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