import { ReactNode } from 'react';

type OMenuProps = {
  className?: string;
  children?: ReactNode;
};

export default function OMenu({ className, children }: OMenuProps) {
  return (
    <section className={`o-menu ${className ?? ''}`}>
      <div className="container mx-auto">
        <div className="px-[88px]">
          <div className="flex gap-12 border-b border-black-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
