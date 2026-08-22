import { pick, type Ui } from '../i18n';
import type { Experience as Job, Locale } from '../types';

export function Experience({
  locale,
  text,
  items,
}: {
  locale: Locale;
  text: Ui;
  items: Job[];
}) {
  return (
    <section className="block reveal" data-depth="0.052">
      <div className="block-head">
        <span className="index">04</span>
        <h3>{text.experience}</h3>
      </div>
      <div className="timeline">
        {items.map((item) => (
          <article key={item.id} className="job">
            <div className="job-meta">
              <strong>{pick(locale, item.company, item.companyEn)}</strong>
              <span>{pick(locale, item.period, item.periodEn)}</span>
            </div>
            <p className="job-role">{pick(locale, item.role, item.roleEn)}</p>
            <ul>
              {pick(locale, item.items, item.itemsEn).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
