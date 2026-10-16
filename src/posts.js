import { marked } from "marked";

// Every file in src/posts/*.md becomes a blog post. See README.md for the format.
const files = import.meta.glob("./posts/*.md", { query: "?raw", import: "default", eager: true });

function parse(raw, path) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const meta = {};
  (m ? m[1] : "").split(/\r?\n/).forEach((l) => {
    const i = l.indexOf(":");
    if (i < 1) return;
    let v = l.slice(i + 1).trim();
    if (v === "true") v = true;
    else if (v === "false") v = false;
    meta[l.slice(0, i).trim()] = v;
  });
  return { slug: path.split("/").pop().replace(/\.md$/, ""), icon: "chip", ...meta, html: marked.parse(m ? m[2] : raw) };
}

export const posts = Object.entries(files)
  .map(([p, raw]) => parse(raw, p))
  .filter((p) => !p.draft)
  .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")) || a.slug.localeCompare(b.slug));

export const bySlug = (s) => posts.find((p) => p.slug === s);
