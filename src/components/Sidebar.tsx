import { useEffect, useState } from 'react';
import Icon from './Icon';
import { nav, profile } from '../data/portfolio';

const SECTION_IDS = nav.map((n) => n.id);

export default function Sidebar() {
  const [active, setActive] = useState<string>('about');
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll spy: highlight the nav item for the section in the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const socialBtn =
    'inline-flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-white/10 text-[#B7C8DF] transition-colors hover:bg-cyan hover:text-[#04252B]';

  return (
    <>
      {/* Mobile top bar — hamburger on the left to match the left drawer */}
      <div className="pf-topbar">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="inline-flex h-[42px] w-[42px] cursor-pointer items-center justify-center border-none bg-transparent text-ink"
        >
          <Icon name={menuOpen ? 'close' : 'menu'} size={26} strokeWidth={2} />
        </button>
        <span className="text-[18px] font-bold text-ink">{profile.name}</span>
      </div>

      {/* Drawer backdrop (mobile only, via CSS) */}
      {menuOpen && (
        <div className="pf-drawer-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}

      {/* Identity sidebar / drawer */}
      <aside className={`pf-side ${menuOpen ? 'pf-side-open' : ''}`}>
        <div className="flex flex-col items-center text-center">
          <div className="h-[104px] w-[104px] overflow-hidden rounded-full border-[3px] border-cyan/50 shadow-[0_8px_20px_rgba(0,0,0,0.25)]">
            <img
              src={profile.avatar}
              alt={profile.name}
              width="104"
              height="104"
              className="block h-full w-full object-cover"
              style={{ objectPosition: '50% 50%' }}
            />
          </div>
          <h1 className="mt-4 text-[clamp(21px,5.5vw,23px)] font-bold leading-[1.1] tracking-[-0.6px] text-white">
            {profile.name}
          </h1>
          <p className="mt-[11px] text-[14px] font-bold tracking-[0.2px] text-cyan">{profile.role}</p>
          <p className="mt-[3px] text-[13px] text-[#8FA6C4]">{profile.tagline}</p>
          <div className="mt-4 flex gap-[9px]">
            <a href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className={socialBtn}>
              <Icon name="linkedin" size={18} />
            </a>
            <a href={profile.github} target="_blank" rel="noopener" aria-label="GitHub" className={socialBtn}>
              <Icon name="github" size={18} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className={socialBtn}>
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>

        <nav className="mt-6 flex flex-col gap-[3px]">
          {nav.map((item) => {
            const on = item.id === active;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className={`flex items-center gap-3 rounded-[11px] px-3 py-[9px] text-[14.5px] font-bold transition-colors hover:bg-white/[0.07] hover:text-white ${
                  on ? 'bg-cyan/[0.14] text-white shadow-[inset_3px_0_0_#4FD1DE]' : 'text-[#8FA6C4]'
                }`}
              >
                <span className="inline-flex h-[19px] w-[19px] flex-shrink-0 items-center justify-center">
                  <Icon name={item.icon} size={19} />
                </span>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="min-h-[24px] flex-1" />

        <div className="mt-6 border-t border-white/[0.09] pt-5">
          <p className="m-0 text-[12px] text-[#7E96B6]">
            Made with <span className="text-[#F87171]">♥</span> using Astro &amp; React
          </p>
          <p className="mt-[3px] text-[12px] text-[#7E96B6]">© {new Date().getFullYear()} {profile.name}</p>
        </div>
      </aside>
    </>
  );
}
