import { Router } from "https://deno.land/x/oak/mod.ts";
import { hello } from "./service.ts";

const router = new Router();

router.get("/hello/:name", (ctx) => {
  const name = ctx.params.name;

  ctx.response.body = {
    message: hello(name!),
  };
});

export default router;
