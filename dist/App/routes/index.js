"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_router_1 = require("../modules/User/user.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/users',
        route: user_router_1.UserRouter,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
