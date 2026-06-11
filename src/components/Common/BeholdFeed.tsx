"use client";

import React, { useEffect, useState } from "react";

/* =================================================================
 * Behold Instagram Feed — sudah disesuaikan dengan theme web ini.
 *
 * CARA PAKAI:
 *   1. Buat feed di https://app.behold.so lalu salin "Feed ID"-nya.
 *   2. Tempel Feed ID itu ke DEFAULT_FEED_ID di bawah,
 *      ATAU kirim lewat prop:  <BeholdFeed feedId="feed-id-kamu" />
 *
 * Komponen ini mengambil post dari Behold JSON API dan merender-nya
 * dengan style web sendiri, jadi otomatis ikut warna light/dark theme.
 * ================================================================= */

// 👉 Tempel Behold Feed ID kamu di sini (atau kirim lewat prop `feedId`).
const DEFAULT_FEED_ID = "";

interface BeholdSize {
  mediaUrl?: string;
  width?: number;
  height?: number;
}

interface BeholdPost {
  id: string;
  mediaType?: string;
  permalink?: string;
  thumbnailUrl?: string;
  mediaUrl?: string;
  sizes?: {
    small?: BeholdSize;
    medium?: BeholdSize;
    large?: BeholdSize;
    full?: BeholdSize;
  };
  caption?: string | { text?: string };
  prunedCaption?: string;
}

interface BeholdResponse {
  posts?: BeholdPost[];
  username?: string;
}

interface BeholdFeedProps {
  /** Behold Feed ID. Kalau kosong, pakai DEFAULT_FEED_ID di atas. */
  feedId?: string;
  /** Judul utama section. Kata pada `titleSpan` ditampilkan sebagai aksen. */
  title?: string;
  titleSpan?: string;
  /** Label kecil vertikal di kiri judul (mis. "INSTAGRAM"). */
  subtitle?: string;
  /** Jumlah maksimum post yang ditampilkan. */
  limit?: number;
  /** Username IG untuk tombol "Follow"; kalau kosong diambil dari API. */
  username?: string;
}

function getImageUrl(post: BeholdPost): string {
  return (
    post.sizes?.medium?.mediaUrl ||
    post.sizes?.small?.mediaUrl ||
    post.sizes?.large?.mediaUrl ||
    post.sizes?.full?.mediaUrl ||
    post.mediaUrl ||
    post.thumbnailUrl ||
    ""
  );
}

function getCaption(post: BeholdPost): string {
  if (post.prunedCaption) return post.prunedCaption;
  if (typeof post.caption === "string") return post.caption;
  if (post.caption && typeof post.caption === "object") return post.caption.text || "";
  return "";
}

const BeholdFeed: React.FC<BeholdFeedProps> = ({
  feedId = DEFAULT_FEED_ID,
  title = "Follow Us On",
  titleSpan = "Instagram",
  subtitle = "INSTAGRAM",
  limit = 8,
  username = "",
}) => {
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">(
    feedId ? "loading" : "idle"
  );
  const [resolvedUser, setResolvedUser] = useState<string>(username);

  useEffect(() => {
    if (!feedId) {
      setStatus("idle");
      return;
    }

    let cancelled = false;
    setStatus("loading");

    fetch(`https://feeds.behold.so/${feedId}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Behold responded ${res.status}`);
        return res.json();
      })
      .then((data: BeholdResponse) => {
        if (cancelled) return;
        setPosts(Array.isArray(data.posts) ? data.posts : []);
        if (data.username) setResolvedUser(data.username);
        setStatus("loaded");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, [feedId]);

  const visiblePosts = posts.slice(0, limit);
  const profileUrl = resolvedUser
    ? `https://www.instagram.com/${resolvedUser}/`
    : "https://www.instagram.com/";

  return (
    <div className="behold-area ptb-100">
      <div className="container">
        <div className="section-title d-flex justify-content-center text-center">
          <div>
            {subtitle && <span className="behold-subtitle">{subtitle}</span>}
            <h2>
              {title} <span>{titleSpan}</span>
            </h2>
          </div>
        </div>

        {/* Belum dikonfigurasi */}
        {status === "idle" && (
          <div className="behold-notice">
            <i className="ri-instagram-line" aria-hidden="true"></i>
            <p>
              Tempel <strong>Behold Feed ID</strong> kamu pada komponen{" "}
              <code>&lt;BeholdFeed feedId=&quot;...&quot; /&gt;</code> untuk
              menampilkan feed Instagram di sini.
            </p>
          </div>
        )}

        {/* Loading skeleton */}
        {status === "loading" && (
          <div className="behold-grid">
            {Array.from({ length: limit }).map((_, i) => (
              <div className="behold-item behold-skeleton" key={i} />
            ))}
          </div>
        )}

        {/* Gagal memuat */}
        {status === "error" && (
          <div className="behold-notice behold-notice--error">
            <i className="ri-error-warning-line" aria-hidden="true"></i>
            <p>
              Feed Instagram belum bisa dimuat. Pastikan Feed ID benar dan feed
              sudah aktif di dashboard Behold.
            </p>
          </div>
        )}

        {/* Sukses */}
        {status === "loaded" && visiblePosts.length > 0 && (
          <>
            <div className="behold-grid">
              {visiblePosts.map((post) => {
                const img = getImageUrl(post);
                const caption = getCaption(post);
                const isVideo = (post.mediaType || "").toUpperCase().includes("VIDEO");
                const isAlbum = (post.mediaType || "")
                  .toUpperCase()
                  .includes("CAROUSEL");

                return (
                  <a
                    className="behold-item"
                    key={post.id}
                    href={post.permalink || profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={caption ? caption.slice(0, 80) : "Instagram post"}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img} alt={caption || "Instagram post"} loading="lazy" />

                    {(isVideo || isAlbum) && (
                      <span className="behold-badge" aria-hidden="true">
                        <i className={isVideo ? "ri-play-fill" : "ri-stack-line"} />
                      </span>
                    )}

                    <span className="behold-overlay">
                      <i className="ri-instagram-line" aria-hidden="true" />
                      {caption && <span className="behold-caption">{caption}</span>}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="behold-cta">
              <a
                className="default-btn"
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ri-instagram-line" aria-hidden="true" />{" "}
                {resolvedUser ? `@${resolvedUser}` : "Follow on Instagram"}
              </a>
            </div>
          </>
        )}

        {/* Sukses tapi kosong */}
        {status === "loaded" && visiblePosts.length === 0 && (
          <div className="behold-notice">
            <i className="ri-instagram-line" aria-hidden="true"></i>
            <p>Belum ada post untuk ditampilkan dari feed ini.</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .behold-area {
          background-color: var(--backgroundColor);
        }
        .behold-subtitle {
          display: inline-block;
          color: var(--primaryColor);
          font-weight: 500;
          font-size: 15px;
          letter-spacing: 1.5px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }
        .behold-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .behold-item {
          position: relative;
          display: block;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          border-radius: 10px;
          background-color: var(--cardBg);
          border: 1px solid var(--borderColor);
        }
        .behold-item :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform var(--transition, 0.6s) ease;
        }
        .behold-item:hover :global(img) {
          transform: scale(1.06);
        }
        .behold-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px;
          text-align: center;
          color: var(--whiteColor);
          background: linear-gradient(
            180deg,
            rgba(22, 21, 18, 0.1) 0%,
            rgba(186, 141, 109, 0.82) 100%
          );
          opacity: 0;
          transition: opacity var(--transition, 0.6s) ease;
        }
        .behold-item:hover .behold-overlay {
          opacity: 1;
        }
        .behold-overlay :global(i) {
          font-size: 30px;
          line-height: 1;
        }
        .behold-caption {
          font-size: 13px;
          line-height: 1.5;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .behold-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 2;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--whiteColor);
          background: rgba(22, 21, 18, 0.55);
          font-size: 18px;
        }
        .behold-skeleton {
          background: linear-gradient(
            90deg,
            var(--cardBg) 25%,
            var(--borderColor) 37%,
            var(--cardBg) 63%
          );
          background-size: 400% 100%;
          animation: behold-shimmer 1.4s ease infinite;
        }
        @keyframes behold-shimmer {
          0% {
            background-position: 100% 0;
          }
          100% {
            background-position: 0 0;
          }
        }
        .behold-cta {
          text-align: center;
          margin-top: 40px;
        }
        .behold-cta :global(.default-btn) {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .behold-notice {
          max-width: 620px;
          margin: 0 auto;
          padding: 36px 28px;
          text-align: center;
          border: 1px dashed var(--borderColor);
          border-radius: 12px;
          background-color: var(--cardBg);
          color: var(--textColor);
        }
        .behold-notice :global(i) {
          font-size: 34px;
          color: var(--primaryColor);
          display: block;
          margin-bottom: 12px;
        }
        .behold-notice p {
          margin: 0;
          font-size: 15px;
          line-height: 1.6;
        }
        .behold-notice :global(code) {
          background: var(--backgroundColor);
          border: 1px solid var(--borderColor);
          border-radius: 6px;
          padding: 2px 6px;
          font-size: 13px;
        }
        .behold-notice--error :global(i) {
          color: #d9534f;
        }

        @media (max-width: 991px) {
          .behold-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 767px) {
          .behold-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default BeholdFeed;
