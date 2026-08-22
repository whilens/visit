import { pick, type Ui } from '../i18n';
import type { Locale, Skill } from '../types';

export function Skills({
  locale,
  text,
  skills,
}: {
  locale: Locale;
  text: Ui;
  skills: Skill[];
}) {
  const groups: Record<string, Skill[]> = {};
  for (const skill of skills) {
    const cat = pick(locale, skill.category, skill.categoryEn);
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(skill);
  }

  return (
    <section className="block reveal">
      <div className="block-head">
        <span className="index">02</span>
        <h3>{text.skills}</h3>
      </div>
      <div className="skill-groups">
        {Object.entries(groups).map(([category, list], i) => (
          <article key={category} className="skill-group" data-depth={i % 2 === 0 ? '0.072' : '-0.052'}>
            <h4>{category}</h4>
            <ul>
              {list.map((skill) => (
                <li key={skill.id}>
                  <span>{skill.name}</span>
                  <i style={{ ['--lvl' as string]: String(skill.level) }} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
