import type { PointerEvent } from 'react';
import { pick, type Ui } from '../i18n';
import type { Locale, Project } from '../types';

function shine(e: PointerEvent<HTMLElement>) {
  const box = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--lx', `${e.clientX - box.left}px`);
  e.currentTarget.style.setProperty('--ly', `${e.clientY - box.top}px`);
}

export function Projects({
  locale,
  text,
  projects,
}: {
  locale: Locale;
  text: Ui;
  projects: Project[];
}) {
  return (
    <section className="block reveal">
      <div className="block-head">
        <span className="index">03</span>
        <h3>{text.projects}</h3>
      </div>
      <div className="projects">
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="project"
            data-depth={i % 2 === 0 ? '0.062' : '-0.041'}
            onPointerMove={shine}
          >
            <div className="project-top">
              <h4>{pick(locale, project.title, project.titleEn)}</h4>
              {project.url ? (
                <a href={project.url} target="_blank" rel="noreferrer">
                  {text.open}
                </a>
              ) : (
                <span className="muted">{text.private}</span>
              )}
            </div>
            <p>{pick(locale, project.summary, project.summaryEn)}</p>
            <ul>
              {pick(locale, project.highlights, project.highlightsEn).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="chips">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
