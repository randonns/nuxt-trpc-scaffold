import { int, datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core"
import { relations } from "drizzle-orm"

export const depts = mysqlTable("Depts", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  createdAt: datetime("createdAt").notNull(),
})

export const users = mysqlTable("Users", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  age: int("age").notNull(),
  deptId: int("deptId").notNull(),
  createdAt: datetime("createdAt").notNull(),
})
