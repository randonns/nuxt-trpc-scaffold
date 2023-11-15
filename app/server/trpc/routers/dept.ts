import { router, publicProcedure } from "../trpc"

const depts = [
  { id: 1, name: "기획팀", createdAt: new Date().getTime() },
  { id: 2, name: "개발팀", createdAt: new Date().getTime() },
  { id: 3, name: "디자인팀", createdAt: new Date().getTime() },
  { id: 4, name: "운영팀", createdAt: new Date().getTime() },
  { id: 5, name: "영업팀", createdAt: new Date().getTime() },
]

export default router({
  all: publicProcedure.query(() => depts),
})
