import { randomBytes } from "crypto";
import { hash } from "bcryptjs";

const password = process.argv[2];

if (!password || password.length < 12) {
  console.error('Usage: npm run admin:credentials -- "your-password-with-12+-characters"');
  process.exit(1);
}

const passwordHash = await hash(password, 12);
// Next.js expands `$VARIABLE` references in .env files. Escaping each dollar
// keeps the bcrypt hash intact after .env.local is loaded.
console.log(`ADMIN_PASSWORD_HASH=${passwordHash.replaceAll("$", "\\$")}`);
console.log(`ADMIN_SESSION_SECRET=${randomBytes(48).toString("base64url")}`);
