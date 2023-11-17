import { eq } from "drizzle-orm"
import { z } from "zod"
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

  create: publicProcedure
    .input(z.object({ name: z.string().min(1), age: z.number(), deptId: z.number() }))
    .mutation(async ({ input }): Promise<void> => {
      await db.insert(users).values({ ...input, createdAt: new Date() })
    }),
})
