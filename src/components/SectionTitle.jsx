export default function SectionTitle({ id, title, comment }) {
  return <div className="section-title" id={id}><h2><span>$</span> {title}</h2>{comment && <p>// {comment}</p>}</div>;
}
