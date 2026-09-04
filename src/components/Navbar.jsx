import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';

const links = [['about','about'], ['experience','experience'], ['projects','projects'], ['skills','skills'], ['contact','contact']];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [light, setLight] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn=()=>setScrolled(scrollY>10); addEventListener('scroll',fn); return()=>removeEventListener('scroll',fn); },[]);
  const toggle=()=>{ setLight(v=>!v); document.documentElement.classList.toggle('light'); };
  return <header className={`navbar ${scrolled?'scrolled':''}`}><div className="nav-inner">
    <a className="brand" href="#about"><span>$</span> shiva.</a>
    <nav className={open?'open':''}>{links.map(([label,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>/{label}</a>)}<button className="theme" onClick={toggle} aria-label="Toggle theme">{light?<Sun/>:<Moon/>}</button></nav>
    <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
  </div></header>;
}
