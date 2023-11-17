import { int, datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core"

export const depts = mysqlTable("Depts", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  createdAt: datetime("createdAt").notNull(),
})
