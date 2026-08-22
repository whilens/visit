import { useState, type PointerEvent } from 'react';
import { pick, type Ui } from '../i18n';
import type { Locale, Profile } from '../types';

export function Hero({
  locale,
  text,
  profile,
}: {
  locale: Locale;
  text: Ui;
  profile: Profile;
}) {
  const [noPhoto, setNoPhoto] = useState(false);
  const name = pick(locale, profile.name, profile.nameEn);

  function tilt(e: PointerEvent<HTMLDivElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--tx', ((e.clientX - box.left) / box.width - 0.5).toFixed(3));
    e.currentTarget.style.setProperty('--ty', ((e.clientY - box.top) / box.height - 0.5).toFixed(3));
  }

  function untilt(e: PointerEvent<HTMLDivElement>) {
    e.currentTarget.style.setProperty('--tx', '0');
    e.currentTarget.style.setProperty('--ty', '0');
  }

  return (
    <section className="hero">
      <p className="eyebrow">
        {text.card}
        <span> · </span>
        {profile.yearsExperience} {text.years}
      </p>
      <div className="hero-grid">
        <div className="portrait" onPointerMove={tilt} onPointerLeave={untilt}>
          {profile.photoUrl && !noPhoto ? (
            <img src={profile.photoUrl} alt={name} onError={() => setNoPhoto(true)} />
          ) : (
            <div className="portrait-fallback">АГ</div>
          )}
          <div className="portrait-sheen" />
        </div>
        <div className="hero-copy">
          <p className="kicker">{pick(locale, profile.role, profile.roleEn)}</p>
          <h2>{name}</h2>
          <p className="tagline">{pick(locale, profile.tagline, profile.taglineEn)}</p>
          <div className="cta">
            <a className="btn btn-fill" href={profile.telegram} target="_blank" rel="noreferrer">
              {text.telegram}
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              {text.email}
            </a>
            {profile.github ? (
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer">
                {text.github}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
