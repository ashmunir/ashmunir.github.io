/**
 * Single source of truth for all SVG icons.
 * Works in both static Astro components and hydrated React islands.
 */
import type { CSSProperties } from 'react';

export type IconGlyph =
  | 'about'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'education'
  | 'contact'
  | 'ai'
  | 'data'
  | 'chip'
  | 'lib'
  | 'bot'
  | 'front'
  | 'web'
  | 'tools'
  | 'lang'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'external'
  | 'send'
  | 'download'
  | 'mail'
  | 'linkedin'
  | 'github'
  | 'close'
  | 'menu';

interface IconProps {
  name: IconGlyph;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
}

const FILLED: IconGlyph[] = ['linkedin', 'github'];

export default function Icon({ name, size = 20, strokeWidth = 1.8, className, style }: IconProps) {
  const filled = FILLED.includes(name);
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    className,
    style,
    'aria-hidden': true,
    focusable: false as const,
  };

  if (filled) {
    return (
      <svg {...common} fill="currentColor">
        {name === 'linkedin' && (
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 22 10.5 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V21H9z" />
        )}
        {name === 'github' && (
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.46-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
        )}
      </svg>
    );
  }

  return (
    <svg
      {...common}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {name === 'about' && (
        <>
          <circle cx={12} cy={8} r={4} />
          <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6" />
        </>
      )}
      {name === 'experience' && (
        <>
          <rect x={3} y={7} width={18} height={13} rx={2} />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </>
      )}
      {name === 'skills' && (
        <>
          <path d="M12 2 2 7l10 5 10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </>
      )}
      {name === 'projects' && (
        <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      )}
      {name === 'education' && (
        <>
          <path d="M22 10 12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c3 2 9 2 12 0v-5" />
        </>
      )}
      {(name === 'contact' || name === 'mail') && (
        <>
          <rect x={3} y={5} width={18} height={14} rx={2} />
          <polyline points="3 7 12 13 21 7" />
        </>
      )}
      {name === 'ai' && (
        <>
          <path d="M12 2a4 4 0 0 0-4 4v1a3 3 0 0 0-1 5.8V16a3 3 0 0 0 5 2.2A3 3 0 0 0 17 16v-3.2A3 3 0 0 0 16 7V6a4 4 0 0 0-4-4z" />
          <path d="M12 8v10" />
        </>
      )}
      {name === 'data' && (
        <>
          <ellipse cx={12} cy={5.5} rx={8} ry={3} />
          <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13" />
          <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
        </>
      )}
      {name === 'chip' && (
        <>
          <rect x={4} y={4} width={16} height={16} rx={2} />
          <rect x={9} y={9} width={6} height={6} />
          <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
        </>
      )}
      {name === 'lib' && (
        <>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </>
      )}
      {(name === 'bot') && (
        <>
          <rect x={4} y={8} width={16} height={11} rx={2} />
          <path d="M12 8V5M9 3h6" />
          <circle cx={9} cy={13} r={1} fill="currentColor" stroke="none" />
          <circle cx={15} cy={13} r={1} fill="currentColor" stroke="none" />
        </>
      )}
      {name === 'front' && (
        <>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </>
      )}
      {name === 'web' && (
        <>
          <circle cx={12} cy={12} r={9} />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z" />
        </>
      )}
      {name === 'tools' && (
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.7 2.7-2.3-2.3z" />
      )}
      {name === 'lang' && (
        <>
          <path d="M5 8h9M9 4v4c0 4-2 7-5 8" />
          <path d="M11 12c1.5 3 3.5 4.5 5 5" />
          <path d="M13 20l4-9 4 9M14.5 17h5" />
        </>
      )}
      {name === 'arrow-right' && (
        <>
          <line x1={5} y1={12} x2={19} y2={12} />
          <polyline points="12 5 19 12 12 19" />
        </>
      )}
      {(name === 'arrow-up-right' || name === 'external') && (
        <>
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </>
      )}
      {name === 'send' && (
        <>
          <line x1={22} y1={2} x2={11} y2={13} />
          <polygon points="22 2 15 22 11 13 2 9 22 2" />
        </>
      )}
      {name === 'download' && (
        <>
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1={12} y1={15} x2={12} y2={3} />
        </>
      )}
      {name === 'close' && (
        <>
          <line x1={6} y1={6} x2={18} y2={18} />
          <line x1={18} y1={6} x2={6} y2={18} />
        </>
      )}
      {name === 'menu' && (
        <>
          <line x1={4} y1={7} x2={20} y2={7} />
          <line x1={4} y1={12} x2={20} y2={12} />
          <line x1={4} y1={17} x2={20} y2={17} />
        </>
      )}
    </svg>
  );
}
