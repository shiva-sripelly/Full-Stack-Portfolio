import { ArrowRight, Download } from 'lucide-react';
import { portfolioConfig as c } from '../config/portfolio';
import SocialLinks from './SocialLinks';
import StatusCard from './StatusCard';

export default function Hero() {
  return <section className="hero" id="about">
    <div className="hero-copy">
      <p className="terminal"><span>&gt;</span> whoami</p>
      <h1>Hey there!<br/>I&rsquo;m <strong>Shiva</strong></h1>
      <p className="role"><b>{c.role}</b><i>|</i> React <span>&bull;</span> Python <span>&bull;</span> FastAPI <span>&bull;</span> PostgreSQL</p>
      <div className="bio">
        <p>I build scalable full-stack web applications, REST APIs, and data-driven platforms using React, JavaScript, Python, FastAPI, PostgreSQL, and SQL.</p>
        <p>My experience includes frontend development, backend API architecture, authentication, database design, payment integrations, real-time features, and AI/LLM integrations including MCP-based tools and services.</p>
      </div>
      <div className="actions">
        <a className="button primary" href="#projects">View Projects <ArrowRight/></a>
        <a className="button secondary" href={c.resume} download="Shiva_Sripelly_Full_Stack.pdf" aria-label={`Download ${c.name}'s resume`}>Download Resume <Download/></a>
      </div>
    </div>
    <aside className="hero-side"><div className="side-card connect"><h3>/connect with me</h3><SocialLinks/></div><StatusCard/></aside>
  </section>;
}
