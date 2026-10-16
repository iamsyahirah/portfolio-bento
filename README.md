# Syahirah site

## Add a blog post
1. Create a file in `src/posts/`, for example `my-new-post.md` (the filename becomes the link: `#/blog/my-new-post`).
2. Start it with this header, then write the post in Markdown below it:

```
---
title: My new post
tag: React
icon: monitor
summary: One sentence shown on the card.
date: 2026-11-01
---
```

- `icon`: any sprite name (chip, monitor, db, book, books, clock, check, cap, chat, star, heart).
- `date` is optional. Newest date shows first.
- `sample: true` shows a [SAMPLE] tag. Delete the line for real posts.
- `draft: true` hides a post while you write it.

No code changes are needed: save the file and the post appears.

## Run
`npm install` then `npm run dev`. Build with `npm run build` and publish `dist`.
