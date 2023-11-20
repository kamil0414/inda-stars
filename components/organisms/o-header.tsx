import Link from 'next/link';
import ASvg from '../atoms/a-svg';
import indaStarsLogoIcon from '../../public/svg/indaStarsLogo.svg';

type OHeaderProps = {
  className?: string;
};

export default function OHeader({ className }: OHeaderProps) {
  return (
    <section className={`o-cards border-b border-black-10 ${className ?? ''}`}>
      <div className="container mx-auto">
        <div className="px-12 py-5">
          <Link href="/">
            <ASvg className="h-[64px]" svg={indaStarsLogoIcon} />
          </Link>
        </div>
      </div>
    </section>
  );
}
