import { eq } from "drizzle-orm"
import { router, publicProcedure } from "../trpc"
import { db } from "../../db"
import { users, depts } from "../../db/schema"

export default router({
  all: publicProcedure.query(async () => {
    const result = await db.select().from(users).leftJoin(depts, eq(users.deptId, depts.id))
    return result.map((item) => ({
      ...item.Users,
      dept: item.Depts,
    }))
  }),
})
