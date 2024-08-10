import { Router } from "express";
import { UserRouter } from "../modules/User/user.router";

const router = Router()
const moduleRoutes = [
    {
      path: '/users',
      route: UserRouter,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;