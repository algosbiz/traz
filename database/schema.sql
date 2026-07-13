CREATE TABLE IF NOT EXISTS blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  category TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  content_html TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  published_at TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS blogs_status_published_at_idx
  ON blogs (status, published_at DESC);

CREATE TABLE IF NOT EXISTS blog_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  mime_type TEXT NOT NULL,
  object_key TEXT,
  data_base64 TEXT,
  size_bytes INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS blog_assets_blog_id_idx ON blog_assets (blog_id);

-- Upgrade the original Neon-binary schema without losing existing assets.
ALTER TABLE blog_assets ADD COLUMN IF NOT EXISTS object_key TEXT;
ALTER TABLE blog_assets ALTER COLUMN data_base64 DROP NOT NULL;
CREATE UNIQUE INDEX IF NOT EXISTS blog_assets_object_key_idx
  ON blog_assets (object_key)
  WHERE object_key IS NOT NULL;
