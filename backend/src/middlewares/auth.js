import { expressjwt as jwt } from "express-jwt";

const whitelistRoutes = ["/login", "/signup"];

export const jwtAuth = jwt({
  secret: "very-secret-KEY",
  algorithms: ["HS512"],
}).unless({ path: whitelistRoutes });
