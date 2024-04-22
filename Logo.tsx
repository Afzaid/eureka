import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LogoType = {
  /** Style props */
  frameDivTop?: CSSProperties["top"];
  propDisplay?: CSSProperties["display"];
};

const Logo: FunctionComponent<LogoType> = ({ frameDivTop, propDisplay }) => {
  const logo6Style: CSSProperties = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  const stocksALotStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div
      className="!m-[0] absolute top-[70px] left-[42px] flex flex-row items-center justify-start gap-[28px] text-left text-9xl text-primary-800 font-heading-6 mq450:flex-wrap"
      style={logo6Style}
    >
      <img
        className="h-[90px] w-[86.1px] relative"
        loading="lazy"
        alt=""
        src="/group-39796.svg"
      />
      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
        <h1
          className="m-0 relative text-inherit leading-[64px] font-bold font-inherit mq450:text-3xl mq450:leading-[51px]"
          style={stocksALotStyle}
        >
          Stocks A Lot
        </h1>
      </div>
    </div>
  );
};

export default Logo;
