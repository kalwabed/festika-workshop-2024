import { expressjwt as jwt } from "express-jwt";

const whitelistRoutes = [
  "/login",
  "/signup",
  { url: "/api/events", methods: ["GET"] },
];

export const jwtAuth = jwt({
  secret: "very-secret-KEY",
  algorithms: ["HS512"],
}).unless({ path: whitelistRoutes });
