import Image from 'next/image';
import { useId } from 'react';
import ADropdown from 'components/atoms/a-dropdown';
import AToggle from 'components/atoms/a-toggle';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import MCounter from './m-counter';
import DotsIcon from '../../public/svg/dots.svg';
import FireIcon from '../../public/svg/fire.svg';
import StarIcon from '../../public/svg/star.svg';
import MenuIcon from '../../public/svg/menu.svg';
import ASvg from '../atoms/a-svg';
import AButton from '../atoms/a-button';
import ArrowIcon from '../../public/svg/arrow.svg';

type Props = {
  className?: string;
  id?: string;
  no?: string;
  count?: string;
  image?: string;
  name?: string;
  collectionName?: string;
  properties?: {
    name: string;
    value: number;
  }[];
  poweredBy?: string;
  isOnSwap: boolean;
  isOnSale: boolean;
};

export default function MCard({
  className,
  id,
  no,
  count,
  image,
  name,
  collectionName,
  properties,
  poweredBy,
  isOnSwap,
  isOnSale,
}: Props) {
  const key = useId();
  const endpointUrl = `/api/cards/${id}`;

  const onToggle = (toggleId: string, state: boolean) => {
    const mock = new MockAdapter(axios);
    mock.onPost(endpointUrl).reply(200);
    axios.post(endpointUrl, {
      state: {
        [toggleId]: state,
      },
    });
  };
  const options = [
    {
      key: 'send',
      value: 'Send',
      className: 'text-xs',
      disabled: true,
    },
    {
      key: 'on-swap',
      value: 'On swap',
      className: 'text-xs cursor-auto hover:bg-white',
      children: (
        <AToggle
          isActive={isOnSwap}
          onChange={onToggle}
          id="isOnSwap"
        />
      ),
    },
    {
      key: 'on-sale',
      value: 'On sale',
      className: 'text-xs cursor-auto hover:bg-white',
      children: (
        <AToggle
          isActive={isOnSale}
          onChange={onToggle}
          id="isOnSale"
        />
      ),
    },
    {
      key: 'share',
      value: 'Share',
      children: (
        <ArrowIcon className="h-4 w-4 -rotate-90 fill-black-40" />
      ),
      className: 'text-xs font-semibold',
      disabled: true,
    },
  ];
  return (
    <section id={id} className={`m-card ${className ?? ''}`}>
      <div className="flex flex-col rounded-2xl border border-gray-200 px-[18px]">
        <div className="relative -top-5 ">
          <div className="mb-5 flex flex-col rounded-2xl bg-card-transparent bg-cover">
            <div className="flex items-center p-2">
              <Image
                className="mr-2"
                alt="hologram_icon"
                src="/img/hologram.png"
                width={32}
                height={32}
              />
              {no && (
                <div className="flex items-center">
                  <div className="text-sm font-medium text-indigo-500">
                    {no}
                  </div>
                  <div className="px-1 text-sm font-medium text-violet-200">
                    /
                  </div>
                </div>
              )}
              {count && (
                <div className="text-sm font-medium text-indigo-500">
                  {count}
                </div>
              )}
            </div>
            {image && (
              <Image
                className="w-min-[426px] h-[391px] md:h-[220px] md:w-[240px] object-cover"
                alt="card_icon"
                src={image}
                width={426}
                height={391}
              />
            )}
            <div className="flex flex-col p-4 ">
              {name && (
                <div className="mb-1 text-[15px] font-semibold leading-[15px] tracking-tighter  text-indigo-500">
                  {name}
                </div>
              )}
              {collectionName && (
                <div className="mb-3 text-[10px] font-semibold uppercase leading-4 tracking-tight text-violet-300">
                  {collectionName}
                </div>
              )}
              {properties && (
                <div className="mb-4 flex">
                  {properties?.map((property) => (
                    <MCounter
                      key={`${property.name}${key}`}
                      className="flex flex-1 items-center"
                      svg={property.name === 'fire' ? FireIcon : StarIcon}
                      textColor={
                        property.name === 'fire'
                          ? 'text-pink-300'
                          : 'text-indigo-400'
                      }
                      iconFill={
                        property.name === 'fire'
                          ? 'fill-pink-300'
                          : 'fill-indigo-400'
                      }
                      value={property.value}
                    />
                  ))}
                </div>
              )}
              {DotsIcon && (
                <ASvg className="mb-3 fill-violet-300" svg={DotsIcon} />
              )}
              {poweredBy && (
                <div className="flex items-center text-[10px] font-semibold leading-5 tracking-[-.3px]">
                  <span className="mr-1 text-violet-300">Powered by</span>
                  <span className="text-indigo-500">{poweredBy}</span>
                </div>
              )}
            </div>
          </div>
          <ADropdown
            options={options}
            className={`a-dropdown ${className ?? ''}`}
          >
            <AButton>
              <ASvg className="w-5 fill-black" svg={MenuIcon} />
            </AButton>
          </ADropdown>
        </div>
      </div>
    </section>
  );
}
