import { Mail, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import SectionTitle from './SectionTitle';
import { portfolioConfig as c, emailComposeLink, emailLink } from '../config/portfolio';

const profileLabel = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export default function Contact() {
  return <section className="section"><SectionTitle id="contact" title="contact"/><div className="contact-card">
    <div><h2>Let&rsquo;s build something impactful.</h2><p>I&rsquo;m open to Full Stack Developer, Python Developer, Backend Developer, Software Engineer, and Data Engineer opportunities.</p></div>
    <div className="contact-links">
      <a href={emailLink} aria-label={`Email ${c.name}`}><Mail/>{c.email}</a>
      <a href={c.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${c.name}'s LinkedIn profile`}><FaLinkedin/>{profileLabel(c.linkedin)}</a>
      <a href={c.github} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${c.name}'s GitHub profile`}><FaGithub/>{profileLabel(c.github)}</a>
    </div>
    <div className="contact-action"><a className="button primary" href={emailComposeLink} target="_blank" rel="noopener noreferrer" aria-label={`Contact ${c.name} about an opportunity`}>Get In Touch <ArrowRight/></a><small>Available for opportunities</small></div>
  </div></section>;
}
