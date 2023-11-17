import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"
import { dbHost, dbDatabase, dbUser, dbPassword } from "../env"
import * as schema from "./schema"

const poolConnection = mysql.createPool({
  host: dbHost,
  database: dbDatabase,
  user: dbUser,
  password: dbPassword,
})

export const db = drizzle(poolConnection, { schema, mode: "default" })
