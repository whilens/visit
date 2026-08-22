import { useEffect, useState } from 'react';
import { fetchCard } from './api';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { pick, ui, type Ui } from './i18n';
import { setupMotion } from './motion';
import type { CardData, Locale } from './types';

function startLocale(): Locale {
  const saved = localStorage.getItem('locale');
  if (saved === 'ru' || saved === 'en') return saved;
  return navigator.language.startsWith('ru') ? 'ru' : 'en';
}

export default function App() {
  const [locale, setLocale] = useState<Locale>(startLocale);
  const [data, setData] = useState<CardData | null>(null);
  const [error, setError] = useState(false);
  const text = ui[locale];

  function load() {
    setError(false);
    fetchCard()
      .then(setData)
      .catch(() => {
        setData(null);
        setError(true);
      });
  }

  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);
    if (data) {
      document.title = pick(locale, `${data.profile.name} · визитка`, `${data.profile.nameEn} · card`);
    }
  }, [locale, data]);

  useEffect(() => {
    if (!data) return;
    return setupMotion();
  }, [data]);

  if (!data) {
    return (
      <>
        <Backdrop />
        <div className="boot">
          {error ? (
            <>
              <p>{text.loadError}</p>
              <button type="button" className="btn btn-fill" onClick={load}>
                {text.retry}
              </button>
            </>
          ) : (
            <span className="brand-mark">АГ</span>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      <Backdrop />
      <div className="cursor" aria-hidden>
        <span className="cursor-dot" />
        <span className="cursor-ring" />
      </div>
      <div className="page">
        <Topbar locale={locale} text={text} onLocale={setLocale} />
        <Hero locale={locale} text={text} profile={data.profile} />
        <About locale={locale} text={text} profile={data.profile} />
        <Skills locale={locale} text={text} skills={data.skills} />
        <Projects locale={locale} text={text} projects={data.projects} />
        <Experience locale={locale} text={text} items={data.experiences} />
        <footer className="foot">
          <div>
            <p className="foot-name">{data.profile.name}</p>
            <p className="muted">{text.built}</p>
          </div>
          <div className="foot-links">
            <a href={data.profile.telegram} target="_blank" rel="noreferrer">
              {text.telegram}
            </a>
            <a href={`mailto:${data.profile.email}`}>{text.email}</a>
          </div>
        </footer>
      </div>
    </>
  );
}

function Backdrop() {
  return (
    <div className="bg" aria-hidden>
      <div className="bg-orb bg-orb-a" />
      <div className="bg-orb bg-orb-b" />
      <div className="bg-orb bg-orb-c" />
      <div className="bg-ring bg-ring-a" />
      <div className="bg-ring bg-ring-b" />
      <div className="bg-grid" />
      <div className="bg-vignette" />
    </div>
  );
}

function Topbar({
  locale,
  text,
  onLocale,
}: {
  locale: Locale;
  text: Ui;
  onLocale: (locale: Locale) => void;
}) {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="brand-mark">АГ</span>
        <span className="brand-label">{text.card}</span>
      </div>
      <div className="topbar-end">
        <span className="pulse">{text.available}</span>
        <div className="lang">
          <button type="button" className={locale === 'ru' ? 'is-on' : ''} onClick={() => onLocale('ru')}>
            RU
          </button>
          <button type="button" className={locale === 'en' ? 'is-on' : ''} onClick={() => onLocale('en')}>
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
