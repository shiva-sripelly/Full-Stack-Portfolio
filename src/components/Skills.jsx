import SectionTitle from './SectionTitle'; import { skills } from '../data/skills';
function SkillCard({skill}){const I=skill.icon;return <article className="skill-card"><I className={skill.tone}/><div><h3>{skill.title}</h3><ul>{skill.items.map(x=><li key={x}>{x}</li>)}</ul></div></article>}
export default function Skills(){return <section className="section"><SectionTitle id="skills" title="skills" comment="Technologies I work with"/><div className="skills-grid">{skills.map(s=><SkillCard key={s.title} skill={s}/>)}</div></section>}
