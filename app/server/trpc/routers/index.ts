import { router } from "../trpc"
import dept from "./dept"

export const appRouter = router({
  dept,
})

export type AppRouter = typeof appRouter
