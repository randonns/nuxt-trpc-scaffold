import { router } from "../trpc"
import dept from "./dept"
import user from "./user"

export const appRouter = router({
  dept,
  user,
})

export type AppRouter = typeof appRouter
