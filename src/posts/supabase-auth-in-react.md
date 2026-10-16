---
title: Supabase auth in React
tag: React
icon: monitor
summary: Email and password sign-in with the Supabase JS client, in three steps.
sample: false
---

Supabase gives a React app sign-in without writing a backend.

1. Create a project, then copy the project URL and anon key from the API settings.
2. Install the client with `npm install @supabase/supabase-js` and create it once:

```js
const supabase = createClient(URL, ANON_KEY);
```

3. Sign users in and listen for session changes:

```js
await supabase.auth.signInWithPassword({ email, password });
supabase.auth.onAuthStateChange((event, session) => {
  // update state
});
```
