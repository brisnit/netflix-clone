import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function NetflixLogo(props: IconProps) {
  return (
    <svg viewBox="0 0 370 100" fill="none" aria-hidden="true" {...props}>
      <path
        fill="#e50914"
        d="M50.83 93.54V0H35.21v56.77L14.9 0H0v100c5.31-.83 10.31-1.56 15.94-2.19V43.23l17.81 52.4c5.94-.84 11.56-1.15 17.08-2.09m30.84-56.87V15.63h27.6V0H66.04v92.3l43.23-3.45v-15c-9.27.32-18.44 1.05-27.6 1.67V52.3c5.83-.31 13.95-.31 20.83-.31V36.35c-5.52 0-14.8.32-20.83.32m85.73-21.04V0h-48.03v15.63h16.15V87.7c5.1-.21 10.42-.21 15.63-.21V15.63zm25.41 19.9v-19.9h28.34V0H177.4v86.67h15.41V51.15h21.36V35.52zm53.65 37.39V0h-15.63v87.7a930 930 0 0 1 42.2 2.1V74.26c-8.65-.42-17.61-1.14-26.57-1.35m39.79 17.91c5 .32 10.2.52 15.31 1.15V0h-15.31zM370 0h-17.08l-10.94 26.25L331.78 0H314.9l18.23 46.98-20.1 45.83c5.62.73 11.14 1.04 16.76 1.98l11.46-26.56 11.15 28.96c5.93.94 11.77 1.98 17.6 2.81l-19.8-52.4z"
      />
    </svg>
  );
}

export function LanguageIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.77 5.33 10.5 6 9.34 8.94l-.57 1.44L7.33 14h1.78l.73-1.97h3.58l.74 1.97H16l-3.43-8.67zm-.15 4.6-.24.63h2.51l-1.26-3.35zm-1.1-5.09.1-.19h-3.2V2h-1.5v2.65H.55V6h3.77A11 11 0 0 1 0 10.43c.33.28.81.8 1.05 1.16 1.5-.91 2.85-2.36 3.88-4.02v5.1h1.49V7.52q.6.95 1.33 1.8l.57-1.43a12 12 0 0 1-1.34-1.9h2.09z"
      />
    </svg>
  );
}

export function CaretDownIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6 6.5c.15 0 .22.18.12.28l-3.48 3.48a.33.33 0 0 1-.48 0L4.28 6.78a.17.17 0 0 1 .12-.28z"
      />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m15.586 12-7.293 7.293 1.414 1.414 8-8a1 1 0 0 0 0-1.414l-8-8-1.414 1.414z"
      />
    </svg>
  );
}

/** Thin plus used by the FAQ accordion; rotated 45° it becomes the close "×". */
export function PlusIcon({ size, ...props }: IconProps & { size: 24 | 36 }) {
  const d =
    size === 36
      ? "M17 17V3h2v14h14v2H19v14h-2V19H3v-2z"
      : "M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" aria-hidden="true" {...props}>
      <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d={d} />
    </svg>
  );
}
