import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Bun Home Page", { status: 200 });
    } else if (url.pathname === "/about") {
      return new Response("This is Bun about page", { status: 200 });
    } else {
      return new Response("Page not found", { status: 404 });
    }
  },
  port: 3000,
  hostname: "127.0.0.2",
});
