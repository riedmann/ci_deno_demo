import { Router } from "https://deno.land/x/oak/mod.ts";
import { hello } from "./service.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = {
    name: "Deno REST Lab API",
    version: "1.0.0",
    description: "A simple REST API built with Deno and Oak",
    endpoints: [
      {
        path: "/",
        method: "GET",
        description: "API information and available endpoints",
      },
      {
        path: "/hello/:name",
        method: "GET",
        description: "Returns a greeting message for the given name",
      },
    ],
    timestamp: new Date().toISOString(),
  };
});

router.get("/hello/:name", (ctx) => {
  const name = ctx.params.name;

  ctx.response.body = {
    message: hello(name!),
  };
});

export default router;
