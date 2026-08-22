import { pick, type Ui } from '../i18n';
import type { Locale, Profile } from '../types';

export function About({
  locale,
  text,
  profile,
}: {
  locale: Locale;
  text: Ui;
  profile: Profile;
}) {
  return (
    <section className="block reveal" data-depth="0.082">
      <div className="block-head">
        <span className="index">01</span>
        <h3>{text.about}</h3>
      </div>
      <p className="bio">{pick(locale, profile.bio, profile.bioEn)}</p>
      <div className="edu">
        <span className="index">{text.education}</span>
        <strong>{pick(locale, profile.education, profile.educationEn)}</strong>
      </div>
    </section>
  );
}
