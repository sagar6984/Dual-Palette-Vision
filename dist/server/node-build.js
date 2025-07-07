import i from "path";
import t from "express";
import a from "cors";
const c = (e, o) => {
  const n = {
    message: "Hello from Express server"
  };
  o.status(200).json(n);
};
function l() {
  const e = t();
  return e.use(a()), e.use(t.json()), e.use(t.urlencoded({ extended: !0 })), e.get("/api/ping", (o, n) => {
    n.json({ message: "Hello from Express server v2!" });
  }), e.get("/api/demo", c), e;
}
const r = l(), s = process.env.PORT || 3e3, d = import.meta.dirname, p = i.join(d, "../spa");
r.use(t.static(p));
r.get("*", (e, o) => {
  if (e.path.startsWith("/api/") || e.path.startsWith("/health"))
    return o.status(404).json({ error: "API endpoint not found" });
  o.sendFile(i.join(p, "index.html"));
});
r.listen(s, () => {
  console.log(`🚀 Fusion Starter server running on port ${s}`), console.log(`📱 Frontend: http://localhost:${s}`), console.log(`🔧 API: http://localhost:${s}/api`);
});
process.on("SIGTERM", () => {
  console.log("🛑 Received SIGTERM, shutting down gracefully"), process.exit(0);
});
process.on("SIGINT", () => {
  console.log("🛑 Received SIGINT, shutting down gracefully"), process.exit(0);
});
