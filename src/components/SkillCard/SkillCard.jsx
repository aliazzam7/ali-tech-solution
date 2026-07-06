import "./SkillCard.css";

export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <span className="skill-card-name">{skill.name}</span>
      <span className="skill-card-category">{skill.category}</span>
    </div>
  );
}
