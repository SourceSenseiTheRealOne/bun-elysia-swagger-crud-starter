import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import postsRoutes from "./routes/posts";

const app = new Elysia();

app
  .use(swagger())
  .group("/api", (app) => app.use(postsRoutes))
  .listen(process.env.PORT || 3049);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
