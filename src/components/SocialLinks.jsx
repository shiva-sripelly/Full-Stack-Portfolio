import { Mail, FileText } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { portfolioConfig as c, emailComposeLink } from '../config/portfolio';

const socials = [
  {label:'LinkedIn', href:c.linkedin, Icon:FaLinkedin, external:true, aria:`Visit ${c.name}'s LinkedIn profile`, title:'Connect on LinkedIn'},
  {label:'GitHub', href:c.github, Icon:FaGithub, external:true, aria:`Visit ${c.name}'s GitHub profile`, title:'View my GitHub'},
  {label:'Email', href:emailComposeLink, Icon:Mail, external:true, aria:`Email ${c.name}`, title:'Send me an email'},
  {label:'Resume', href:c.resume, Icon:FileText, external:true, aria:`View ${c.name}'s resume`, title:'View Resume'},
];
export default function SocialLinks(){return <div className="social-grid">{socials.map(({label,href,Icon,external,aria,title})=>href?<a key={label} href={href} aria-label={aria} title={title} {...(external?{target:'_blank',rel:'noopener noreferrer'}:{})}><Icon/><span>{label}</span></a>:<span className="social-unavailable" key={label} aria-label={`${label} unavailable`} title={`${label} not configured`}><Icon/><span>{label}</span></span>)}</div>}
