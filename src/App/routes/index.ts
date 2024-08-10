import { Router } from "express";
import { UserRouter } from "../modules/User/user.router";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { CategoryRouter } from "../modules/Categories/category.router";

const router = Router()
const moduleRoutes = [
    {
      path: '/users',
      route: UserRouter,
    },
    {
      path: '/categorys',
      route: CategoryRouter,
    },
    {
      path: '/auth',
      route: AuthRoutes,
    },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;