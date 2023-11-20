import { useRouter } from 'next/router';
import OHeader from './organisms/o-header';
import OMenu from './organisms/o-menu';
import CardsIcon from '../public/svg/cards.svg';
import PacksIcon from '../public/svg/packs.svg';
import DeckIcon from '../public/svg/deck.svg';
import MMenuItem from './molecules/m-menu-item';

function Header() {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) => router.pathname === pathname;

  return (
    <div className="flex flex-col">
      <OHeader className="mb-[39px]" />
      <OMenu className="mb-5">
        <MMenuItem
          label="cards"
          href="/"
          isActive={isActive('/') || isActive('/cards')}
          svg={CardsIcon}
        />
        <MMenuItem
          label="packs"
          href="/packs"
          isActive={isActive('/packs')}
          svg={PacksIcon}
        />
        <MMenuItem
          label="your deck"
          href="/your-deck"
          isActive={isActive('/your-deck')}
          svg={DeckIcon}
        />
      </OMenu>
    </div>
  );
}

export default Header;
