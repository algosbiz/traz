// Ambient declarations for non-code side-effect imports.
//
// `import "@/styles/globals.css"` (App Router global stylesheet) needs a module
// declaration, otherwise stricter TypeScript setups — and some editor TS
// servers — report: "Cannot find module or type declarations for side-effect
// import of '@/styles/globals.css'". Next.js bundles the CSS itself; this only
// satisfies the type checker. `*.module.css` still resolves to Next's typed
// class-map declaration because a more specific wildcard wins.
declare module "*.css";
declare module "*.scss";
declare module "*.sass";
