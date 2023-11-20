import Link from 'next/link';
import ASvg from '../../atoms/a-svg';

type MMenuItemProps = {
  className?: string;
  label?: string;
  href: string;
  isActive?: boolean;
  svg?: any;
};

export default function MMenuItem({
  className,
  label,
  href,
  isActive,
  svg,
}: MMenuItemProps) {
  const Svg = svg;
  return (
    <div className={`m-menu-item ${className ?? ''}`}>
      <Link href={href} className="flex items-center pb-4">
        <ASvg
          className={`mr-1 h-5 w-5 ${
            isActive ? 'active fill-rose-400' : 'fill-black-20'
          }`}
          svg={Svg}
        />
        <div
          className={`font-semibold uppercase leading-5 transition-colors hover:text-rose-400 ${
            isActive ? 'text-black-100' : 'text-black-20'
          }`}
        >
          {label}
        </div>
      </Link>
      {isActive && (
        <div className="relative -bottom-[1px] h-0.5 rounded-lg bg-gradient-to-r from-pink-400 to-rose-400" />
      )}
    </div>
  );
}
