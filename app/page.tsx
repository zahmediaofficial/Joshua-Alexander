'use client';
import { motion } from '@motionone/react';
const projects=[['01','LAUDEM-OS','Building an operating system for a performing arts institution.'],['02','LOCAL AI AGENT','Testing how capable private, local AI coding agents can become.'],['03','ZAH MEDIA','Building better systems for photography and creative production.']];
const writing=[['BUILD','I built my first local AI agent. Here’s what I learned.'],['BUSINESS','Why we’re building our own operating system instead of buying one.'],['JOURNAL','I started as a music teacher. Now I’m building the systems behind the business.']];
export default function Home(){return <main>
<nav><a className="brand" href="#top">JA.</a><div><a href="#writing">Writing</a><a href="#projects">Projects</a><a href="#lab">Lab</a><a href="#about">About</a></div></nav>
<section id="top" className="hero">
<motion.p className="eyebrow" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{duration:.6}}>CREATIVE / BUILDER / ENTREPRENEUR · TRINIDAD & TOBAGO</motion.p>
<motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.1}}>BUILD THINGS.<br/><span>BREAK THINGS.</span></motion.h1>
<motion.p className="intro" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55,duration:.8}}>I’m Joshua Alexander. I build businesses, creative work and, increasingly, the technology behind them. This is the living record.</motion.p>
<div className="orbit orbit1">AI</div><div className="orbit orbit2">MUSIC</div><div className="orbit orbit3">SYSTEMS</div><div className="scroll">SCROLL ↓</div>
</section>
<section className="statement"><p>Not a guru. Not a finished story.</p><h2>I’m building in public — documenting the experiments, failures and things worth keeping.</h2></section>
<section id="projects" className="section"><header><span>01</span><h2>Currently building</h2></header>{projects.map((p,i)=><motion.article className="project" key={p[1]} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p><b>↗</b></motion.article>)}</section>
<section id="writing" className="section writing"><header><span>02</span><h2>Latest writing</h2></header>{writing.map((w,i)=><article className="story" key={w[1]}><small>{w[0]} / 2026</small><h3>{w[1]}</h3><span>READ →</span></article>)}</section>
<section id="lab" className="video"><div><small>THE LAB / VIDEO READY</small><h2>What happens when a Caribbean creative operator starts building with AI?</h2><p>This space is designed for films, build logs, demos, experiments and the occasional spectacular failure.</p><button>PLAY EXPERIMENT ↗</button></div><div className="frame"><span>VIDEO / 16:9</span><div className="play">▶</div></div></section>
<section id="about" className="about"><small>ABOUT / NOW</small><h2>Music taught me to create.<br/>Business taught me constraints.<br/>Technology made me curious again.</h2><p>I’m documenting what happens next from Trinidad & Tobago.</p></section>
<footer><div><strong>JOSHUA ALEXANDER</strong><p>Build things. Break things. Learn publicly.</p></div><div><span>ENQUIRIES</span><a href="mailto:zahmedia.tt@gmail.com">Zah Media email ↗</a></div><div><span>© 2026</span><a href="#top">Back to top ↑</a></div></footer>
</main>}
