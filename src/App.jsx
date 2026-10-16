import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig, animate } from "framer-motion";
import { Sprite } from "./sprites.jsx";
import { stackGroups, projects } from "./data.js";
import { posts, bySlug } from "./posts.js";

const stepped = (t) => Math.floor(t * 6) / 6;
const SAY = "* I'm a Full-Stack Developer focused on building user-centered web solutions. Using React, Laravel, and MySQL, I turn ideas into functional digital experiences. I enjoy experimenting with ESP32 and IoT projects.";

const Badge = ({ n, s = 4, cls = "" }) => <i className={"badge px " + cls}><Sprite name={n} s={s} /></i>;
const Sp = ({ n, s = 4, cls = "" }) => <i className={"sprite " + cls}><Sprite name={n} s={s} /></i>;

const Tile = ({ i, cls, children, ...p }) => (
  <motion.section className={`tile px ${cls}`} initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: i * 0.09, ease: stepped }} {...p}>{children}</motion.section>
);

function useTyped(text, delay = 0.9) {
  const [n, set] = useState(0);
  useEffect(() => {
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const c = animate(0, text.length, { duration: rm ? 0 : text.length * 0.028, delay: rm ? 0 : delay, ease: "linear", onUpdate: (v) => set(Math.floor(v)) });
    return () => c.stop();
  }, [text, delay]);
  return text.slice(0, n);
}

function Reader({ post, onClose }) {
  useEffect(() => {
    const k = (e) => e.key === "Escape" && onClose();
    addEventListener("keydown", k);
    return () => removeEventListener("keydown", k);
  }, [onClose]);
  return (
    <motion.div className="overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.article className="post px" role="dialog" aria-modal="true" aria-label={post.title} onClick={(e) => e.stopPropagation()}
        initial={{ y: 40, scale: 0.92 }} animate={{ y: 0, scale: 1 }} exit={{ y: 40, scale: 0.92, opacity: 0 }} transition={{ duration: 0.35, ease: stepped }}>
        <div className="lab"><span>{post.tag}{post.sample && " [SAMPLE]"}</span><button className="x" onClick={onClose} aria-label="Close post">✕</button></div>
        <h2>{post.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </motion.article>
    </motion.div>
  );
}

export default function App() {
  const fromHash = () => bySlug(location.hash.replace("#/blog/", "")) || null;
  const [open, setOpen] = useState(fromHash);
  useEffect(() => {
    const sync = () => setOpen(fromHash());
    addEventListener("hashchange", sync);
    return () => removeEventListener("hashchange", sync);
  }, []);
  const openPost = (p) => { setOpen(p); try { history.replaceState(null, "", "#/blog/" + p.slug); } catch { } };
  const close = () => { setOpen(null); try { history.replaceState(null, "", location.pathname + location.search); } catch { } };
  const say = useTyped(SAY);
  return (
    <MotionConfig reducedMotion="user">
      <main className="bento">
        <Tile i={0} cls="intro">
          <div className="lab"><span>01 / Intro</span><Sp n="spark" s={4} /></div>
          <Badge n="star" s={5} cls="wave bob" />
          <h1>SYAHIRAH</h1>
          <p><span className="pr">&gt;</span> full-stack developer<span className="cur" /></p>
          <span className="pill px">Open to full-stack roles</span>
          <motion.a className="arrow px" href="mailto:i43.syahirah@gmail.com" aria-label="Email" title="Email" whileHover={{ rotate: 12 }}>↗</motion.a>
        </Tile>

        <Tile i={1} cls="stack">
          <div className="lab"><span>02 / Toolbox</span></div>
          <dl>
            {stackGroups.map((g) => (
              <div key={g.k}><dt><Sp n={g.icon} s={3} />{g.k}</dt><dd>{g.items.map((s) => <span key={s}>{s}</span>)}</dd></div>
            ))}
          </dl>
        </Tile>

        <Tile i={2} cls="proj" id="work">
          <div className="lab"><span>03 / Projects</span><span><b>{projects.length}</b> projects</span></div>
          <h2 className="big">Web apps<span>built to be used.</span></h2>
          <div className="cards">
            {projects.map((p) => {
              const inner = (<>
                <div className="top"><span>[{p.status}]</span>{p.link && <i>↗</i>}</div>
                <Badge n={p.icon} s={4} />
                <h2>{p.name}</h2>
                <p>{p.desc}</p>
                <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
              </>);
              return p.link
                ? <motion.a key={p.name} className="card px" href={p.link} target="_blank" rel="noreferrer" whileHover={{ x: -2, y: -2 }}>{inner}</motion.a>
                : <div key={p.name} className="card px">{inner}</div>;
            })}
          </div>
        </Tile>

        <Tile i={3} cls="about">
          <div className="lab"><span>04 / About</span><span className="sprites"><Sp n="heart" s={3} cls="bob" /><Sp n="star" s={3} cls="bob" /></span></div>
          <div className="hero"><Sp n="coffee" s={8} cls="bob" /><Sp n="laptop" s={12} /><Sp n="chip" s={8} cls="bob" /></div>
          <div className="dialog px" aria-label={SAY}>{say}</div>
        </Tile>

        <Tile i={4} cls="edu">
          <div className="lab"><span>05 / Education</span></div>
          <Badge n="cap" s={4} />
          <h2 className="big">Bachelor<br />of IT</h2>
          <p>UiTM</p>
        </Tile>

        <Tile i={5} cls="contact">
          <div className="top lab"><span>06 / Contact</span><Badge n="chat" s={3} /></div>
          <h2 className="big">Let's build something useful.</h2>
          <div className="btns">

            {/*         <a className="btn px icon" href="https://wa.me/601136553684" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><Sprite name="whatsapp" s={3} /></a> */}

            <a className="btn px icon" href="mailto:i43.syahirah@gmail.com" aria-label="Email" title="Email"><Sprite name="mail" s={3} /></a>
            <a className="btn px icon" href="https://github.com/iamsyahirah" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><Sprite name="github" s={3} /></a>
          </div>
        </Tile>

        <Tile i={6} cls="blog" id="blog">
          <div className="lab"><span>07 / Blog</span><span><b>{posts.length}</b> posts</span></div>
          <h2 className="big">Notes from<span>the build.</span></h2>
          <div className="posts">
            {posts.map((p) => (
              <motion.button key={p.slug} className="pcard px" type="button" onClick={() => openPost(p)} whileHover={{ x: -2, y: -2 }} whileTap={{ scale: 0.98 }}>
                <div className="tags"><Badge n={p.icon} s={3} /><span>{p.tag}{p.sample && " [SAMPLE]"}</span>{p.date && <span>{p.date}</span>}</div>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <span className="read">READ POST ▶</span>
              </motion.button>
            ))}
          </div>
        </Tile>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Syahirah. Built with React.</p>
        <nav aria-label="Footer">
          <a href="#work">Projects</a>
          <a href="#blog">Blog</a>
          <a href="mailto:i43.syahirah@gmail.com">Get in touch ↗</a>
        </nav>
      </footer>
      <AnimatePresence>{open && <Reader post={open} onClose={close} />}</AnimatePresence>
    </MotionConfig>
  );
}
