import ASvg from '../atoms/a-svg';
import formatNumber from '../utils/numbers';

type MCounterProps = {
  className?: string;
  svg?: any;
  value: number;
  textColor?: string;
  iconFill?: string;
};

export default function MCounter({
  className,
  svg,
  value,
  textColor,
  iconFill,
}: MCounterProps) {
  const Svg = svg;
  return (
    <div className={`m-counter ${className ?? ''}`}>
      {Svg && <ASvg className={`mr-1 h-5 w-5 ${iconFill}`} svg={Svg} />}
      {value && (
        <div
          className={`text-sm font-semibold leading-[20px] ${textColor} tracking-tight`}
        >
          {formatNumber(value)}
        </div>
      )}
    </div>
  );
}
