import { assertEquals } from "https://deno.land/std/assert/mod.ts";
import { hello } from "../service.ts";

Deno.test("hello returns correct message", () => {
  const result = hello("World");

  assertEquals(result, "Hello World");
});
