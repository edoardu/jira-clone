import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { loginSchema } from "../schemas";

const app = new Hono()
  .post(
    "/login", 
    zValidator("json", loginSchema),
    async (c) => {
      const { email, password } = c.req.valid("json");

      return c.json({ message: "Login" });
    }
  );

export default app;