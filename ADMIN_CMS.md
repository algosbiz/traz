# DMG Blog CMS Setup

The CMS is available at `/admin/` and uses Neon Postgres.

## 1. Create the Neon database

Create a project in Neon and copy its connection string. Add it to `.env.local`:

```env
DATABASE_URL=postgresql://user:password@host.neon.tech/neondb?sslmode=require
```

## 2. Create admin credentials

Generate a password hash and session secret:

```bash
npm run admin:credentials -- "use-a-strong-password-here"
```

Copy the two generated values into `.env.local` together with the admin email:

```env
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD_HASH=generated-bcrypt-hash
ADMIN_SESSION_SECRET=generated-random-secret
```

The generated password hash contains escaped dollar signs (`\$`). Copy it
exactly as printed; removing the backslashes causes Next.js to alter the hash
while loading `.env.local`.

Add the same variables to the production environment in Vercel.

## 3. Configure Cloudflare R2

Create an R2 bucket and an R2 API token with **Object Read & Write** permission
scoped to that bucket. Add the S3 credentials to `.env.local`:

```env
R2_ACCOUNT_ID=your-cloudflare-account-id
R2_ACCESS_KEY_ID=your-r2-access-key-id
R2_SECRET_ACCESS_KEY=your-r2-secret-access-key
R2_BUCKET_NAME=dmg-blog-assets
```

`R2_PUBLIC_URL` is optional. Leave it empty to keep the bucket private and
serve images through `/api/blog-assets/:id`. For production direct delivery,
connect a custom domain to the bucket and set, for example:

```env
R2_PUBLIC_URL=https://assets.example.com
```

The general `CLOUDFLARE_API_TOKEN` is not used by the S3 client; R2 provides a
separate Access Key ID and Secret Access Key when its API token is created.

## 4. Create tables and seed the current article

```bash
npm run db:setup
```

This command creates the `blogs` and `blog_assets` tables, uploads the existing
chimney image to Neon, and seeds the current chimney article. It is safe to run
again; the seed is skipped when its slug already exists.

For databases created before R2 storage was enabled, run setup again to apply
the non-destructive schema upgrade, then migrate the existing image:

```bash
npm run db:setup
npm run r2:migrate
```

## Image storage

Cover and inline image binaries are stored in Cloudflare R2. Neon stores only
their metadata, blog relationship, and R2 object key. Images are addressed via
`/api/blog-assets/:id`. Uploads accept JPG, PNG, WebP, and GIF images up to 4 MB.

## Publishing

- Draft blogs are visible only in the admin panel.
- Published blogs appear on `/blogs/`, have their own slug page, and are added
  to the dynamic sitemap.
- HTML produced by the editor is sanitized on every create or update request.
