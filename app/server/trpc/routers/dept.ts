import { router, publicProcedure } from "../trpc"
import { db } from "../../db"

export default router({
  all: publicProcedure.query(async () => await db.query.depts.findMany()),
})
